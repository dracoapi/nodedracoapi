import { Client, objects } from './index';
export declare class Inventory {
    client: Client;
    constructor(client: Client);
    getUserItems(): Promise<any>;
    getCreadex(): Promise<any>;
    discardItem(id: number, count: number): Promise<any>;
    getUserCreatures(): Promise<objects.FUserCreaturesList>;
    useIncense(): Promise<objects.FAvaUpdate>;
    useShovel(latitude: number, longitude: number, horizontalAccuracy?: number): Promise<objects.FUpdate>;
    useSuperVision(latitude: number, longitude: number): Promise<objects.FAvaUpdate>;
}
