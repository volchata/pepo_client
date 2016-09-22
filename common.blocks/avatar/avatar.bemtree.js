block('avatar')(
    content()(
        function () {

            var user = this.ctx.data.user;

            return [

                {
                    block: 'image',
                    url: user.avatar
                }
            ];
        })
);
