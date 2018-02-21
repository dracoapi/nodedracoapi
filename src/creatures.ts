import { Client, objects, enums } from './index';

export class Creatures {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }

    async encounter(id: string, options: any = {}): Promise<objects.FCatchingCreature> {
        const response = await this.client.call('GamePlayService', 'startCatchingCreature', [
            new objects.FCreatureRequest({
                id,
            }),
        ]);

        if (options.delay === undefined) options.delay = 1000 + Math.random() * 1500;

        await this.client.delay(options.delay);
        // await this.event('IsArAvailable', 'False');

        return response;
    }

    async catch(id: string, ball: number, quality: number, spin = false, options?: any) {
        return await this.client.call('GamePlayService', 'tryCatchCreature', [
            id,
            { __type: 'ItemType', value: ball },
            { __type: 'float', value: quality },
            spin
        ]);
    }

    async release(ids: string[]): Promise<objects.FUpdate> {
        if (!Array.isArray(ids)) ids = [ ids ];
        return await this.client.call('UserCreatureService', 'convertCreaturesToCandies', [
            { __type: 'List<>', value: ids },
            false
        ]);
    }

    async evolve(id: string, toType: enums.CreatureType) {
        return this.client.call('UserCreatureService', 'evolveCreature', [
            id,
            { __type: 'CreatureType', value: toType },
        ]);
    }
}