modules.define('tweet', ['i-bem__dom', 'BEMHTML'], function (provide, BEMDOM, BEMHTML) {

    provide(BEMDOM.decl({ block: this.name, modName: 'default', modVal: true },
        {
            onSetMod: {
                js: function () {

                }
            },

            _onClick: function (e) {
                // console.log(e.target.params.action);
                var action = e.target.params.action;
                    // tweet_id = this.params.data._id;

                switch(action) {
                    case 'like': e.target.setMod('type', 'good') && e.target.setText('123');
                        break;
                    case 'repost': e.target.setText('123') && (document.location.href = window.config.api_server + '/compose/');
                        break;
                    case 'reply': ;
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


//
// Button.on(this.elem('like'), 'click', function () {
//     $.ajax({
//         url: window.config.api_server + '/api/tweet',
//         type: 'GET',
//         dataType: 'json',
//         context: this
//     }).done(
//         function () {
//             this.setMod({ type: 'good' });
//
//             this.unbindFrom('click');
//         }
//     ).fail(that.__self.failHandle);
// });
//
// Button.on(this.elem('repost'), 'click', function () {
//     $.ajax({
//         url: window.config.api_server + "/api/tweet",
//         type: 'GET',
//         dataType: 'json',
//         context: this
//     }).done(
//         function (answer) {
//             this.setText(answer.value);
//         }
//     ).fail(that.__self.failHandle);
//
//     document.location.href = window.config.frontend_server + "/compose";
// });
//
// Button.on(this.elem('reply'), 'click', function () {
//     console.log(1)
//     document.location.href = window.config.api_server + '/api/tweet/tweet_id';
// });