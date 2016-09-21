block('user-feed')(
    content()(
        function () {

            var users = this.ctx.data.users,
                user_feed = [];

            for (var key in users) {
                if (users.hasOwnProperty(key)) {
                    user_feed.push({
                        block: 'user-item',
                        data: {
                            user: users[key]
                        }
                    });
                }
            }

            return user_feed;

        })
);
