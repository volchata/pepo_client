block('profile-edit')(
    js()(true),
    content()(
        function () {
            var ret = [
                {
                    block: 'page-header',
                    content: 'Редактирование профиля'
                },
                {
                    elem: 'label',
                    content: 'Аватар'
                },
                {
                    block: 'dropzone',
                    js: {url: '/api/user/image', current : this.ctx.data.avatar, size: 400 }
                },
                {
                    elem: 'label',
                    content: 'Имя'
                },
                {
                    block: "input",
                    label: "Имя",
                    mods : { theme : 'islands', size : 'm', width : 'available', field: 'firstName' },
                    val: this.ctx.data.firstName || ''
                },
                {
                    elem: 'label',
                    content: 'Фамилия'
                },
                {
                    block: "input",
                    label: "Фамилия",
                    mods : { theme : 'islands', size : 'm', width : 'available', field: 'lastName' },
                    val: this.ctx.data.lastName || ''
                },
                {
                    elem: 'label',
                    content: 'О себе'
                },
                {
                    block: 'textarea',
                    mods: {
                        theme: 'islands',
                        size: 'm',
                        width : 'available',
                        field: 'description'
                    },
                    placeholder: 'Расскажите о себе',
                    val: this.ctx.data.description || ''
                },
                {
                    block: 'button',
                    text: 'Сохранить'
                }
            ];
            
            return ret;
        }
    )
);
