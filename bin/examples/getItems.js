"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const DracoNode = require("../index");
async function main() {
    console.log('Starting...');
    console.log('Getting user info from disk...');
    const user = JSON.parse(fs.readFileSync('users.json', 'utf8'))[0];
    const draco = new DracoNode.Client({
    // proxy: 'http://localhost:8888',
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
    await draco.load();
    console.log('Get user items...');
    const response = await draco.inventory.getUserItems();
    for (const item of response.items) {
        console.log(`Item type ${DracoNode.enums.ItemType[item.type]}, count = ${item.count}`);
    }
    console.log('Done.');
}
main()
    .catch(e => {
    console.log(e);
});
//# sourceMappingURL=getItems.js.map