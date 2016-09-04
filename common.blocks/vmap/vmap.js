modules.define('vmap', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    this.mapInitedDeferr=$.Deferred();
                    if ("geolocation" in navigator) {
                        var self=this;
                        navigator.geolocation.getCurrentPosition(function(position) {
                            self.emit('navigatorPosition', {
                                lat: position.coords.latitude,
                                lon: position.coords.longitude
                            });
                        });
                    }

                    this.loadMapsApi();
                    this.on('mapInited',this.onMapInited);
                    this.on('navigatorPosition',this.onNavigatorPosition);
                    console.log(this);
                }
            }
        },

        centerDefault: [55.76, 37.64],
        zoomDefault: 7,
        loadMapsApi: function () {
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
            this.initMap();
        },
        onNavigatorPosition: function(e,data){
            var self=this;
            $.when(this.mapInitedDeferr).then(function(){
                    self.setPosition([data.lat,data.lon]);
            })

        },
        initMap: function () {
            var center = this.params.center || this.centerDefault,
                zoom = this.params.zoom || this.zoomDefault;
            this._map = new ymaps.Map(this.elem('view')[0], {
                center: center,
                zoom: zoom,
                behaviors: ['drag', 'dblClickZoom', 'scrollZoom']
            });

            this._myPlacemark = new ymaps.Placemark(center);

            this._map.geoObjects.add(this._myPlacemark);

            this.mapInitedDeferr.resolve();
            this.findBlockInside('lat','input').elem('control').val(center[0]);
            this.findBlockInside('lon','input').elem('control').val(center[1])
            this.emit('mapInited', {
                map: this._map
            });
        },
        onMapInited: function(){
            this.bindTo(this.elem('btn'),'pointerclick',this.onBtnSearch)
            var self=this;
            this._map.events.add('click', function(e){
                var coords = e.get('coords');
                var map=e.get('target');
                self.setPosition(coords);
            });
        },
        onBtnSearch: function () {
            var lat=parseFloat(this.findBlockInside('lat','input').elem('control').val());
            var lon=parseFloat(this.findBlockInside('lon','input').elem('control').val())
            var coords=[lat,lon];
            this._map.geoObjects.removeAll();
            this._map.setCenter([lat,lon]);
            this._myPlacemark = new ymaps.Placemark([lat,lon]);
            this._map.geoObjects.add(this._myPlacemark);

        },
        setPosition(arr){
            this._map.geoObjects.removeAll();
            this._map.setCenter(arr);
            this._map.geoObjects.add(new ymaps.Placemark(arr));
            this.findBlockInside('lat','input').elem('control').val(arr[0]);
            this.findBlockInside('lon','input').elem('control').val(arr[1]);
        },
        getPoint(){
            var lat = parseFloat(this.findBlockInside('lat','input').elem('control').val());
            var lon = parseFloat(this.findBlockInside('lon','input').elem('control').val());
            return { "type": "Point", "coordinates": [lon, lat] };
        }





    }));

});
