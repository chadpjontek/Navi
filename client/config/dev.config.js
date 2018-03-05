const SECRETS = require('../../config/secrets.json'); // nodejs will auto read json

module.exports = {
    GOOGLE_API_KEY: SECRETS.google_maps.api_key,
    APP_NAME: 'navi',
    API_SERVER: 'http://localhost:8081',
    REGISTER_PATH: '/users/register',
    LOGIN_PATH: '/users/login',
    RESET_PATH: '/users/reset-password',
};
