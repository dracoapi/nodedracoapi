/// <reference types="node" />
import * as objects from './draco/objects';
import * as enums from './draco/enums';
import { Fight } from './fight';
import { Inventory } from './inventory';
import { Eggs } from './eggs';
import { Creatures } from './creatures';
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
    creatures: Creatures;
    protocolVersion: string;
    clientVersion: string;
    private request;
    private proxy;
    private dcportal;
    private checkProtocol;
    private auth;
    private configHash;
    eventsCounter: any;
    utcOffset: number;
    constructor(options?: any);
    private getAccuracy();
    ping(throwIfError?: boolean): Promise<boolean>;
    call(service: string, method: string, body: any): Promise<any>;
    post(url: string, data: any): Promise<void>;
    event(name: any, one?: any, two?: any, three?: any): Promise<void>;
    boot(clientinfo: any): Promise<objects.FConfig>;
    getConfig(): Promise<objects.FConfig>;
    buildConfigHash(config: objects.FConfig): Buffer;
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
    acknowledgeNotification(type: string): Promise<any>;
    getMapUpdate(latitude: number, longitude: number, horizontalAccuracy?: number): Promise<objects.FUpdate>;
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
    /**
     * @deprecated please use client.creatures.encounter
     */
    encounter(id: string, options?: any): Promise<objects.FCatchingCreature>;
    /**
     * @deprecated please use client.creatures.catch
     */
    catch(id: string, ball: number, quality: number, spin?: boolean, options?: any): Promise<any>;
    /**
     * @deprecated please use client.creatures.release
     */
    releaseCreatures(ids: string[]): Promise<objects.FUpdate>;
    /**
     * @deprecated please use client.creatures.evolve
     */
    evolve(id: string, toType: enums.CreatureType): Promise<any>;
}
