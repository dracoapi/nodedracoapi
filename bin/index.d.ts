import * as objects from './draco/objects';
import * as enums from './draco/enums';
export declare class User {
    id: string;
    deviceId: string;
    nickname: string;
    avatar: number;
}
export { enums };
export { objects };
export declare class Client {
    request: any;
    cookies: any;
    clientInfo: objects.FClientInfo;
    user: User;
    dcportal: string;
    constructor(options: any);
    ping(throwIfError?: boolean): Promise<boolean>;
    call(service: string, method: string, body: any): Promise<any>;
    event(name: any, one?: any, two?: any, three?: any): Promise<void>;
    boot(clientinfo: any): Promise<void>;
    login(): Promise<any>;
    load(): Promise<void>;
    validateNickname(nickname: any): Promise<any>;
    acceptTos(): Promise<void>;
    register(nickname: any): Promise<any>;
    setAvatar(avatar: any): Promise<any>;
    getUserItems(): Promise<any>;
    getCreadex(): Promise<any>;
    getUserCreatures(): Promise<any>;
    getMapUpdate(latitude: number, longitude: number, horizontalAccuracy?: number): Promise<any>;
    useBuilding(clientLat: number, clientLng: number, buildingId: string, buildingLat: number, buildingLng: number): Promise<any>;
}
