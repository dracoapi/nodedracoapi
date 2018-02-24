import { Client, objects } from './index';
export declare class Inventory {
    client: Client;
    constructor(client: Client);
    getUserItems(): Promise<any>;
    getCreadex(): Promise<any>;
    discardItem(id: number, count: number): Promise<any>;
    getUserCreatures(): Promise<objects.FUserCreaturesList>;
    useIncense(): Promise<any>;
    useShovel(latitude: number, longitude: number, horizontalAccuracy?: number): Promise<any>;
    useSuperVision(latitude: number, longitude: number): Promise<any>;
}
