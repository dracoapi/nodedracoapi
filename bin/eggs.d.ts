import { Client, objects } from './index';
export declare class Eggs {
    client: Client;
    constructor(client: Client);
    getHatchingInfo(): Promise<objects.FUserHatchingInfo>;
    openHatchedEgg(incubatorId: string): Promise<any>;
    startHatchingEgg(eggId: string, incubatorId: string): Promise<objects.FUserHatchingInfo>;
    startHatchingEggInRoost(eggId: string, roost: objects.FBuildingRequest, slot: number): Promise<any>;
}
