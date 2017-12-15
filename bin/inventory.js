"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Inventory {
    constructor(client) {
        this.client = client;
    }
    async getUserItems() {
        return this.client.call('ItemService', 'getUserItems', []);
    }
    async getCreadex() {
        return this.client.call('UserCreatureService', 'getCreadex', []);
    }
    async discardItem(id, count) {
        return await this.client.call('ItemService', 'discardItems', [
            { __type: 'ItemType', value: id },
            count
        ]);
    }
    async getUserCreatures() {
        return this.client.call('UserCreatureService', 'getUserCreatures', []);
    }
}
exports.Inventory = Inventory;
//# sourceMappingURL=inventory.js.map