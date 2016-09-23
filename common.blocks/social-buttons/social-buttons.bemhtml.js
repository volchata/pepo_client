block('social-buttons')(
    attrs()(
        function () {

            var image;

            if (this.ctx.data) {
                image = this.ctx.data.image;
            }

            if (image) {
                return {
                    style: 'background-image: url(\'' + this.ctx.data.image + '\');'
                };
            } else {
                return {
                };
            }
        }
    )
);
