block('profile-controls')(
    content()(
        [
            {
                block : 'radio-group',
                mods : { theme : 'islands', size : 'm', type : 'button', togglable : 'radio' },
                name : 'radio-button',
                val : 1,
                options : [
                    { val : 1, text : 'Твиты', checked : true },
                    { val : 2, text : 'Медиафайлы' },
                    { val : 3, text : 'Нравится' }
                ]
            }
        ]
    )
);
