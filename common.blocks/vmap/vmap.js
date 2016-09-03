modules.define('vmap', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    console.log('map block');
                    this.loadMapsApi();
                }
            }
        },

        mapsPackages: [
            [
                'package.full'
            ]
        ],


        loadMapsApi: function () {
            if (!window.ymaps) {
                var apiScript = document.createElement('script'),
                    apiCallback = 'ymapsloaded';
                window[apiCallback] = $.proxy(function () {
                    this.onAPILoaded();
                }, this);
                apiScript.src = [
                    'http://api-maps.yandex.ru/2.1/?',
                    //'&load=' + this.mapsPackages[0].join(','),
                    '&lang=ru_RU',
                    '&onload=' + apiCallback
                ].join('');

                document.getElementsByTagName('head')[0].appendChild(apiScript);
            } else {
                this.onAPILoaded();
            }
        },
        onAPILoaded: function () {
            this.initMap();
        },
        initMap: function () {
            var center = this.params.center || [55.76, 37.64],
                zoom = this.params.zoom || 7;

            this._map = new ymaps.Map($('.vmap__view')[0], {
                center: center,
                zoom: zoom,
                behaviors: ['drag', 'dblClickZoom', 'scrollZoom']
            });


            // Блок поделится информацией о том, что он инициализировал карту.
            // В данных передаём ссылку на экземпляр карты.
            this.emit('map-inited', {
                map: this._map
            });
        },
        onssAPILoaded: function () {
            console.log('on api loaded');
            var map =  new ymaps.Map("vmap__view", {
                center: [55.76, 37.64],
                zoom: 7
            });
        }
    }));

});
