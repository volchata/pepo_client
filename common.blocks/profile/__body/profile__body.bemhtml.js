block('profile').elem('body')(
    content()(
        function () {
            return {
                block : 'radio-group',
                mods : { theme : 'islands', size : 'xl', type : 'button', focused: true },
                mix: { block: 'profile', elem: 'body' },
                val: 1,
                options : [
                    { val : 1, text : 'Твиты' },
                    { val : 2, text : 'Картинки' },
                    { val : 3, text : 'Нравится' }
                ]
            };
        }
    )
);
