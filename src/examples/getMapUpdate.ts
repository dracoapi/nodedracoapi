import * as fs from 'fs';
import * as DracoNode from '../index';

async function main() {
    console.log('Starting...');

    console.log('Getting user info from disk...');
    const user = JSON.parse(fs.readFileSync('users.json', 'utf8'))[0];

    const draco = new DracoNode.Client({
        // proxy: 'http://localhost:8888',
    });

    console.log('Ping...');
    await draco.ping(true);

    console.log('Boot...');
    await draco.boot({
        userId: user.userId,
        deviceId: user.deviceId,
    });

    console.log('Login...');
    await draco.login();

    console.log('Init client...');
    await draco.load();

    console.log('Get user items...');
    let response = await draco.getUserItems();
    for (const item of response.items) {
        console.log(`  item type ${DracoNode.enums.ItemType[item.type]}, count = ${item.count}`);
    }

    console.log('Get map update');
    response = await draco.getMapUpdate(48.8574212, 2.3090047);
    const creatures = response.items.find(o => o.__type === 'FCreatureUpdate');
    const hatched = response.items.find(o => o.__type === 'FHatchedEggs');
    const chests = response.items.find(o => o.__type === 'FChestUpdate');
    const avatar = response.items.find(o => o.__type === 'FAvaUpdate');
    const buildings = response.items.find(o => o.__type === 'FBuildingUpdate');

    console.log(`  ${creatures.inRadar.length} creature(s) in radar`);
    for (const creature of creatures.inRadar) {
        const id = creature.coords.id;
        const coords = { lat: creature.coords.latitude, lng: creature.coords.longitude };
        console.log(`    creature ${creature.name} at (${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)})`);
    }

    console.log('Done.');
}

main()
    .catch(e => {
        console.log(e);
    });
