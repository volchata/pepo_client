block('page').mod('view', 'profile').content()(function () {
    var user_passport = '';

    if (!this.data.profile_data.lastName) {
        if (this.data.profile_data.firstName) {
            user_passport = this.data.profile_data.firstName;
        }
    } else {
        if (this.data.profile_data.firstName) {
            user_passport = this.data.profile_data.lastName + ' ' + this.data.profile_data.firstName;
        } else {
            user_passport = this.data.profile_data.lastName;
        }
    }

    var mode = this.data.profile_data.self ? 'self' : 'other';

    return [
        {
            block: 'profile',
            content: [
                {
                    block: 'profile-header',
                    mods: {mode: mode},
                    data: this.data.profile_data
                },
                {
                    block: 'account-info',
                    mix: {elem: 'multiline'},
                    content: [
                        {
                            block: 'text',
                            mods: {username: true},
                            content: user_passport
                        },
                        {
                            block: 'text',
                            mods: {id: true},
                            content: '@' + this.data.profile_data.displayName
                        }
                    ]
                },
                {
                    elem: 'stats',
                    stats: [
                        {
                            title: 'Читает',
                            value: this.data.profile_data.follows
                        },
                        {
                            title: 'Читатели',
                            value: this.data.profile_data.followers
                        }
                    ]
                }
            ]
        },
        {
            elem: 'footer',
            content: {
                block: 'bottom-menu',
                mods: {homescreen: true}
            }
        }
    ];
});
