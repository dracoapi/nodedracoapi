"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GoogleOAuth = require("gpsoauth");
const google = new GoogleOAuth();
const GOOGLE_LOGIN_ANDROID_ID = '9774d56d682e549c';
const GOOGLE_LOGIN_SERVICE = 'audience:server:client_id:142464098123-ihdru24fmqkb6pgdg5n3v6an5b4a664i.apps.googleusercontent.com';
const GOOGLE_LOGIN_APP = 'net.elyland.DraconiusGO';
const GOOGLE_LOGIN_CLIENT_SIG = 'fc0e7d31361f6c8722135af1024355d5a86b0689';
class GoogleLogin {
    constructor(options = {}) {
        if (options.proxy)
            google.setProxy(options.proxy);
    }
    /**
     * Performs the Google Login using Android Device and returns a Promise that will be resolved
     * with the auth token.
     * @param {string} username
     * @param {string} password
     * @return {Promise}
     */
    async login(username, password) {
        const loginData = await this.getMasterToken(username, password);
        const authData = await this.getToken(username, loginData);
        return authData.Auth;
    }
    /**
     * Performs the Google login by skipping the password step and starting with the Master Token
     * instead. Returns a Promise that will be resolved with the auth token.
     * @param {string} username
     * @param {string} token
     * @return {Promise}
     */
    async loginWithToken(username, token) {
        const loginData = {
            androidId: GOOGLE_LOGIN_ANDROID_ID,
            masterToken: token
        };
        const authData = await this.getToken(username, loginData);
        return authData.Auth;
    }
    /**
     * Initialize Google Login
     * @param {string} username
     * @param {string} password
     * @return {Promise}
     */
    getMasterToken(username, password) {
        return new Promise((resolve, reject) => {
            google.login(username, password, GOOGLE_LOGIN_ANDROID_ID, (err, data) => {
                if (err) {
                    if (err.response.statusCode === 403) {
                        reject(Error('Received code 403 from Google login. This could be because your account has ' +
                            '2-Step-Verification enabled. If that is the case, you need to generate an ' +
                            'App Password and use that instead of your regular password: ' +
                            'https://security.google.com/settings/security/apppasswords'));
                    }
                    else if (err.response) {
                        reject(Error(err.response.statusCode + ': ' + err.response.statusMessage));
                    }
                    else {
                        reject(err);
                    }
                    return;
                }
                resolve(data);
            });
        });
    }
    /**
     * Finalizes oAuth request using master token and resolved with the auth data
     * @private
     * @param {string} username
     * @param {string} loginData
     * @return {Promise}
     */
    getToken(username, loginData) {
        return new Promise((resolve, reject) => {
            google.oauth(username, loginData.masterToken, loginData.androidId, GOOGLE_LOGIN_SERVICE, GOOGLE_LOGIN_APP, GOOGLE_LOGIN_CLIENT_SIG, (err, data) => {
                if (err && err.response) {
                    reject(Error(err.response.statusCode + ': ' + err.response.statusMessage));
                }
                else if (err) {
                    reject(err);
                }
                else if (data.Error) {
                    reject(Error('Error during Google login: ' + data.Error));
                }
                else {
                    resolve(data);
                }
            });
        });
    }
}
exports.default = GoogleLogin;
//# sourceMappingURL=google.js.map