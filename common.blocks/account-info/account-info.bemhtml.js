block('account-info')(
    content()(function () {
        var data = this.ctx.data;
        if (!data) {
            data = '[{"userName":"Pavel Smolnikov","userID":"@pave_smolnikov"}]';
        }
        return [
            {
                block: 'text',
                mods: { username: true },
                content: JSON.parse(data)[0].userName
            },
            {
                block: 'text',
                mods: { id: true },
                content: JSON.parse(data)[0].userID
            }
        ];
    })
);
