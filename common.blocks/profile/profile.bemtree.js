block('profile')(
    content()(
        function () {
            var data = this.data.profile_data;
            return [
                {
                    elem: 'top'
                },
                {
                    elem: 'header'
                },
                {
                    elem: 'image',
                    url: data.avatar
                },
                {
                    elem: 'about',
                    username: data.lastName + ' ' + data.firstName,
                    login: '@' + data.displayName,
                    description: data.description
                },
                {
                    elem: 'stats',
                    followers: data.followers,
                    follows: data.follows
                },
                {
                    elem: 'body'
                }
            ];
        }
    )
);
