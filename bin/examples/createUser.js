"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const index_1 = require("../index");
function generateDeviceId() {
    return '00000000-0000-4000-8000-000000000000'.replace(/0/g, () => (0 | Math.random() * 16).toString(16));
}
function generateNickname() {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let name = '';
    for (let i = 0; i < 8; i++) {
        name += chars[Math.floor(Math.random() * chars.length)];
    }
    return name;
}
async function main() {
    console.log('Starting...');
    const draco = new index_1.default({
        // proxy: 'http://localhost:8888',
        proxy: 'http://165.227.32.113:3128',
    });
    console.log('Ping...');
    const ping = await draco.ping();
    if (!ping)
        throw new Error();
    console.log('Boot...');
    await draco.boot({
        deviceId: generateDeviceId(),
    });
    console.log('Init login...');
    await draco.login();
    console.log('Generate nickname...');
    let nickname = generateNickname();
    let response = await draco.validateNickname(nickname);
    while (response != null && response.error === 4) {
        nickname = response.suggestedNickname;
        response = await this.validateNickname(nickname);
    }
    if (response)
        throw new Error('Unable to register nickname. Error: ' + response.error);
    console.log('  nickname: ' + nickname);
    console.log('Accept tos...');
    await draco.acceptTos();
    console.log('Register account...');
    await draco.register(nickname);
    console.log('Set avatar...');
    await draco.setAvatar(271891);
    fs.writeFileSync('user.json', JSON.stringify(draco.user, null, 2), 'utf8');
}
main()
    .catch(e => {
    console.log(e);
});
//# sourceMappingURL=createUser.js.map