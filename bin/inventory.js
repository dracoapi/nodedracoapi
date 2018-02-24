"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
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
    async useIncense() {
        return this.client.call('ItemService', 'useIncense', []);
    }
    async useShovel(latitude, longitude, horizontalAccuracy = 20) {
        return this.client.call('ItemService', 'useShovel', [
            new index_1.objects.FClientRequest({
                time: 0,
                currentUtcOffsetSeconds: 3600,
                coordsWithAccuracy: new index_1.objects.GeoCoordsWithAccuracy({
                    latitude,
                    longitude,
                    horizontalAccuracy,
                }),
            })
        ]);
    }
    async useSuperVision(latitude, longitude) {
        return this.client.call('ItemService', 'useSuperVision', [
            new index_1.objects.GeoCoords({
                latitude,
                longitude,
            }),
        ]);
    }
}
exports.Inventory = Inventory;
//# sourceMappingURL=inventory.js.map