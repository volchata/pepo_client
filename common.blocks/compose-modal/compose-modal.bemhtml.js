block('compose-modal')(
    mod('mode', 'photo').replace()(
        function () {
            return {
                block: 'compose-modal',
                inner_blocks: [{ name: 'dropzone', js: { url: window.config.api_server + '/api/user/image' } }]
            };
        }),
    mod('mode', 'url').replace()(
        function () {
            return [{
                block: 'compose-modal',
                inner_blocks: [
                    { name: 'url-input', js: true }
                ]
            }]; //tweet-attachment
        }
    ),
    content()(function () {
        return this.ctx.inner_blocks.map(function (block) {
            return {
                block: "modal-body",
                js: true,
                content: [
                    {
                        block: block.name,
                        js: block.js
                    }
                ]

            };
        });
    }),
    js()(true)
);
