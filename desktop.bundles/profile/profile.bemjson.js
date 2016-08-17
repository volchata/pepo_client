module.exports = {
    block : 'page',
    title : 'Profile Page',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'profile.min.css' }
    ],
    scripts: [{ elem : 'js', url : 'profile.min.js' }],
    content : [
        {
            block: 'body',
            mix: { block: 'profile', elem: 'body' },
            content: [
                {
                    block: "profile-header"
                },
                {
                    block: "account-info",
                    mix: {elem: 'multiline'}
                },
                {
                    block: "profile-stats",
                    stats: [
                        {
                            title: 'Читает',
                            value: '5'
                        },
                        {
                            title: 'Читатели',
                            value: '2'
                        }
                    ]
                },
                {
                    block: "profile-controls"
                }
            ]
        }
    ]
};