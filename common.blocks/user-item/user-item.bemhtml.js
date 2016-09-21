block('user-item')(
    js()(
        function () {
            var user = this.ctx.data.user;
            return { user: user };

        })
);
