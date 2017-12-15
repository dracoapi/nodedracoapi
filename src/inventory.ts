import { Client, objects } from './index';

export class Inventory {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }

    async getUserItems() {
        return this.client.call('ItemService', 'getUserItems', []);
    }

    async getCreadex() {
        return this.client.call('UserCreatureService', 'getCreadex', []);
    }

    async discardItem(id: number, count: number) {
        return await this.client.call('ItemService', 'discardItems', [
            { __type: 'ItemType', value: id },
            count
        ]);
    }

    async getUserCreatures(): Promise<objects.FUserCreaturesList> {
        return this.client.call('UserCreatureService', 'getUserCreatures', []);
    }
}