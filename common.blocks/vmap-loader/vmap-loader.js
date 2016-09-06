modules.define('vmap-loader', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                js: {
                    inited: function () {
                        this.loadMapsApi();
                    }
                }
            },

            loadMapsApi: function () {
                this.ymapsDeferred = $.Deferred();
                if (!window.ymaps) {

                    var apiScript = document.createElement('script'),
                        apiCallback = 'ymapsloaded';
                    window[apiCallback] = $.proxy(function () {
                        this.onAPILoaded();
                    }, this);
                    apiScript.src = [
                        'http://api-maps.yandex.ru/2.1/?',
                        '&lang=ru_RU',
                        '&onload=' + apiCallback
                    ].join('');
                    document.getElementsByTagName('head')[0].appendChild(apiScript);
                } else {
                    this.onAPILoaded();
                }
            },
            onAPILoaded: function () {
                this.ymapsDeferred.resolve();
            }

        }));

});
