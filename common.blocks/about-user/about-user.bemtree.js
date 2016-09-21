block('about-user')(
    js()(true),
    content()(
        function () {
            var user_passport = '',
                user = (this.data && this.data.user) ? this.data.user : this.ctx.data.user;
            if (user.firstName) {
                user_passport = user.firstName;
                if (user.lastName) {
                    user_passport = user_passport + ' ' + user.lastName;
                }
            } else {
                if (user.lastName) {
                    user_passport = user.lastName;
                }
            }

            return [
                {
                    block: 'text',
                    content: user_passport,
                    mods: { bold: true }
                },
                {
                    block: 'text',
                    content: '@' + user.displayName
                }
            ];
        }
    )
);
