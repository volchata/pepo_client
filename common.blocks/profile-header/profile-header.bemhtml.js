block('profile-header')(
    js()(true),
    mod('mode', 'self').replace()(
        function () {
            var avatar;
            if (this.ctx.data) {
                avatar = this.ctx.data.avatar || null;
            } else {
                avatar = null;
            }
            return {
                block: 'profile-header',
                elems: [
                    { name: 'left', data: { avatar: avatar }  },
                    { name: 'right' }
                ]
            };
        }
    ),
    mod('mode', 'other').replace()(
        function () {
            var avatar, displayName;
            if (this.ctx.data) {
                avatar = this.ctx.data.avatar || null;
            } else {
                avatar = null;
            }

            if (this.ctx.data) {
                displayName = this.ctx.data.displayName || null;
            } else {
                displayName = null;
            }

            return {
                block: 'profile-header',
                elems: [
                    { name: 'left-other', data: { avatar: avatar } },
                    { name: 'right-other', data: { displayName: displayName, followed: this.ctx.data.followed } }
                ]
            };
        }
    ),
    content()(function () {
        return [
            this.ctx.elems.map(function (elem) {

                var data = {};

                if (elem.data) {
                    data = elem.data;
                }

                return {
                    elem: elem.name,
                    data: data
                };
            })
        ];
    })

);
