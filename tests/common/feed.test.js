var config = require("../../server/config.js");

describe('auth', function() {
    it('увидеть кнопки авторизации', function() {
        return this.browser.url(config.servers.frontend_server)
            .waitForVisible(".social-buttons")
            .waitForVisible(".button_social_vk")
            .waitForVisible(".button_social_facebook");
    });
    it('переход на vk форму oauth', function () {
        return this.browser.click(".button_social_vk")
            .waitForVisible(".oauth_page")
            .waitForVisible("[name='email']")
            .waitForVisible("[name='pass']")
            .waitForVisible(".popup_login_btn");
    });
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
    })
});


describe('feed', function() {

    var first_tweet = 'Мой первый твит';
    var other_tweet = 'Другой твит';

    it('увидеть ленту твитов', function() {
        return this.browser.url(config.servers.frontend_server + '/feed/')
            .waitForVisible(".tweet-feed")
    });
    it('перейти к написанию твита', function() {
        return this.browser.url(config.servers.frontend_server + '/compose/')
            .waitForVisible(".compose-block")
    });
    it('написать свой первый твит', function() {
        var that = this;
        return this.browser.setValue(".pepo-textarea textarea", first_tweet)
            .click(".send-tweet-btn")
            .waitUntil(
                function async () {
                    return that.browser.getTitle().then(function(text) {
                        return text === 'Feed Page';
                    });
                }
            );
    });
    it('отправлен правильный твит', function() {
        var tweet;
        this.browser.selectorExecute(".tweet-item", function(tweets, message) {
            return tweets[0];
        }).then(function(res) {
            console.log(res); // returns, for example, "68 divs on the page"

        });


    });
    it('лайк ставится', function() {

    });
    it('лайк сохраняется', function() {


    });

});
