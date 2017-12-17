"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Eggs {
    constructor(client) {
        this.client = client;
    }
    async getHatchingInfo() {
        return this.client.call('UserCreatureService', 'getHatchingInfo', []);
    }
    async openHatchedEgg(incubatorId) {
        return this.client.call('UserCreatureService', 'openHatchedEgg', [incubatorId]);
    }
    async startHatchingEgg(eggId, incubatorId) {
        await this.client.call('UserCreatureService', 'startHatchingEgg', [
            eggId,
            incubatorId,
        ]);
        return this.getHatchingInfo();
    }
    async startHatchingEggInRoost(eggId, roost, slot) {
        return this.client.call('UserCreatureService', 'startHatchingEggInRoost', [
            eggId,
            roost,
            slot,
        ]);
    }
}
exports.Eggs = Eggs;
//# sourceMappingURL=eggs.js.map