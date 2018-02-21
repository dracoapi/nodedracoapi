"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
class Creatures {
    constructor(client) {
        this.client = client;
    }
    async encounter(id, options = {}) {
        const response = await this.client.call('GamePlayService', 'startCatchingCreature', [
            new index_1.objects.FCreatureRequest({
                id,
            }),
        ]);
        if (options.delay === undefined)
            options.delay = 1000 + Math.random() * 1500;
        await this.client.delay(options.delay);
        // await this.event('IsArAvailable', 'False');
        return response;
    }
    async catch(id, ball, quality, spin = false, options) {
        return await this.client.call('GamePlayService', 'tryCatchCreature', [
            id,
            { __type: 'ItemType', value: ball },
            { __type: 'float', value: quality },
            spin
        ]);
    }
    async release(ids) {
        if (!Array.isArray(ids))
            ids = [ids];
        return await this.client.call('UserCreatureService', 'convertCreaturesToCandies', [
            { __type: 'List<>', value: ids },
            false
        ]);
    }
    async evolve(id, toType) {
        return this.client.call('UserCreatureService', 'evolveCreature', [
            id,
            { __type: 'CreatureType', value: toType },
        ]);
    }
}
exports.Creatures = Creatures;
//# sourceMappingURL=creatures.js.map