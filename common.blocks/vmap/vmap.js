modules.define('vmap', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    console.log('map block');
                    this.loadMapsApi();
                    console.log(['BTN',this.elem('btn')]);


                    this.on('mapInited',this.onMapInited);
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

            this._myPlacemark = new ymaps.Placemark(center);

            this._map.geoObjects.add(this._myPlacemark);

            // Блок поделится информацией о том, что он инициализировал карту.
            // В данных передаём ссылку на экземпляр карты.
            this.emit('mapInited', {
                map: this._map
            });

        },
        onMapInited: function(){
          console.log('map inited');
            this.bindTo(this.elem('btn'),'pointerclick',this.onBtnSearch)
            var lat=this.findBlockInside('lat','input').elem('control');
            var lon=this.findBlockInside('lon','input').elem('control');
            //var map=this._map;
            this._map.events.add('click', function(e){
                var coords = e.get('coords');
                var map=e.get('target');

                map.geoObjects.removeAll();
                map.setCenter(coords);
                map.geoObjects.add(new ymaps.Placemark(coords));
                lat.val(coords[0]);
                lon.val(coords[1]);

            });
        },

        onMapClick:function(e){

            //this.geoObjects.remove();
            //this.setCenter(coords);
             ;
            //this.geoObjects.add(new ymaps.Placemark(coords));
        },

        onBtnSearch: function () {
            var lat=this.findBlockInside('lat','input').elem('control').val()|0;
            var lon=this.findBlockInside('lon','input').elem('control').val()|0
            //this._myPlacemark.geomery=;
            var coords=[lat,lon];
            this._map.geoObjects.removeAll();
            this._map.setCenter([lat,lon]);
            this._myPlacemark = new ymaps.Placemark([lat,lon]);
            this._map.geoObjects.add(this._myPlacemark);
            console.log(this._map);
            //this._map.redraw();
            console.log('btn clicked');

        }
    }));

});
