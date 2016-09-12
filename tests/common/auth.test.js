describe('weather', function() {
    it('авторизация', function() {
        return this.browser.open("http://wwws.yandex.ru").waitForVisible(".home-logo__custom");
    });
});
