modules.define('dropzone', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, jQuery) {

// этот комментарий будет заменен `borschik`-ом на содержимое файла плагина
    /*borschik:include:../../node_modules/dropzone/dist/min/dropzone.min.js*/

    Dropzone.autoDiscover = false;

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    // в момент инициализации блока будет включен dropzone
                    var that = this;

                    if (this.params.url) {
                        this.domElem.dropzone({
                            url: this.params.url,
                            success: function (file, response) {
                                var data = JSON.parse(response);
                                //data = {image: 'test'};
                                console.log('upload success emit!');
                                that.findBlockOutside('page').emit('upload_success', data);
                            }

                        });
                    }
                    //
                }
            }
        }
    },
        {

        }
        ));

});
