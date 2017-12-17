import { Client, objects } from './index';

export class Eggs {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }

    async getHatchingInfo(): Promise<objects.FUserHatchingInfo> {
        return this.client.call('UserCreatureService', 'getHatchingInfo', []);
    }

    async openHatchedEgg(incubatorId: string) {
        return this.client.call('UserCreatureService', 'openHatchedEgg', [ incubatorId ]);
    }

    async startHatchingEgg(eggId: string, incubatorId: string) {
        await this.client.call('UserCreatureService', 'startHatchingEgg', [
            eggId,
            incubatorId,
        ]);
        return this.getHatchingInfo();
    }

    async startHatchingEggInRoost(eggId: string, roost: objects.FBuildingRequest, slot: number) {
        return this.client.call('UserCreatureService', 'startHatchingEggInRoost', [
            eggId,
            roost,
            slot,
        ]);
    }
}