block('avatar')(
    content()(
        function () {

            var user = (this.data && this.data.user) ? this.data.user : this.ctx.data.user;

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
