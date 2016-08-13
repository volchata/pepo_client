block('main-menu').elem('bottom').content()(
    {
        block : 'control-group',
        content : [
            {
                block : 'button',
                mods: { type: 'image-text'},
                content: [
                    {
                        block: 'image',
                        url: '/../../../img/home.png'
                    },
                    {
                        block: 'text',
                        content: 'Timelines'
                    }
                ]
            },
            {
                block : 'button',
                mods: { type: 'image-text'},
                content: [
                    {
                        block: 'image',
                        url: '/../../../img/ring.png'
                    },
                    {
                        block: 'text',
                        content: 'Notifications'
                    }
                ]
            },
            {
                block : 'button',
                mods: { type: 'image-text'},
                content: [
                    {
                        block: 'image',
                        url: '/../../../img/message.png'
                    },
                    {
                        block: 'text',
                        content: 'Messages'
                    }
                ]
            },
            {
                block : 'button',
                mods: { type: 'image-text'},
                content: [
                    {
                        block: 'image',
                        url: '/../../../img/user.png'
                    },
                    {
                        block: 'text',
                        content: 'Account'
                    }
                ]
            }
        ]
    }
);
