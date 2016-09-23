block('users-search')(
    content()(
        function () {
            var users = this.ctx.data.users;

            return [
                {
                    elem: 'search-input',
                    content: [
                        {
                            block: 'input',
                            mods: { theme: 'islands', width: 'available', size: 'l' },
                            type: 'search',
                            placeholder: 'Искать пользователей...'
                        }
                    ]
                },
                {
                    block: 'user-feed',
                    content: [],
                    data: { users: users }
                }
            ];

        })
);
