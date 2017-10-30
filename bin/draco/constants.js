"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthType {
    constructor() {
        this.Device = 0;
        this.Google = 1;
        this.Facebook = 2;
        this.Dev = 3;
    }
}
exports.AuthType = AuthType;
class ClientPlatform {
    constructor() {
        this.Android = 0;
        this.ios = 1;
        this.unity = 2;
        this.unknown = 3;
    }
}
exports.ClientPlatform = ClientPlatform;
//# sourceMappingURL=constants.js.map