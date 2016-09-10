block('avatar')(
    content()(
        function () {

            var user = this.ctx.data.user;

            console.log(user);

            return [

                {
                    block: 'image',
                    url: user.avatar
                }
            ];
        })
);
