module.exports = {
    staticFolder: 'static',
    defaultPort: 3000,
    cacheTTL: 30000,
    sessionSecret: 'REPLACE_ME_WITH_RANDOM_STRING',
    servers:
    {
        api_server: 'http://localhost:8080',
        frontend_server: 'http://localhost:8080'
    }
};
