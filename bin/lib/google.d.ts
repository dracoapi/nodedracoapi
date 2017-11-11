export default class GoogleLogin {
    constructor(options?: any);
    /**
     * Performs the Google Login using Android Device and returns a Promise that will be resolved
     * with the auth token.
     * @param {string} username
     * @param {string} password
     * @return {Promise}
     */
    login(username: any, password: any): Promise<any>;
    /**
     * Performs the Google login by skipping the password step and starting with the Master Token
     * instead. Returns a Promise that will be resolved with the auth token.
     * @param {string} username
     * @param {string} token
     * @return {Promise}
     */
    loginWithToken(username: any, token: any): Promise<any>;
    /**
     * Initialize Google Login
     * @param {string} username
     * @param {string} password
     * @return {Promise}
     */
    getMasterToken(username: any, password: any): Promise<{}>;
    /**
     * Finalizes oAuth request using master token and resolved with the auth data
     * @private
     * @param {string} username
     * @param {string} loginData
     * @return {Promise}
     */
    getToken(username: any, loginData: any): Promise<any>;
}
