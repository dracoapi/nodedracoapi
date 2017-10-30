"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const index_1 = require("../index");
async function main() {
    console.log('Starting...');
    console.log('Getting user info from disk...');
    const user = JSON.parse(fs.readFileSync('user.json', 'utf8'));
    const draco = new index_1.default({
        proxy: 'http://localhost:8888',
    });
    console.log('Ping...');
    const ping = await draco.ping();
    if (!ping)
        throw new Error();
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
    console.log('Get map objects...');
    const map = await draco.getMapUpdate(48.8628407, 2.3286178);
    console.log('Done.');
}
main()
    .catch(e => {
    console.log(e);
});
//# sourceMappingURL=one.js.map