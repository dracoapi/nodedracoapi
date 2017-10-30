"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
function generateDeviceId() {
    return '00000000-0000-4000-8000-000000000000'.replace(/0/g, () => (0 | Math.random() * 16).toString(16));
}
async function main() {
    console.log('Starting...');
    const draco = new index_1.default({
        proxy: 'http://localhost:8888',
    });
    console.log('Ping...');
    const ping = await draco.ping();
    if (!ping)
        throw new Error();
    console.log('Boot...');
    await draco.boot({
        deviceId: generateDeviceId(),
    });
    draco.login();
    draco.validateNickname('');
    draco.acceptTos();
    draco.register('');
    draco.setAvatar();
}
main()
    .catch(e => {
    console.log(e);
});
//# sourceMappingURL=createUser.js.map