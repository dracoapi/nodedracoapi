import { Client, objects } from './index';

export class Inventory {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }

    async getCreadex() {
        return this.client.call('UserCreatureService', 'getCreadex', []);
    }

    async getUserCreatures(): Promise<objects.FUserCreaturesList> {
        return this.client.call('UserCreatureService', 'getUserCreatures', []);
    }

    async getUserItems() {
        return this.client.call('ItemService', 'getUserItems', []);
    }

    async discardItem(id: number, count: number) {
        return await this.client.call('ItemService', 'discardItems', [
            { __type: 'ItemType', value: id },
            count
        ]);
    }

    async useIncense(): Promise<objects.FAvaUpdate> {
        return this.client.call('ItemService', 'useIncense', []);
    }

    async useShovel(latitude: number, longitude: number, horizontalAccuracy = 20): Promise<objects.FUpdate> {
        return this.client.call('ItemService', 'useShovel', [
            new objects.FClientRequest({
                time: 0,
                currentUtcOffsetSeconds: this.client.utcOffset,
                coordsWithAccuracy: new objects.GeoCoordsWithAccuracy({
                    latitude,
                    longitude,
                    horizontalAccuracy,
                }),
            })
        ]);
    }

    async useSuperVision(latitude: number, longitude: number): Promise<objects.FAvaUpdate> {
        return this.client.call('ItemService', 'useSuperVision', [
            new objects.GeoCoords({
                latitude,
                longitude,
            }),
        ]);
    }

    async useExperienceBooster(): Promise<objects.FAvaUpdate> {
        return this.client.call('ItemService', 'useExperienceBooster', []);
    }
}