import * as objects from './draco/objects';
import * as enums from './draco/enums';
import { Fight } from './fight';
import { Inventory } from './inventory';
import { Eggs } from './eggs';
export declare class User {
    id: string;
    deviceId: string;
    nickname: string;
    avatar: number;
    login: string;
    username: string;
    password: string;
}
export { enums };
export { objects };
export declare class Client {
    clientInfo: objects.FClientInfo;
    user: User;
    fight: Fight;
    inventory: Inventory;
    eggs: Eggs;
    eventsCounter: any;
    private request;
    private proxy;
    private dcportal;
    private protocolVersion;
    private clientVersion;
    private checkProtocol;
    private auth;
    constructor(options?: any);
    ping(throwIfError?: boolean): Promise<boolean>;
    call(service: string, method: string, body: any): Promise<any>;
    event(name: any, one?: any, two?: any, three?: any): Promise<void>;
    boot(clientinfo: any): Promise<void>;
    login(): Promise<any>;
    googleLogin(): Promise<void>;
    load(): Promise<void>;
    validateNickname(nickname: any): Promise<any>;
    acceptTos(): Promise<void>;
    acceptLicence(licence: any): Promise<any>;
    register(nickname: any): Promise<any>;
    generateAvatar(options?: any): number;
    setAvatar(avatar: any): Promise<any>;
    selectAlliance(alliance: enums.AllianceType, bonus: number): Promise<any>;
    encounter(id: string, options?: any): Promise<objects.FCatchingCreature>;
    catch(id: string, ball: number, quality: number, spin?: boolean, options?: any): Promise<any>;
    releaseCreatures(ids: string[]): Promise<objects.FUpdate>;
    evolve(id: string, toType: enums.CreatureType): Promise<any>;
    getMapUpdate(latitude: number, longitude: number, horizontalAccuracy?: number): Promise<any>;
    useBuilding(clientLat: number, clientLng: number, buildingId: string, buildingLat: number, buildingLng: number): Promise<any>;
    openChest(chest: objects.FChest): Promise<any>;
    leaveDungeon(latitude: number, longitude: number, horizontalAccuracy?: number): Promise<any>;
    delay<T>(ms: number, value?: T): Promise<T>;
    /**
     * @deprecated please use client.inventory.getUserItems
     */
    getUserItems(): Promise<any>;
    /**
     * @deprecated please use client.inventory.getCreadex
     */
    getCreadex(): Promise<any>;
    /**
     * @deprecated please use client.inventory.discardItem
     */
    discardItem(id: number, count: number): Promise<any>;
    /**
     * @deprecated please use client.inventory.getUserCreatures
     */
    getUserCreatures(): Promise<objects.FUserCreaturesList>;
    /**
     * @deprecated please use client.eggs.getHatchingInfo
     */
    getHatchingInfo(): Promise<objects.FUserHatchingInfo>;
    /**
     * @deprecated please use client.eggs.openHatchedEgg
     */
    openHatchedEgg(incubatorId: string): Promise<any>;
    /**
     * @deprecated please use client.eggs.startHatchingEgg
     */
    startHatchingEgg(eggId: string, incubatorId: string): Promise<objects.FUserHatchingInfo>;
}
