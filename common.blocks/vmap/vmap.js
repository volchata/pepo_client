modules.define('vmap', ['i-bem__dom', 'BEMHTML', 'jquery', 'vmap-loader'], function (provide, BEMDOM, BEMHTML, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {

                    this.toggleMod('status', 'edit');
                }
            },
            status: function (modName, modVal/*, oldModVal*/) {
                switch (modVal) {
                    case 'edit':

                        console.log('EDIT');

                        var self = this;
                        this.on('mapInited', this.onMapInited);
                        this.on('navigatorPosition', this.onNavigatorPosition);
                        this.mapInitedDeferr = $.Deferred();
                        if (window.navigator.geolocation !== undefined) {
                            window.navigator.geolocation.getCurrentPosition(function (position) {
                                self.emit('navigatorPosition', {
                                    lat: position.coords.latitude,
                                    lon: position.coords.longitude
                                });
                            });
                        }
                        if (this.params.geoIp !== undefined && this.params.geoIp.hasOwnProperty('ll')) {
                            this.centerDefault = this.params.geoIp.ll;
                        }
                        this.checkMapsApi();
                        break;
                    case 'view':
                        this.findBlockInside('lat', 'coord').toggleMod('status', 'view');
                        this.findBlockInside('lon', 'coord').toggleMod('status', 'view');
                        this.elem('ctrls').length && BEMDOM.destruct(this.elem('ctrls'));
                        this.toggleMod(this.elem('lat'), 'status', 'view');
                        break;
                }
            }

        },

        centerDefault: [55.76, 37.64],
        zoomDefault: 7,
        checkMapsApi: function () {
            if (!window.ymaps) {
                var self = this;
                $.when(this.findBlockOutside('vmap-loader').ymapsDeferred).then(function () {
                    self.onAPILoaded();
                });
            } else {
                this.onAPILoaded();
            }
        },
        onAPILoaded: function () {
            console.log('api loaded');
            this.initMap();
        },
        onNavigatorPosition: function (e, data) {
            var self = this;
            $.when(this.mapInitedDeferr).then(function () {
                self.setPosition([data.lat, data.lon]);
            });

        },
        initMap: function () {
            console.log('INIT MAP');
            var center = this.params.center || this.centerDefault,
                zoom = this.params.zoom || this.zoomDefault;
            this._map = new window.ymaps.Map(this.elem('view')[0], {
                center: center,
                zoom: zoom,
                behaviors: ['drag', 'dblClickZoom', 'scrollZoom']
            });

            this._myPlacemark = new window.ymaps.Placemark(center);

            this._map.geoObjects.add(this._myPlacemark);

            this.findBlockInside('lat', 'coord').setVal(center[0]);
            this.findBlockInside('lon', 'coord').setVal(center[1]);
            this.mapInitedDeferr.resolve();
            console.log(this);
            this.emit('mapInited', {
                map: this._map
            });
        },

        onMapInited: function () {
            console.log('Bind events');
            this.bindTo(this.elem('search'), 'pointerclick', this.onBtnSearch);
            this.bindTo(this.elem('add'), 'pointerclick', this.onBtnAdd);
            var self = this;
            var rrr = this._map.events.add('click', function (e) {
                if (self.hasMod('status', 'edit')) {
                    var coords = e.get('coords');
                    self.setPosition(coords);
                }

            });
            console.log(rrr);
            console.log('Bind events done');
        },
        onBtnSearch: function () {
            var lat = parseFloat(this.findBlockInside('lat', 'coord').getVal());
            var lon = parseFloat(this.findBlockInside('lon', 'coord').getVal());
            var coords = [lat, lon];
            this._map.geoObjects.removeAll();
            this._map.setCenter(coords);
            this._myPlacemark = new window.ymaps.Placemark(coords);
            this._map.geoObjects.add(this._myPlacemark);
        },
        onBtnAdd: function () {
            this.toggleMod('status', 'view', 'edit');
        },
        setPosition: function (arr) {
            console.log('SET POSITION');
            console.log(arr);
            this._map.geoObjects.removeAll();
            this._map.setCenter(arr);
            this._map.geoObjects.add(new window.ymaps.Placemark(arr));
            this.findBlockInside('lat', 'coord').setVal(arr[0]);
            this.findBlockInside('lon', 'coord').setVal(arr[1]);
            console.log(arr);
        },
        getPoint: function () {
            var lat = parseFloat(this.findBlockInside('lat', 'coord').setVal());
            var lon = parseFloat(this.findBlockInside('lon', 'coord').setVal());
            return { 'type': 'Point', 'coordinates': [lon, lat] };
        }

    }));

});
