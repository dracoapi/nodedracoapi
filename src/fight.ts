import { Client, objects } from './index';

export class Fight {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }

    async start(attack: objects.FStartEncounterRequest): Promise<objects.FEncounterUpdate> {
        return this.client.call('EncounterService', 'startEncounter', [
            attack,
        ]);
    }

    async giveUp() {
        return this.client.call('EncounterService', 'giveUpEncounter', []);
    }
}