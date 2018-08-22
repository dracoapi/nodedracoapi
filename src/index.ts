import * as crypto from 'crypto';

import * as long from 'long';
import * as request from 'request-promise-native';
import * as jwt from 'jwt-simple';

import * as objects from './draco/objects';
import * as enums from './draco/enums';
import Serializer from './draco/serializer';
import Deserializer from './draco/deserializer';
import GoogleLogin from './lib/google';
import { Fight } from './fight';
import { Inventory } from './inventory';
import { Eggs } from './eggs';
import { Creatures } from './creatures';

export class User {
    id: string;
    deviceId: string;
    nickname: string;
    avatar: number;
    login: string;
    username: string;
    password: string;
}

class Auth {
    name: string;
    type: enums.AuthType;
    reg: string;
    profileId: string;
    tokenId: string;
    public constructor(init?: Partial<Auth>) {
        Object.assign(this, init);
    }
}

class DracoError extends Error {
    details: any;
    constructor(message?, details?) {
        super(message);
        Object.setPrototypeOf(this, DracoError.prototype);
        this.details = details;
    }
}

export { enums };
export { objects };

export class Client {
    public clientInfo: objects.FClientInfo;
    public user: User;
    public fight: Fight;
    public inventory: Inventory;
    public eggs: Eggs;
    public creatures: Creatures;

    public protocolVersion: string;
    public clientVersion: string;

    private request: any;
    private proxy: string;
    private dcportal: string;
    private checkProtocol = true;
    private auth: Auth;
    private configHash: Buffer;

    public eventsCounter: any = {};
    public utcOffset: number;

    constructor(options: any = {}) {
        this.protocolVersion = options.protocolVersion || '3053618417';
        this.clientVersion = options.clientVersion || '12626';
        if (options.hasOwnProperty('checkProtocol')) this.checkProtocol = options.checkProtocol;
        if (options.hasOwnProperty('eventsCounter')) this.eventsCounter = options.eventsCounter;
        if (options.hasOwnProperty('utcOffset')) {
            this.utcOffset = +options.utcOffset;
        } else {
            this.utcOffset = -new Date().getTimezoneOffset() * 60;
        }
        this.proxy = options.proxy;
        let timeout = 20 * 1000;
        if (options.hasOwnProperty('timeout')) {
            timeout = +options.timeout;
        }
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
                'User-Agent': `DraconiusGO/${this.clientVersion} CFNetwork/902.2 Darwin/17.7.0`,
            },
            encoding: null,
            gzip: true,
            jar: cookies,
            simple: false,
            resolveWithFullResponse: true,
            timeout,
        });
        cookies.setCookie(request.cookie('path=/'), 'https://us.draconiusgo.com');
        cookies.setCookie(request.cookie('Path=/'), 'https://us.draconiusgo.com');
        cookies.setCookie(request.cookie('domain=.draconiusgo.com'), 'https://us.draconiusgo.com');

        this.clientInfo = new objects.FClientInfo({
            deviceModel: 'iPhone8,1',
            iOsAdvertisingTrackingEnabled: false,
            language: options.lang || 'English',
            platform: 'IPhonePlayer',
            platformVersion: 'iOS 11.4.1',
            revision: this.clientVersion,
            screenHeight: 1334,
            screenWidth: 750,
        });

        this.user = new User();
        this.fight = new Fight(this);
        this.inventory = new Inventory(this);
        this.eggs = new Eggs(this);
        this.creatures = new Creatures(this);
    }

    private getAccuracy(): number {
        return [20, 65][Math.floor(Math.random() * 2)];
    }

    async ping(throwIfError = false) {
        try {
            const response = await request.post({
                proxy: this.proxy,
                url: 'https://us.draconiusgo.com/ping',
                headers: {
                    'Host': 'us.draconiusgo.com',
                    'Accept': '*/*',
                    'Content-Type': 'application /x-www-form-urlencoded',
                    'Content-Length': 0,
                    'Accept-Language': 'en-us',
                    'User-Agent': `DraconiusGO/${this.clientVersion} CFNetwork/902.2 Darwin/17.7.0`,
                    'X-Unity-Version': '2017.1.3f1',
                },
                simple: true,
                encoding: null,
                gzip: true,
            });
            return true;
        } catch (e) {
            if (throwIfError) throw e;
            else return false;
        }
    }

    async call(service: string, method: string, body: any) {
        const serializer = new Serializer();
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

        if (response.headers['dcportal']) this.dcportal = response.headers['dcportal'];

        const serverVersion = response.headers['protocol-version'];
        if (serverVersion) {
            if (this.protocolVersion && this.protocolVersion !== serverVersion) {
                throw new Error('Unsupported protocol: ' + serverVersion);
            }
        }

        const deserializer = new Deserializer(response.body);

        if (response.statusCode > 300) {
            let more = response.body ? response.body.toString() : '';
            try {
                more = deserializer.deserialize();
            } catch (e) { /* nothing */ }
            throw new DracoError('Error from server: ' + response.statusCode + ' - ' + response.statusMessage, more);
        }

        const data = deserializer.deserialize();
        return data;
    }

    async post(url: string, data) {
        const response = await this.request.post({
            url,
            form: data,
            headers: {
                dcportal: this.dcportal,
            },
        });
    }

    async event(name, one?, two?, three?) {
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

    async boot(clientinfo): Promise<objects.FConfig> {
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

    async getConfig(): Promise<objects.FConfig> {
        const config = await this.call('AuthService', 'getConfig', [ this.clientInfo.language ]);
        this.buildConfigHash(config);
        return config;
    }

    buildConfigHash(config: objects.FConfig): Buffer {
        const buffer = new Serializer().serialize(config);
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
        } else if (this.user.login === 'GOOGLE') {
            this.auth = new Auth({
                name: 'GOOGLE',
                type: enums.AuthType.GOOGLE,
                reg: 'gl',
                profileId: '?',
            });
            await this.googleLogin();
        } else if (this.user.login === 'FACEBOOK') {
            throw new Error('Facebook login not implemented.');
        } else {
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
        const login = new GoogleLogin({
            proxy: this.proxy,
        });
        this.auth.tokenId = await login.login(this.user.username, this.user.password);
        this.auth.profileId = jwt.decode(this.auth.tokenId, null, true).sub;
    }

    async load() {
        if (!this.user.avatar) throw new Error('Please login first.');

        // await this.event('LoadingScreenPercent', '100');
        // await this.event('CreateAvatarByType', 'MageMale');
        // await this.event('LoadingScreenPercent', '100');
        // await this.event('AvatarUpdateView', this.user.avatar.toString());
        // await this.event('InitPushNotifications', 'False');
    }

    async validateNickname(nickname) {
        // await this.event('ValidateNickname', nickname);
        return await this.call('AuthService', 'validateNickname', [ nickname ]);
    }

    async acceptTos() {
        // await this.event('LicenceShown');
        // await this.event('LicenceAccepted');
    }

    async acceptLicence(licence) {
        return await this.call('AuthService', 'acceptLicence', [ licence ]);
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

    async getNews(lastSeen: string) {
        return await this.call('AuthService', 'getNews', [ this.clientInfo.language, lastSeen ]);
    }

    generateAvatar(options: any = {}) {
        return (options.gender || 0) |          // 0 or 1
               (options.race || 0)     << 1 |   // 0 or 1
               (options.skin || 0)     << 3 |   //
               (options.hair || 0)     << 6 |
               (options.eyes || 0)     << 9 |
               (options.jacket || 0)   << 12 |
               (options.trousers || 0) << 15 |
               (options.shoes || 0)    << 18 |
               (options.backpack || 0) << 21;
    }

    async setAvatar(avatar) {
        this.user.avatar = +avatar;
        // await this.event('AvatarPlayerGenderRace', '1', '1');
        // await this.event('AvatarPlayerSubmit', avatar.toString());
        return await this.call('PlayerService', 'saveUserSettings', [ +avatar ]);
    }

    async selectAlliance(alliance: enums.AllianceType, bonus: number) {
        return await this.call('PlayerService', 'selectAlliance', [
            { __type: 'AllianceType', value: alliance },
            bonus,
        ]);
    }

    async acknowledgeNotification(type: string) {
        return await this.call('PlayerService', 'acknowledgeNotification', [ type ]);
    }

    // Map

    async getMapUpdate(latitude: number, longitude: number, horizontalAccuracy?: number, tilesCache?: Map<objects.FTile, long>) {
        horizontalAccuracy = horizontalAccuracy || this.getAccuracy();
        tilesCache = tilesCache || new Map<objects.FTile, long>();
        const response: objects.FUpdate = await this.call('MapService', 'getUpdate', [
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
                tilesCache,
            }),
        ]);
        if (response.items) {
            const config = response.items.find(i => i.__type === 'FConfig') as objects.FConfig;
            if (config) this.buildConfigHash(config);
        }
        return response;
    }

    async useBuilding(clientLat: number, clientLng: number, buildingId: string, buildingLat: number, buildingLng: number) {
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

    async openChest(chest: objects.FChest) {
        await this.call('MapService', 'startOpeningChest', [chest]);
        return await this.call('MapService', 'openChestResult', [chest]);
    }

    async leaveDungeon(latitude: number, longitude: number, horizontalAccuracy?: number) {
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

    delay<T>(ms: number, value?: T): Promise<T> {
        return new Promise((resolve) => setTimeout(() => resolve(value), ms));
    }
}
