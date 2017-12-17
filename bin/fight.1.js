"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fight {
    constructor(client) {
        this.client = client;
    }
    async start(attack) {
        return this.client.call('EncounterService', 'startEncounter', [
            attack,
        ]);
    }
    async giveUp() {
        return this.client.call('EncounterService', 'giveUpEncounter', []);
    }
}
exports.Fight = Fight;
//# sourceMappingURL=fight.1.js.map