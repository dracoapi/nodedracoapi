import * as fs from 'fs';
import * as stream from 'stream';
import * as long from 'long';
import * as request from 'request-promise-native';
import * as objects from './draco/objects';
import * as enums from './draco/enums';
import Serializer from './draco/serializer';
import Deserializer from './draco/deserializer';

export class User {
    id: string;
    deviceId: string;
    nickname: string;
    avatar: number;
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
    request: any;
    cookies: any;
    clientInfo: objects.FClientInfo;
    user: User;
    dcportal: string;
    constructor(options) {
        const protocolVersion = options.protocolVersion || '2373924766';
        const clientVersion = options.clientVersion || '7209';
        this.cookies = request.jar();
        this.request = request.defaults({
            proxy: options.proxy,
            headers: {
                'User-Agent': `DraconiusGO/${clientVersion} CFNetwork/811.5.4 Darwin/16.7.0`,
                'Accept': '*/*',
                'Accept-Language': 'en-us',
                'Protocol-Version': protocolVersion,
                'X-Unity-Version': '2017.1.0f3',
                'Client-Version': clientVersion,
            },
            encoding: null,
            gzip: true,
            jar: this.cookies,
            simple: false,
            resolveWithFullResponse: true,
        });
        this.cookies.setCookie(request.cookie('path=/'), 'https://us.draconiusgo.com');
        this.cookies.setCookie(request.cookie('Path=/'), 'https://us.draconiusgo.com');
        this.cookies.setCookie(request.cookie('domain=.draconiusgo.com'), 'https://us.draconiusgo.com');

        this.clientInfo = new objects.FClientInfo({
            platform: 'IPhonePlayer',
            platformVersion: 'iOS 10.3.3',
            deviceModel: 'iPhone8,1',
            revision: clientVersion,
            screenWidth: 750,
            screenHeight: 1334,
            language: 'English',
            iOsAdvertisingTrackingEnabled: false,
        });
        this.user = new User();
    }

    async ping(throwIfError = false) {
        try {
            const response = await this.request.post({
                url: 'https://us.draconiusgo.com/ping',
                headers: {
                    'Content-Type': 'application /x-www-form-urlencoded',
                },
                simple: true,
            });
            return true;
        } catch (e) {
            // console.error(e);
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

        const deserializer = new Deserializer(response.body);

        if (response.statusCode > 300) {
            let more = response;
            try {
                more = deserializer.deserialize();
            } catch (e) { /* nothing */ }
            throw new DracoError('Error from server: ' + response.statusCode + ' - ' + response.statusMessage, more);
        }

        const data = deserializer.deserialize();
        return data;
    }

    async event(name, one?, two?, three?) {
        await this.call('ClientEventService', 'onEvent', [
            name,
            this.user.id,
            this.clientInfo,
            one,
            two,
            three,
            null,
            null
        ]);
    }

    async boot(clientinfo) {
        this.user.id = clientinfo.userId;
        this.user.deviceId = clientinfo.deviceId;
        this.clientInfo.iOsVendorIdentifier = clientinfo.deviceId;
        for (const key in clientinfo) {
            if (this.clientInfo.hasOwnProperty(key)) {
                this.clientInfo[key] = clientinfo[key];
            }
        }
        await this.event('LoadingScreenPercent', '100');
        await this.event('Initialized');
    }

    async login() {
        await this.event('TrySingIn', 'DEVICE');
        const response = await this.call('AuthService', 'trySingIn', [
            new objects.AuthData({
                authType: enums.AuthType.DEVICE,
                profileId: this.user.deviceId,
            }),
            this.clientInfo,
            new objects.FRegistrationInfo({
                regType: 'dv',
            }),
        ]);
        if (response && response.info) {
            this.user.id = response.info.userId;
            this.user.avatar = response.info.avatarAppearanceDetails;
        }
        return response;
    }

    async load() {
        await this.event('LoadingScreenPercent', '100');
        await this.event('CreateAvatarByType', 'MageMale');
        await this.event('LoadingScreenPercent', '100');
        await this.event('AvatarUpdateView', this.user.avatar.toString());
        await this.event('InitPushNotifications', 'False');
    }

    async validateNickname(nickname) {
        await this.event('ValidateNickname', nickname);
        return await this.call('AuthService', 'validateNickname', [ nickname ]);
    }

    async acceptTos() {
        await this.event('LicenceShown');
        await this.event('LicenceAccepted');
    }

    async register(nickname) {
        this.user.nickname = nickname;
        this.event('Register', 'DEVICE', nickname);
        const response = await this.call('AuthService', 'register', [
            new objects.AuthData({
                authType: enums.AuthType.DEVICE,
                profileId: this.user.deviceId
            }),
            nickname,
            this.clientInfo,
            new objects.FRegistrationInfo({ regType: 'dv' }),
        ]);

        this.user.id = response.info.userId;
        await this.event('ServerAuthSuccess', this.user.id);

        return response;
    }

    async setAvatar(avatar) {
        this.user.avatar = +avatar;
        await this.event('AvatarPlayerGenderRace', '1', '1');
        await this.event('AvatarPlayerSubmit', avatar.toString());
        return await this.call('PlayerService', 'saveUserSettings', [ +avatar ]);
    }

    async getUserItems() {
        return this.call('ItemService', 'getUserItems', null);
    }

    async getCreadex() {
        return this.call('UserCreatureService', 'getCreadex', []);
    }

    async getUserCreatures() {
        return this.call('UserCreatureService', 'getUserCreatures', []);
    }

    async getMapUpdate(latitude: number, longitude: number, horizontalAccuracy = 20) {
        return this.call('MapService', 'getUpdate', [
            new objects.FUpdateRequest({
                clientRequest: new objects.FClientRequest({
                    time: 0,
                    currentUtcOffsetSeconds: 3600,
                    coords: new objects.GeoCoords({
                        latitude,
                        longitude,
                        horizontalAccuracy,
                    }),
                }),
                clientPlatform: enums.ClientPlatform.IOS,
                tilesCache: new Map<objects.FTile, long>(),
            }),
        ]);
    }

    async useBuilding(clientLat: number, clientLng: number, buildingId: string, buildingLat: number, buildingLng: number) {
        return this.call('MapService', 'tryUseBuilding', [
            new objects.FClientRequest({
                time: 0,
                currentUtcOffsetSeconds: 3600,
                coords: new objects.GeoCoords({
                    latitude: clientLat,
                    longitude: clientLng,
                    horizontalAccuracy: 0,
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

    async encounter(id: string, options: any = {}) {
        const response = await this.call('GamePlayService', 'startCatchingCreature', [
            new objects.FCreatureRequest({
                id,
            }),
        ]);

        if (options.delay === undefined) options.delay = 1000 + Math.random() * 1500;

        await this.delay(options.delayencounter);
        await this.event('IsArAvailable', 'False');

        return response;
    }

    async catch(id: string, ball: number, quality: number, spin = false, options?: any) {
        return await this.call('GamePlayService', 'tryCatchCreature', [
            id,
            { __type: 'ItemType', value: ball },
            { __type: 'float', value: quality },
            spin
        ]);
    }

    async discardItem(id: number, count: number) {
        return await this.call('ItemService', 'discardItems', [
            { __type: 'ItemType', value: id },
            count
        ]);
    }

    delay<T>(ms: number, value?: T): Promise<T> {
        return new Promise((resolve) => setTimeout(resolve(value), ms));
    }
}
