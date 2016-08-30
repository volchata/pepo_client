modules.define('tweet', ['i-bem__dom', 'BEMHTML', 'jquery', 'button'], function (provide, BEMDOM, BEMHTML, $, Button) {

    provide(BEMDOM.decl({ block: this.name, modName: 'default', modVal: true },
        {
            onSetMod: {
                js: function () {
                    var that = this;

                    Button.on(this.elem('like'), 'click', function () {
                        $.ajax({
                            url: window.config.api_server + '/api/tweet',
                            type: 'GET',
                            dataType: 'json',
                            context: this
                        }).done(
                            function (answer) {
                                this.setText(answer.value);
                                this.setMod({ type: 'good' });

                                this.unbindFrom('click');
                            }
                        ).fail(that.__self.failHandle);
                    });

                    Button.on(this.elem('repost'), 'click', function () {
                        $.ajax({
                            url: window.config.api_server + "/api/tweet",
                            type: 'GET',
                            dataType: 'json',
                            context: this
                        }).done(
                            function (answer) {
                                this.setText(answer.value);
                            }
                        ).fail(that.__self.failHandle);

                        document.location.href = window.config.frontend_server + "/compose";
                    });

                    Button.on(this.elem('reply'), 'click', function () {
                        document.location.href = window.config.api_server + '/api/tweet/tweet_id';
                    });
                }
            }
        },
        {
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
