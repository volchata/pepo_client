block('avatar-edit')(
    content()(
        function () {

            return [
                {
                    elem: 'title',
                    content: 'Редактирование аватара'
                },
                {
                    block: 'dropzone',
                    js: {url: '/api/user/image', current: this.ctx.data.avatar, size: 300}
                },
                {
                    block: 'button',
                    mods: { theme: 'islands', size: 'm', type: 'submit' },
                    text: 'Сохранить'
                }
            ];
        })
);
