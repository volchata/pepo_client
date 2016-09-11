([
    {
        shouldDeps: [
            {
                block: 'pepo-textarea'
            },
            {
                block: 'compose-menu',
                tech: 'bemhtml'
            },
            {
                block: 'url-input',
                tech: 'bemhtml'
            },
            {
                block: 'events',
                elem: 'channels'
            },
            {
                block: 'compose-modal',
                tech: 'bemhtml'
            }
        ]
    },
    {
        tech: 'js',
        mustDeps: [
            {block: 'button', tech: 'bemhtml'},
            {block: 'dropzone', tech: 'bemhtml'},
            {block: 'url-input', tech: 'bemhtml'},
            {
                block: 'compose-modal',
                tech: 'bemhtml'
            }
        ]
    }

]);
