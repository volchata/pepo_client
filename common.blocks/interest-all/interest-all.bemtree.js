block('interest-all')(
    content()(
        function () {

            var interests = this.ctx.data;

            var interestsBtn = interests.map(intr => {
                return {
                    block: 'button',
                    mods: { theme: 'islands', size: 'm', togglable: 'check' },
                    text: intr
                };
            });

            return interestsBtn;
        })
);
