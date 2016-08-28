modules.define('tweet', ['i-bem__dom', 'BEMHTML', 'jquery', 'button'], function (provide, BEMDOM, BEMHTML, $, Button) {

    provide(BEMDOM.decl({ block: this.name, modName: 'default', modVal: true },
        {
            onSetMod: {
                js: function () {
                    var that = this;

                    Button.on(this.elem('like'), 'click', function () {
                        $.ajax({
                            url: 'localhost:3000/api/tweet',
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
                            url: 'localhost:3000/api/tweet',
                            type: 'GET',
                            dataType: 'json',
                            context: this
                        }).done(
                            function (answer) {
                                this.setText(answer.value);
                            }
                        ).fail(that.__self.failHandle);

                        document.location.href = 'localhost:3000/compose';
                    });

                    Button.on(this.elem('reply'), 'click', function () {
                        document.location.href = 'localhost:3000/api/tweet/tweet_id';
                    });
                }
            }
        },
        {
            failHandle: function (msg) {
                this.setMod('type', 'error');
                var response = msg.responseText;

                if (!response) {
                    response = 'Неизвестная ошибка сервера';
                }

                alert(response);

                this.unbindFrom('click');
            }
        }));
});
