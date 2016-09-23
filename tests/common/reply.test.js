var config = require("../../server/config.js");


describe('auth', function() {
    it('увидеть кнопки авторизации', function() {
        return this.browser.url(config.servers.frontend_server)
            .waitForVisible(".social-buttons")
            .waitForVisible(".button_social_vk")
            .waitForVisible(".button_social_facebook");
    },10000);
    it('переход на vk форму oauth', function () {
        return this.browser.click(".button_social_vk")
            .waitForVisible(".oauth_page")
            .waitForVisible("[name='email']")
            .waitForVisible("[name='pass']")
            .waitForVisible(".popup_login_btn");
    },10000);
    it('авторизация через vk oauth', function () {
        var that = this;
        return this.browser.setValue("[name='email']", "+79780152039")
            .setValue("[name='pass']", "TestTest1234!")
            .click(".popup_login_btn")
            .waitUntil(
                function async () {
                    return that.browser.getTitle().then(function(text) {
                        return text === 'Feed Page'
                    });
                }
            );
    },10000);
});

describe('reply', function() {

    var d = new Date();
    var seed = d.getTime();

    var first_tweet = 'Мой первый твит ' + seed;
    var other_tweet = 'Другой твит ' + seed;

    var wait_for_like_text = '1';

    it('resize', function () {
        return this.browser.windowHandleSize({width: 320, height: 480});
    });


    it('увидеть ленту твитов', function () {

        return this.browser.url(config.servers.frontend_server + '/feed/')
            .waitForVisible(".tweet-feed")
    });
    it('перейти к написанию твита', function () {
        return this.browser.url(config.servers.frontend_server + '/compose/')
            .waitForVisible(".compose-block")
    });
    it('написать свой первый твит', function () {
        var that = this;
        return this.browser.setValue(".pepo-textarea textarea", first_tweet)
            .click(".send-tweet-btn")
            .waitUntil(
                function async() {
                    return that.browser.getTitle().then(function (text) {
                        return text === 'Feed Page';
                    });
                }
            );
    });
    it('отправлен правильный твит', function () {
        var that = this;
        return this.browser.waitUntil(
            function async() {
                return that.browser.getText(".tweet-item:first-child .tweet-item__tweet-body").then(function (text) {
                    return text === first_tweet;
                });
            }
        )

    });
    it('тело твита кликабельно', function () {
        var that = this;
        return this.browser.click(".tweet-item:first-child")
            .waitForVisible(".compose-block")
    })
});
