block('profile').elem('info')(
    content()(
        function () {
            return [
                {
                    block: 'text',
                    mods: { 'follow-count': true },
                    content: '0'
                },
                {
                    block: 'text',
                    content: 'Подписчиков'
                }
            ];
        }
    )
);
