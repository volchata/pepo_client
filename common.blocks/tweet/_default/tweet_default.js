modules.define('tweet', ['i-bem__dom', 'BEMHTML'], function (provide, BEMDOM, BEMHTML) {

    provide(BEMDOM.decl({ block: this.name, modName: 'default', modVal: true }, {
        _onClick: function (e) {
            // console.log(e.target.params.action);
            var action = e.target.params.action;
            // tweet_id = this.params.data._id;

            switch (action) {
            case 'like':
                e.target.setMod('type', 'good');
                e.target.setText('123');
                break;
            case 'repost':
                e.target.setText('123');
                document.location.href = window.config.api_server + '/compose/';
                break;
            case 'reply':
                break;

            }
        }
    },
        {
            live: function () {
                this.liveInitOnBlockInsideEvent('click', 'button', function (e) {
                    this._onClick(e);
                });

                return true;
            },

            failHandle: function (msg) {
                var response = msg.responseText;
                if (!response) {
                    response = 'Неизвестная ошибка сервера';
                }

                setTimeout(function () {
                    alert(response);
                }, 0);
                this.setMod('type', 'error');

                this.unbindFrom('click');
            }
        }));
});

