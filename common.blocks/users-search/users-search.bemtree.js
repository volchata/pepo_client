block('users-search')(
    content()(
        function () {

            return [
                {
                    elem: 'search-input',
                    content: [
                        {
                            block: 'input',
                            type: 'search',
                            placeholder: 'Искать пользователей...'
                        },
                        {
                            block: 'button'
                        }

                    ]
                },
                {
                    block: 'user-feed',
                    content: [],
                    data: { users: [] }
                }
            ];

        })
);
