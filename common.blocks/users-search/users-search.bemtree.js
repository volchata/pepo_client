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
                    data: { users: users }
                }
            ];

        })
);
