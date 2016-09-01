modules.define('tweet', ['i-bem__dom', 'jquery', 'BEMHTML'], function (provide, BEMDOM, $, BEMHTML) {

    provide(BEMDOM.decl({ block: this.name, modName: 'default', modVal: true }, {
        _onClick: function (e) {
            // console.log(e.target.params.action);
            var action = e.target.params.action,
                that = e.target;
            // tweet_id = this.params.data._id;

            switch (action) {
            case 'like':

                if (!that.hasMod('type')) {
                    $.ajax(
                        {
                            url: window.config.api_server + "/api/tweet/" + this.params.data._id + "/like",
                            type: "POST",
                            data: {},
                            dataType: "json",
                            context: that
                        }
                    ).done(
                        function (msg) {
                            that.setMod('type', 'good');
                            that.setText(msg.tweets[0].extras.likes.length);
                        }
                    );
                } else {
                    $.ajax(
                        {
                            url: window.config.api_server + "/api/tweet/" + this.params.data._id + "/like",
                            type: "DELETE",
                            data: {},
                            dataType: "json",
                            context: that
                        }
                    ).done(
                        function (msg) {
                            that.delMod('type');
                            that.setText(String(msg.tweets[0].extras.likes.length));
                        }
                    );
                }


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

