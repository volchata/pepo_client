block('profile').elem('controls')(
    content()(
        function () {
            if (this.data.user.self)
                return {
                    block: 'control-group',
                    content: {
                        block: 'button',
                        mods: {type: 'link', theme: 'islands', size: 'm'},
                        url: '/account/edit/',
                        text: 'Редактировать'
                    }
                };
            return {
                block: 'control-group',
                content: {
                    block: 'subscriber',
                    data: {user: this.data.user}
                }
            };
        }
    )
);
