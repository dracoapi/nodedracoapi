import { Client, objects } from './index';
export declare class Fight {
    client: Client;
    constructor(client: Client);
    start(attack: objects.FStartEncounterRequest): Promise<objects.FEncounterUpdate>;
    giveUp(): Promise<any>;
}
