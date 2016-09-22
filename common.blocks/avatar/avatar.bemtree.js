block('avatar')(
    content()(
        function () {

            var user = this.ctx.data.user;

            if (user.avatar) {
                return [
                    {
                        block: 'image',
                        url: user.avatar
                    }
                ];
            }

            return '';
        })
);
