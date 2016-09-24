block('passport-edit')(
    content()(
        function () {

            return [
                {
                    elem: 'title',
                    content: 'Редактирование профиля'
                },
                {
                    elem: 'label',
                    content: 'Имя'
                },
                {
                    block: 'input',
                    label: 'Имя',
                    mods: {theme: 'islands', size: 'm', width: 'available', field: 'firstName'},
                    val: this.ctx.data.firstName || ''
                },
                {
                    elem: 'label',
                    content: 'Фамилия'
                },
                {
                    block: 'input',
                    label: 'Фамилия',
                    mods: {theme: 'islands', size: 'm', width: 'available', field: 'lastName'},
                    val: this.ctx.data.lastName || ''
                },
                {
                    block: 'button',
                    mods: { theme: 'islands', size: 'm', type: 'submit' },
                    text: 'Сохранить'
                }
            ];
        })
);
