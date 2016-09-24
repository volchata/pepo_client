//eslint отключен по той причине, что без передачи аргументом jquery dropzone не работает
modules.define('dropzone', ['i-bem__dom', 'events__channels', 'jquery'],
    function (provide, BEMDOM, channels, jQuery) { //eslint-disable-line no-unused-vars

// этот комментарий будет заменен `borschik`-ом на содержимое файла плагина
    /*borschik:include:../../node_modules/dropzone/dist/min/dropzone.min.js*/

        Dropzone.autoDiscover = false;  // eslint-disable-line no-undef
        provide(BEMDOM.decl(this.name,
            {
                onSetMod: {
                    js: {
                        inited: function () {
                        // в момент инициализации блока будет включен dropzone
                            var eventName;
                            if (this.params.channel == null) {
                                eventName = 'upload_success';
                                this.emitter = this.findBlockOutside('page');
                            } else {
                                eventName = 'success';
                                this.emitter = channels(this.params.channel);
                            }

                            var that = this;
                            if (this.params.url) {
                                var size = this.params.size || 200,
                                    url = this.prefixURL(this.params.url),
                                    current = this.prefixURL(this.params.current),
                                    currentFile,
                                    dz = this.domElem.dropzone({
                                        url: url,
                                        paramName: this.params.paramName || 'file',
                                        maxFiles: 1,
                                        acceptedFiles: '.jpg,.png,.gif,.jpeg',
                                        thumbnailWidth: size,
                                        thumbnailHeight: size,
                                        success: function (file, response) {
                                            var data = response;
                                            that.emitter.emit(eventName, data);
                                        },
                                        dictDefaultMessage: 'Загрузите картинку'
                                    });
                                dz = dz[0].dropzone;

                                if (current) {

                                    currentFile = {};
                                    dz.emit('addedfile', currentFile);
                                    dz.createThumbnailFromUrl(currentFile, current);
                                    dz.emit('complete', currentFile);
                                    currentFile.previewElement.addEventListener('click', function () {
                                        dz.hiddenFileInput.click();
                                    });
                                }

                                dz.on('addedfile', function (file) {
                                    if (dz.files.length > 1) {
                                        dz.removeFile(dz.files[0]);
                                    }
                                    if (currentFile) {
                                        dz.removeFile(currentFile);
                                        currentFile = null;
                                    }
                                    file.previewElement.addEventListener('click', function () {
                                        dz.hiddenFileInput.click();
                                    });
                                });

                                window.dz = dz;

                            }
                        }
                    }
                },
                prefixURL: function (url) {
                    if (url && (!(/^https?:\/\//.test(url)))) {
                        url = window.config.api_server + url;
                    }
                    return url;
                }
            },
        {}));
    });
