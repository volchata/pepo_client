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
    var first_comment = 'Мой первый ответ ' + seed;
    var other_comment = 'Другой ответ ' + seed;
    var first_2nd_comment = 'Мой первый ответ на ответ ' + seed;
    var other_2nd_comment = 'Другой ответ на ответ ' + seed;

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
            .waitForVisible(".page_view_tweet");
    });

    it('комментариев пока нет', function () {
        var that = this;
        return this.browser.waitUntil(
                function async() {
                    return that.browser.getText(".tweet-feed .text").then(function (text) {
                        return text === 'Нет комментариев';
                    });
                }
            );
    });

    it('разместить ответ', function () {
        var that = this;
        return this.browser.click(".button_action_reply")
            .waitForVisible(".compose-block")
            .setValue(".pepo-textarea textarea", first_comment)
            .click(".send-tweet-btn")
            .waitForVisible(".page_view_feed")
            .click(".tweet-item:first-child")
            .waitUntil(
                function async() {
                    return that.browser.getText(".tweet-feed .tweet-item .tweet-item__tweet-body").then(function (text) {
                        return text === first_comment;
                    });
                }
            );
    });

    it('разместить ответ 2го уровня', function () {
        var that = this;
        return this.browser.click(".tweet-feed .tweet-item .button_action_reply")
            .waitForVisible(".compose-block")
            .setValue(".pepo-textarea textarea", first_2nd_comment)
            .click(".send-tweet-btn")
            .waitForVisible(".page_view_feed")
            .click(".tweet-item*=" + first_tweet)
            .waitForVisible(".page_view_tweet")
            .click(".tweet-feed .tweet-item:first-child")
            .waitUntil(
                function async() {
                    return that.browser.getText(".tweet-feed .tweet-item .tweet-item__tweet-body").then(function (text) {
                        return text === first_2nd_comment;
                    });
                }
            );
    });

    it('сообщение ведет на родительский коммент', function () {
        return this.browser.click(".body > .tweet-item .tweet-item__reply-info .link")
            .waitForVisible(".tweet-item*=" + first_tweet)
    });

    for (var i = 1; i <= 9; i++) {
        it ('внесение комментария ' + i, function () {
            return this.browser.url(config.servers.frontend_server + '/feed/')
                .waitForVisible(".tweet-feed")
                .click(".tweet-item*=" + first_tweet)
                .waitForVisible(".page_view_tweet")
                .click(".body > .tweet-item .button_action_reply")
                .waitForVisible(".compose-block")
                .setValue(".pepo-textarea textarea", other_comment)
                .click(".send-tweet-btn");
        })
    }

    it ('внесение комментария ' + 10, function () {
        return this.browser.url(config.servers.frontend_server + '/feed/')
            .waitForVisible(".tweet-feed")
            .click(".tweet-item*=" + first_tweet)
            .waitForVisible(".page_view_tweet")
            .click(".body > .tweet-item .button_action_reply")
            .waitForVisible(".compose-block")
            .setValue(".pepo-textarea textarea", seed)
            .click(".send-tweet-btn")
            .waitForVisible(".tweet-feed");
    });

    it('скроллинг комментариев работает', function () {
        var that = this;
        return this.browser.click(".tweet-item*=" + first_tweet)
            .waitForVisible(".page_view_tweet")
            .scroll(".tweet-feed .tweet-item:nth-child(10)")
            .waitForVisible(".tweet-feed .tweet-item:nth-child(11)")
            .waitUntil(
                function async() {
                    return that.browser.getText(".tweet-feed .tweet-item:nth-child(11) .tweet-item__tweet-body").then(function (text) {
                        return text === String(seed);
                    });
                }
            );

    });

});
