block('interest-block')(
    content()(
        function () {

            var allInterests = this.ctx.data.allInterests;

            return [
                {
                    elem: 'title',
                    content: {
                        block: 'text',
                        content: 'Выберете интересы '
                    }
                },
                {
                    block: 'textarea',
                    mods: { theme: 'islands', size: 'm', width: 'available' }
                },
                {
                    block: 'button',
                    mods: { theme: 'islands', size: 'm', type: 'submit' },
                    text: 'Сохранить'
                },
                {
                    block: 'interest-all',
                    data: allInterests
                }
            ];
        })
);
