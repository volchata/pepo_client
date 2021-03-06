modules.define('vmap', ['i-bem__dom', 'BEMHTML', 'jquery', 'events__channels', 'vmap-loader'], function (provide, BEMDOM, BEMHTML, $, channels) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    console.log(['PARAMS', this.params]);
                    if (this.params.mod !== undefined) {
                        this.toggleMod('status', this.params.mod);

                    } else {
                        this.toggleMod('status', 'edit');
                    }

                    if (this.params.channel !== undefined) {
                        this.emitter = channels( this.params.channel );
                        console.log(['CHANNELS']);
                    }

                }
            },
            status: function (modName, modVal, oldModVal) {
                switch (modVal) {
                    case 'edit':

                        console.log(['EDIT', oldModVal]);
                        if (oldModVal === 'view') {

                            BEMDOM.append(this.domElem, BEMHTML.apply(
                                {
                                    block: 'vmap',
                                    elem: 'ctrls'
                                }
                            ));
                            this.findBlockInside('lat', 'coord').toggleMod('status', 'view', 'edit');
                            this.findBlockInside('lon', 'coord').toggleMod('status', 'view', 'edit');

                        }
                        var self = this;
                        this.mapInitedDeferr = $.Deferred();
                        this.on('mapInited', this.onMapInited);
                        this.on('navigatorPosition', this.onNavigatorPosition);

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
                        console.log(['VIEW', oldModVal]);
                        if (oldModVal === '') {

                            this.mapInitedDeferr = $.Deferred();
                            this.on('mapInited', this.onMapInited);
                        }
                        this.findBlockInside('lat', 'coord').toggleMod('status', 'edit', 'view');
                        this.findBlockInside('lon', 'coord').toggleMod('status', 'edit', 'view');
                        this.elem('add').length && BEMDOM.destruct(this.elem('add'));
                        this.elem('search').length && BEMDOM.destruct(this.elem('search'));
                        this.elem('ctrls').length && BEMDOM.destruct(this.elem('ctrls'));
                        this.dropElemCache('search');
                        this.dropElemCache('add');
                        //this.dropElemCache('ctrls');
                        if (oldModVal === '') {
                            this.checkMapsApi();
                        }

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
            if (!this._map) {
                var center = this.params.center || this.centerDefault,
                    zoom = this.params.zoom || this.zoomDefault;
                this._map = new window.ymaps.Map(this.elem('view')[0], {
                    center: center,
                    zoom: zoom,
                    behaviors: ['drag', 'dblClickZoom', 'scrollZoom']
                });
                if (this.params.mod !== 'view') {
                    this._map.controls.get('searchControl').options.set('noPlacemark', true).set('noCentering', true);
                } else {
                    this._map.controls.remove('searchControl').remove('geolocationControl');
                }
                this._myPlacemark = new window.ymaps.Placemark(center);

                this._map.geoObjects.add(this._myPlacemark);

                this.findBlockInside('lat', 'coord').setVal(center[0]);
                this.findBlockInside('lon', 'coord').setVal(center[1]);
                this.mapInitedDeferr.resolve();
                console.log(this);
            }
            this.emit('mapInited', {
                map: this._map
            });
        },

        onMapInited: function () {
            this.on('redraw', function () {
                this._map.container.fitToViewport();
            });
            if (this.params.mod !== 'view') {
                console.log('Bind events');
                //window.map = this._map;
                var self = this;
                this.bindTo(this.elem('search'), 'pointerclick', this.onBtnSearch);
                this.bindTo(this.elem('add'), 'pointerclick', this.onBtnAdd);
                this._map.events.add('click', function (e) {
                    if (self.hasMod('status', 'edit')) {
                        var coords = e.get('coords');
                        self.setPosition(coords);
                        //console.log(['RESULT',e]);
                    } else {
                        self.toggleMod('status', 'edit', 'view');
                    }

                });
                var sc = this._map.controls.get('searchControl');
                sc.events.add('resultselect', function (e) {
                    if (self.hasMod('status', 'edit')) {
                        sc.getResult(e.originalEvent.index).then(function (res) {
                            self.setPosition(res.geometry.getCoordinates());
                            //this._map.setBounds(res.geometry.getBounds(),{ checkZoomRange: true });
                            //res.getAddressLine()
                            //res.getCountryCode()
                        });
                    }
                });
                console.log('Bind events done');
            }

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
            if (this.emitter !== undefined) {
                console.log(['EMIT', this.getFeature()]);
                this.emitter.emit('success', {geo: this.getFeature()});

            }
            this.emit('mapedited', this.getFeature());
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
            var lat = parseFloat(this.findBlockInside('lat', 'coord').getVal());
            var lon = parseFloat(this.findBlockInside('lon', 'coord').getVal());
            return { 'type': 'Point', 'coordinates': [lon, lat] };
        },
        getFeature: function () {
            var res = {
                'type': 'Feature'
            };
            res.geometry = this.getPoint();
            //res.properties.name=""
            //res.properties.zoom=this

            return res;

        }

    }

    ));

});
