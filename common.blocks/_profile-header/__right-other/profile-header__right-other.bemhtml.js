block('profile-header').elem('right-other')(
    content()(
        function () {
            return [
                {
                    block: 'follow-button',
                    js: {
                        displayName: this.ctx.data.displayName,
                        followed: this.ctx.data.followed
                    }
                }
            ];
        }
    )
);
