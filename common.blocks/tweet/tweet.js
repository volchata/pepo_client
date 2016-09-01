modules.define('tweet', ['i-bem__dom', 'BEMHTML', 'jquery'], function (provide, BEMDOM, BEMHTML, $) {

    provide(BEMDOM.decl(this.name,
        {
            _onClick: function (e) {
                var action = e.target.params.action,
                    tweet_id = this.params.data._id;

                switch (action) {
                case 'like':
                    e.target.setMod('type', 'good');
                    e.target.setMod('enabled');
                    break;
                case 'repost':
                    e.target.setText('123');
                    document.location.href = window.config.api_server + '/compose/';
                    break;
                case 'reply':
                    document.location.href = window.config.api_server + '/comment/' + tweet_id;
                    break;
                }
            }
        },
        {
            live: function () {
                this.liveInitOnBlockInsideEvent('click', 'button', function (e) {
                    this._onClick(e);
                });
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
