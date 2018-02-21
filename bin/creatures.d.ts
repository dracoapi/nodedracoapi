import { Client, objects, enums } from './index';
export declare class Creatures {
    client: Client;
    constructor(client: Client);
    encounter(id: string, options?: any): Promise<objects.FCatchingCreature>;
    catch(id: string, ball: number, quality: number, spin?: boolean, options?: any): Promise<any>;
    release(ids: string[]): Promise<objects.FUpdate>;
    evolve(id: string, toType: enums.CreatureType): Promise<any>;
}
