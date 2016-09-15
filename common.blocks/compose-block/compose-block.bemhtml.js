block('compose-block')(
    js()(true),
    content()(function () {
        return [
            {
                block: 'pepo-textarea'
            },
            {
                block: 'compose-menu'
            },
            {
                elem: 'compose-modal-container'
            },
            {
                elem: 'error-zone',
                tag: 'ul'
            }

        ];
    })
);
