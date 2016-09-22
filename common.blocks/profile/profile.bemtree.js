block('profile')(
    js()(true),
    content()(
        function () {
            var user = this.data.user;
            // console.log('this.data', this);
            return [
                {
                    elem: 'header',
                    content: 
                    [
                        {
                            elem: 'info-left',
                            content: [
                                { block: 'avatar'}, 
                                { block: 'about-user'},
                                { block: 'mini-stat', data:{stat:{
                                    title:'Читает',
                                    value: user.followers
                                }}},
                                { block: 'mini-stat', data:{stat:{
                                    title:'Читатели',
                                    value: user.follows
                                }}}
                            ]
                        },
                        {
                            elem: 'info-right',
                            content: [
                                { elem: 'controls'}
                            ]
                        }
                    ]
                },
                {
                    elem: 'tweetSample',
                    js: true
                }
            ];
        }
    )
);
