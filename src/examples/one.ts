import * as fs from 'fs';
import DracoNode from '../index';

async function main() {
    console.log('Starting...');

    console.log('Getting user info from disk...');
    const user = JSON.parse(fs.readFileSync('user.json', 'utf8'));

    const draco = new DracoNode({
        proxy: 'http://localhost:8888',
    });

    console.log('Ping...');
    const ping = await draco.ping();
    if (!ping) throw new Error();

    console.log('Boot...');
    await draco.boot({
        userId: user.userId,
        deviceId: user.deviceId,
    });

    console.log('Login...');
    await draco.login();

    console.log('Init client...');
    await draco.init();

    console.log('Get user items');
    const items = await draco.getUserItems();
    console.log(JSON.stringify(items, null, 2));

    console.log('Done.');
}

main()
    .catch(e => {
        console.log(e);
    });
