import * as fs from 'fs';
import * as DracoNode from '../index';

const strings = require('dracotext').load();

async function main() {
    console.log('Starting...');

    console.log('Getting user info from disk...');
    const user = JSON.parse(fs.readFileSync('users.json', 'utf8'))[0];

    const draco = new DracoNode.Client({
        proxy: 'http://localhost:8888',
    });

    console.log('Ping...');
    await draco.ping(true);

    console.log('Boot...');
    await draco.boot({
        userId: user.userId,
        deviceId: user.deviceId,
        login: user.login, // GOOGLE, DEVICE
        username: user.username,
        password: user.password,
    });

    console.log('Login...');
    await draco.login();

    console.log('Init client...');
    await draco.load();

    console.log('Get creatures...');
    const response = await draco.inventory.getUserCreatures();
    for (const creature of response.userCreatures) {
        const name = creature.alias || strings.getCreature(DracoNode.enums.CreatureType[creature.name]);
        console.log(`  ${name} lvl ${creature.level}, cp=${creature.cp}`);
    }

    console.log('Done.');
}

main()
    .catch(e => {
        console.log(e);
        debugger;
    });
