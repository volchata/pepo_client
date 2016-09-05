block('profile').elem('header')(
    content()(
        function () {
            return [
                {
                    block: 'button',
                    mods: { theme: 'simple', type: 'link', edit: true },
                    url: '/profile-edit/',
                    content: 'Редактировать'
                }
            ];
        }
    )
);
