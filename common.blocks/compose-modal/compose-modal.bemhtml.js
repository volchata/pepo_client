block('compose-modal')(
    js()(true),
    mod('mode', 'photo').replace()(
        function () {
            return {
                block: 'compose-modal',
                mods: { state: 'photo'}, // избаляемся от рекурсии, по другому не знаю как
                js: true,
                inner_blocks: [{block: 'dropzone',
                    js: {url: window.config.api_server + '/api/user/image', channel: this.ctx.js.channel }}]
            };
        }),
    mod('mode', 'url').replace()(
        function () {
            return [{
                block: 'compose-modal',
                mods: { state: 'url'},      // аналогично
                js: true,
                inner_blocks: [
                    {block: 'url-input', js: { channel: this.ctx.js.channel }}
                ]
            }];
        }
    ),
    mod('mode', 'geo').replace()(
        function () {
            console.log(['COMPOSE', this.ctx]);
            return [{
                block: 'compose-modal',
                mods: { state: 'geo'},      // аналогично
                js: true,
                inner_blocks: [
                    { block: 'vmap',
                        js: {
                            channel: this.ctx.js.channel,
                            geoIp: this.ctx.js.geoIp
                        },

                        mod: {state: 'edit'}
                    }
                ]
            }];
        }
    ),
    content()(function () {
        return this.ctx.inner_blocks;
    })
);
