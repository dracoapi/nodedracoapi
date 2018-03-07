"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const request = require("request-promise-native");
const jwt = require("jwt-simple");
const objects = require("./draco/objects");
exports.objects = objects;
const enums = require("./draco/enums");
exports.enums = enums;
const serializer_1 = require("./draco/serializer");
const deserializer_1 = require("./draco/deserializer");
const google_1 = require("./lib/google");
const fight_1 = require("./fight");
const inventory_1 = require("./inventory");
const eggs_1 = require("./eggs");
const creatures_1 = require("./creatures");
class User {
}
exports.User = User;
class Auth {
    constructor(init) {
        Object.assign(this, init);
    }
}
class DracoError extends Error {
    constructor(message, details) {
        super(message);
        Object.setPrototypeOf(this, DracoError.prototype);
        this.details = details;
    }
}
class Client {
    constructor(options = {}) {
        this.checkProtocol = true;
        this.eventsCounter = {};
        this.protocolVersion = options.protocolVersion || '1052269079';
        this.clientVersion = options.clientVersion || '10593';
        if (options.hasOwnProperty('checkProtocol'))
            this.checkProtocol = options.checkProtocol;
        if (options.hasOwnProperty('eventsCounter'))
            this.eventsCounter = options.eventsCounter;
        if (options.hasOwnProperty('utcOffset')) {
            this.utcOffset = +options.utcOffset;
        }
        else {
            this.utcOffset = -new Date().getTimezoneOffset() * 60;
        }
        this.proxy = options.proxy;
        const cookies = request.jar();
        this.request = request.defaults({
            proxy: options.proxy,
            headers: {
                'Host': 'us.draconiusgo.com',
                'X-Unity-Version': '2017.1.3f1',
                'Accept': '*/*',
                'Protocol-Version': this.protocolVersion,
                'Client-Version': this.clientVersion,
                'Accept-Language': 'en-us',
                'User-Agent': `DraconiusGO/${this.clientVersion} CFNetwork/894 Darwin/17.4.0`,
            },
            encoding: null,
            gzip: true,
            jar: cookies,
            simple: false,
            resolveWithFullResponse: true,
        });
        cookies.setCookie(request.cookie('path=/'), 'https://us.draconiusgo.com');
        cookies.setCookie(request.cookie('Path=/'), 'https://us.draconiusgo.com');
        cookies.setCookie(request.cookie('domain=.draconiusgo.com'), 'https://us.draconiusgo.com');
        this.clientInfo = new objects.FClientInfo({
            deviceModel: 'iPhone8,1',
            iOsAdvertisingTrackingEnabled: false,
            language: options.lang || 'English',
            platform: 'IPhonePlayer',
            platformVersion: 'iOS 10.3.3',
            revision: this.clientVersion,
            screenHeight: 1334,
            screenWidth: 750,
        });
        this.user = new User();
        this.fight = new fight_1.Fight(this);
        this.inventory = new inventory_1.Inventory(this);
        this.eggs = new eggs_1.Eggs(this);
        this.creatures = new creatures_1.Creatures(this);
    }
    getAccuracy() {
        return [20, 65][Math.floor(Math.random() * 2)];
    }
    async ping(throwIfError = false) {
        try {
            const response = await this.request.post({
                url: 'https://us.draconiusgo.com/ping',
                headers: {
                    'Content-Type': 'application /x-www-form-urlencoded',
                    'Protocol-Version': undefined,
                    'Client-Version': undefined,
                },
                simple: true,
            });
            return true;
        }
        catch (e) {
            if (throwIfError)
                throw e;
            else
                return false;
        }
    }
    async call(service, method, body) {
        const serializer = new serializer_1.default();
        const buffer = serializer.serialize(body);
        const formData = {
            'service': {
                value: service,
                options: {
                    contentType: 'text/plain; charset="utf-8"',
                }
            },
            'method': {
                value: method,
                options: {
                    contentType: 'text/plain; charset="utf-8"',
                }
            },
            'args': {
                value: buffer,
                options: {
                    filename: 'args.dat',
                    contentType: 'application/octet-stream',
                },
            },
        };
        const response = await this.request.post({
            url: 'https://us.draconiusgo.com/serviceCall',
            formData,
            headers: {
                dcportal: this.dcportal,
            },
        });
        if (response.headers['dcportal'])
            this.dcportal = response.headers['dcportal'];
        const serverVersion = response.headers['protocol-version'];
        if (serverVersion) {
            if (this.protocolVersion && this.protocolVersion !== serverVersion) {
                throw new Error('Unsupported protocol: ' + serverVersion);
            }
        }
        const deserializer = new deserializer_1.default(response.body);
        if (response.statusCode > 300) {
            let more = response.body ? response.body.toString() : '';
            try {
                more = deserializer.deserialize();
            }
            catch (e) { }
            throw new DracoError('Error from server: ' + response.statusCode + ' - ' + response.statusMessage, more);
        }
        const data = deserializer.deserialize();
        return data;
    }
    async post(url, data) {
        const response = await this.request.post({
            url,
            form: data,
            headers: {
                dcportal: this.dcportal,
            },
        });
    }
    async event(name, one, two, three) {
        const eventCounter = this.eventsCounter[name] || 1;
        await this.call('ClientEventService', 'onEventWithCounter', [
            name,
            this.user.id,
            this.clientInfo,
            eventCounter,
            one,
            two,
            three,
            null,
            null
        ]);
        this.eventsCounter[name] = eventCounter + 1;
    }
    async boot(clientinfo) {
        this.user.id = clientinfo.userId;
        this.user.deviceId = clientinfo.deviceId;
        this.user.login = (clientinfo.login || 'DEVICE').toUpperCase();
        this.user.username = clientinfo.username;
        this.user.password = clientinfo.password;
        this.clientInfo.iOsVendorIdentifier = clientinfo.deviceId;
        for (const key in clientinfo) {
            if (this.clientInfo.hasOwnProperty(key)) {
                this.clientInfo[key] = clientinfo[key];
            }
        }
        // await this.event('LoadingScreenPercent', '100');
        // await this.event('Initialized');
        return this.getConfig();
    }
    async getConfig() {
        const config = await this.call('AuthService', 'getConfig', [this.clientInfo.language]);
        this.buildConfigHash(config);
        return config;
    }
    buildConfigHash(config) {
        const buffer = new serializer_1.default().serialize(config);
        this.configHash = Buffer.from(crypto.createHash('md5').update(buffer).digest());
        return this.configHash;
    }
    async login() {
        if (this.user.login === 'DEVICE') {
            this.auth = new Auth({
                name: 'DEVICE',
                type: enums.AuthType.DEVICE,
                reg: 'dv',
                profileId: this.user.deviceId,
            });
        }
        else if (this.user.login === 'GOOGLE') {
            this.auth = new Auth({
                name: 'GOOGLE',
                type: enums.AuthType.GOOGLE,
                reg: 'gl',
                profileId: '?',
            });
            await this.googleLogin();
        }
        else if (this.user.login === 'FACEBOOK') {
            throw new Error('Facebook login not implemented.');
        }
        else {
            throw new Error('Unsupported login type: ' + this.user.login);
        }
        // await this.event('TrySingIn', this.auth.name);
        const response = await this.call('AuthService', 'trySingIn', [
            new objects.AuthData({
                authType: this.auth.type,
                profileId: this.auth.profileId,
                tokenId: this.auth.tokenId,
            }),
            this.clientInfo,
            new objects.FRegistrationInfo({
                email: this.user.username,
                regType: this.auth.reg,
            }),
        ]);
        if (response && response.info) {
            this.user.id = response.info.userId;
            this.user.avatar = response.info.avatarAppearanceDetails;
        }
        return response;
    }
    async googleLogin() {
        // await this.event('StartGoogleSignIn');
        const login = new google_1.default({
            proxy: this.proxy,
        });
        this.auth.tokenId = await login.login(this.user.username, this.user.password);
        this.auth.profileId = jwt.decode(this.auth.tokenId, null, true).sub;
    }
    async load() {
        if (!this.user.avatar)
            throw new Error('Please login first.');
        // await this.event('LoadingScreenPercent', '100');
        // await this.event('CreateAvatarByType', 'MageMale');
        // await this.event('LoadingScreenPercent', '100');
        // await this.event('AvatarUpdateView', this.user.avatar.toString());
        // await this.event('InitPushNotifications', 'False');
    }
    async validateNickname(nickname) {
        // await this.event('ValidateNickname', nickname);
        return await this.call('AuthService', 'validateNickname', [nickname]);
    }
    async acceptTos() {
        // await this.event('LicenceShown');
        // await this.event('LicenceAccepted');
    }
    async acceptLicence(licence) {
        return await this.call('AuthService', 'acceptLicence', [licence]);
    }
    async register(nickname) {
        this.user.nickname = nickname;
        // this.event('Register', this.auth.name, nickname);
        const response = await this.call('AuthService', 'register', [
            new objects.AuthData({
                authType: this.auth.type,
                profileId: this.auth.profileId,
                tokenId: this.auth.tokenId,
            }),
            nickname,
            this.clientInfo,
            new objects.FRegistrationInfo({ regType: this.auth.reg }),
        ]);
        this.user.id = response.info.userId;
        // await this.event('ServerAuthSuccess', this.user.id);
        return response;
    }
    generateAvatar(options = {}) {
        return (options.gender || 0) | // 0 or 1
            (options.race || 0) << 1 | // 0 or 1
            (options.skin || 0) << 3 | //
            (options.hair || 0) << 6 |
            (options.eyes || 0) << 9 |
            (options.jacket || 0) << 12 |
            (options.trousers || 0) << 15 |
            (options.shoes || 0) << 18 |
            (options.backpack || 0) << 21;
    }
    async setAvatar(avatar) {
        this.user.avatar = +avatar;
        // await this.event('AvatarPlayerGenderRace', '1', '1');
        // await this.event('AvatarPlayerSubmit', avatar.toString());
        return await this.call('PlayerService', 'saveUserSettings', [+avatar]);
    }
    async selectAlliance(alliance, bonus) {
        return await this.call('PlayerService', 'selectAlliance', [
            { __type: 'AllianceType', value: alliance },
            bonus,
        ]);
    }
    async acknowledgeNotification(type) {
        return await this.call('PlayerService', 'acknowledgeNotification', [type]);
    }
    // Map
    async getMapUpdate(latitude, longitude, horizontalAccuracy) {
        horizontalAccuracy = horizontalAccuracy || this.getAccuracy();
        const response = await this.call('MapService', 'getUpdate', [
            new objects.FUpdateRequest({
                clientRequest: new objects.FClientRequest({
                    time: 0,
                    currentUtcOffsetSeconds: this.utcOffset,
                    coordsWithAccuracy: new objects.GeoCoordsWithAccuracy({
                        latitude,
                        longitude,
                        horizontalAccuracy,
                    }),
                }),
                configCacheHash: this.configHash,
                language: this.clientInfo.language,
                clientPlatform: enums.ClientPlatform.IOS,
                tilesCache: new Map(),
            }),
        ]);
        if (response.items) {
            const config = response.items.find(i => i.__type === 'FConfig');
            if (config)
                this.buildConfigHash(config);
        }
        return response;
    }
    async useBuilding(clientLat, clientLng, buildingId, buildingLat, buildingLng) {
        return this.call('MapService', 'tryUseBuilding', [
            new objects.FClientRequest({
                time: 0,
                currentUtcOffsetSeconds: this.utcOffset,
                coordsWithAccuracy: new objects.GeoCoordsWithAccuracy({
                    latitude: clientLat,
                    longitude: clientLng,
                    horizontalAccuracy: this.getAccuracy(),
                }),
            }),
            new objects.FBuildingRequest({
                coords: new objects.GeoCoords({
                    latitude: buildingLat,
                    longitude: buildingLng,
                }),
                id: buildingId,
            }),
        ]);
    }
    async openChest(chest) {
        await this.call('MapService', 'startOpeningChest', [chest]);
        return await this.call('MapService', 'openChestResult', [chest]);
    }
    async leaveDungeon(latitude, longitude, horizontalAccuracy) {
        horizontalAccuracy = horizontalAccuracy || this.getAccuracy();
        return this.call('MapService', 'leaveDungeon', [
            new objects.FClientRequest({
                time: 0,
                currentUtcOffsetSeconds: this.utcOffset,
                coordsWithAccuracy: new objects.GeoCoordsWithAccuracy({
                    latitude,
                    longitude,
                    horizontalAccuracy,
                }),
            }),
        ]);
    }
    // utils
    delay(ms, value) {
        return new Promise((resolve) => setTimeout(() => resolve(value), ms));
    }
    // deprecated
    /**
     * @deprecated please use client.inventory.getUserItems
     */
    async getUserItems() {
        console.log('deprecated, please use client.inventory.getUserItems');
        return this.inventory.getUserItems();
    }
    /**
     * @deprecated please use client.inventory.getCreadex
     */
    async getCreadex() {
        console.log('deprecated, please use client.inventory.getCreadex');
        return this.inventory.getCreadex();
    }
    /**
     * @deprecated please use client.inventory.discardItem
     */
    async discardItem(id, count) {
        console.log('deprecated, please use client.inventory.discardItem');
        return this.inventory.discardItem(id, count);
    }
    /**
     * @deprecated please use client.inventory.getUserCreatures
     */
    async getUserCreatures() {
        console.log('deprecated, please use client.inventory.getUserCreatures');
        return this.inventory.getUserCreatures();
    }
    /**
     * @deprecated please use client.eggs.getHatchingInfo
     */
    async getHatchingInfo() {
        console.log('deprecated, please use client.eggs.getHatchingInfo');
        return this.eggs.getHatchingInfo();
    }
    /**
     * @deprecated please use client.eggs.openHatchedEgg
     */
    async openHatchedEgg(incubatorId) {
        console.log('deprecated, please use client.eggs.openHatchedEgg');
        return this.eggs.openHatchedEgg(incubatorId);
    }
    /**
     * @deprecated please use client.eggs.startHatchingEgg
     */
    async startHatchingEgg(eggId, incubatorId) {
        console.log('deprecated, please use client.eggs.startHatchingEgg');
        return this.eggs.startHatchingEgg(eggId, incubatorId);
    }
    /**
     * @deprecated please use client.creatures.encounter
     */
    async encounter(id, options = {}) {
        console.log('deprecated, please use  client.creatures.encounter');
        return this.creatures.encounter(id, options);
    }
    /**
     * @deprecated please use client.creatures.catch
     */
    async catch(id, ball, quality, spin = false, options) {
        console.log('deprecated, please use  client.creatures.catch');
        return this.creatures.catch(id, ball, quality, spin, options);
    }
    /**
     * @deprecated please use client.creatures.release
     */
    async releaseCreatures(ids) {
        console.log('deprecated, please use  client.creatures.release');
        return this.creatures.release(ids);
    }
    /**
     * @deprecated please use client.creatures.evolve
     */
    async evolve(id, toType) {
        console.log('deprecated, please use  client.creatures.evolve');
        return this.creatures.evolve(id, toType);
    }
}
exports.Client = Client;
//# sourceMappingURL=index.js.map