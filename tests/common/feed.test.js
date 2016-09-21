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

describe('feed', function() {

    var d = new Date();
    var seed = d.getTime();

    var first_tweet = 'Мой первый твит ' + seed;
    var other_tweet = 'Другой твит ' + seed;

    var wait_for_like_text = '1';

    it('resize', function () {
        return this.browser.windowHandleSize({width: 320, height: 240});
    });


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
        var that = this;
        return this.browser.waitUntil(
            function async () {
                return that.browser.getText(".tweet-item:first-child .tweet-item__tweet-body").then(function(text) {
                    return text === first_tweet;
                });
            }

        )

    });
    it('лайк ставится', function() {
        var that = this;
        return this.browser.element(".tweet-item*=" + first_tweet).click(".button_action_like").waitUntil(
            function async () {
                return that.browser.element(".tweet-item*=" + first_tweet).isVisible(".button_action_like.button_pinned").then(function(isVisible) {
                    console.log(isVisible);
                    return isVisible === true;
                });
            }
        );
    });
    it('теперь 1 лайк', function ()
    {
        var that = this;
        return that.browser.waitUntil(
            function async () {
                return that.browser.element(".tweet-item*=" + first_tweet).getText(".button_action_like").then(function(text) {
                    return text === '1';
                });
            }
        );
    });

    it('лайк сохраняется', function() {
        var that = this;
        this.browser.refresh();
        return this.browser.waitUntil(
            function async () {
                return that.browser.element(".tweet-item*=" + first_tweet).isVisible(".button_action_like.button_pinned").then(function(isVisible) {
                    return isVisible === true;
                });
            }
        );
    });
    it('надпись на кнопке 1 лайк тоже сохранилась', function ()
    {
        var that = this;
        return that.browser.waitUntil(
            function async () {
                return that.browser.element(".tweet-item*=" + first_tweet).getText(".button_action_like").then(function(text) {
                    return text === '1';
                });
            }
        );
    });
    it('лайк снимается', function() {
        var that = this;
        return this.browser.element(".tweet-item*=" + first_tweet).click(".button_action_like").waitUntil(
            function async () {
                return that.browser.element(".tweet-item*=" + first_tweet).isVisible(".button_action_like.button_pinned").then(function(isVisible) {
                    return isVisible === false;
                });
            }
        );
    });
    it('теперь 0 лайков', function ()
    {
        var that = this;
        return that.browser.waitUntil(
            function async () {
                return that.browser.element(".tweet-item*=" + first_tweet).getText(".button_action_like").then(function(text) {
                    return text === '0';
                });
            }
        );
    });
    it('снятие лайка сохраняется', function() {
        var that = this;
        this.browser.refresh();
        return this.browser.waitUntil(
            function async () {
                return that.browser.element(".tweet-item*=" + first_tweet).isVisible(".button_action_like.button_pinned").then(function(isVisible) {
                    return isVisible === false;
                });
            }
        );
    });
    it('надпись 0 лайков тоже на месте', function ()
    {
        var that = this;
        return that.browser.waitUntil(
            function async () {
                return that.browser.element(".tweet-item*=" + first_tweet).getText(".button_action_like").then(function(text) {
                    return text === '0';
                });
            }
        );
    });

    it('ретвит проходит', function() {
        var that = this;

        return this.browser.url(config.servers.frontend_server + '/compose/')
            .waitForVisible(".compose-block")



        .setValue(".pepo-textarea textarea", other_tweet)
            .click(".send-tweet-btn")
            .waitUntil(
                function async () {
                    return that.browser.getTitle().then(function(text) {
                        return text === 'Feed Page';
                    });
                }
            )

        .element(".tweet-item*=" + first_tweet).click(".button_action_retweet").waitUntil(
            function async () {
                return that.browser.element(".tweet-item*=" + first_tweet).isVisible(".button_action_retweet.button_pinned").then(function(isVisible) {
                    console.log(isVisible);
                    return isVisible === true;
                });
            }
        );
    });

    it('теперь 1 ретвит', function ()
    {
        var that = this;
        return that.browser.waitUntil(
            function async () {
                return that.browser.element(".tweet-item*=" + first_tweet).getText(".button_action_retweet").then(function(text) {
                    return text === '1';
                });
            }
        );
    });

    it('ретвит сохраняется', function() {
        var that = this;
        this.browser.refresh();
        return this.browser.waitUntil(
            function async () {
                return that.browser.element(".tweet-item:nth-child(3)").isVisible(".button_action_retweet.button_pinned").then(function(isVisible) {
                    return isVisible === true;
                });
            }
        );
    });

    it('надпись на кнопке 1 ретвит тоже сохранилась', function ()
    {
        var that = this;
        return that.browser.waitUntil(
            function async () {
                return that.browser.element(".tweet-item:nth-child(3)").getText(".button_action_retweet").then(function(text) {
                    return text === '1';
                });
            }
        );
    });
    it('текст ретвита соответствует тексту исходного твита', function ()
    {
        var that = this;
        return that.browser.waitUntil(
            function async () {
                return that.browser.element(".tweet-item:nth-child(1)").getText(".tweet-item__tweet-body").then(function(text) {
                    return text === first_tweet;
                });
            }
        );
    });

    it('ретвит снимается', function() {
        var that = this;
        return this.browser.element(".tweet-item:nth-child(3)").click(".button_action_retweet").waitUntil(
            function async () {
                return that.browser.element(".tweet-item:nth-child(3)").isVisible(".button_action_retweet.button_pinned").then(function(isVisible) {
                    return isVisible === false;
                });
            }
        );
    });
    it('теперь 0 ретвитов', function ()
    {
        var that = this;
        return that.browser.waitUntil(
            function async () {
                return that.browser.element(".tweet-item:nth-child(3)").getText(".button_action_retweet").then(function(text) {
                    return text === '0';
                });
            }
        );
    });
    it('снятие ретвита сохраняется', function() {
        var that = this;
        this.browser.refresh();
        return this.browser.waitUntil(
            function async () {
                return that.browser.element(".tweet-item*=" + first_tweet).isVisible(".button_action_retweet.button_pinned").then(function(isVisible) {
                    return isVisible === false;
                });
            }
        );
    });
    it('надпись 0 ретвитов тоже на месте', function ()
    {
        var that = this;
        return that.browser.waitUntil(
            function async () {
                return that.browser.element(".tweet-item*=" + first_tweet).getText(".button_action_retweet").then(function(text) {
                    return text === '0';
                });
            }
        );
    });

   /*
   TODO клики по дропзоне вызывают окно операционной системы, которое не получится обработать
   TODO надо видоизменить дропзону так, чтобы можно было стандартными средствами браузера инициировать загрузку
   TODO это можно сделать, если .dropzone станет тегом form, и эту форму мы будем слушать.
    it('открыть диалог загрузки картинки в твит', function ()
    {

        return this.browser.url(config.servers.frontend_server + '/compose/')
            .waitForVisible(".compose-block")
            .click(".button_attach_photo")
            .waitForVisible(".dropzone")
            .click(".dropzone")
            .keys("1.jpg")
            .keys("\u2386")
            .waitForVisible(".dz-image");
    });

    it ('выбрать картинку', function () {
    });*/



    it('прикрепить url в редакторе', function ()
    {
        var that = this;
        var check_array = ["youtube.com", "yandex.ru", "volchata.ml"];
        var check_num = Math.floor(Math.random()*3);
        var check_url = check_array[check_num];
        return this.browser.url(config.servers.frontend_server + '/compose/')
            .waitForVisible(".compose-block")
            .click(".button_attach_url")
            .waitForVisible(".url-input")
            .setValue(".url-input .input__control", check_url)
            .click(".url-input .button__control")
            .waitForVisible(".tweet-attachment",30000)
            .waitUntil(
                function async () {
                    return that.browser.getAttribute('.tweet-attachment .link.header','href').then(
                        function(text) {
                            console.log(text);
                            return parseInt(text.indexOf(check_url)) >= 0;
                        }
                    );
                }
            )

    });

    var attach_url;
    var preview_pic;
    var preview_title_info;
    var preview_title;

    it('отправить твит с url', function () {


        this.browser.getAttribute('.tweet-attachment .link.header','href').then(function(text) { attach_url = text });
        this.browser.getAttribute('.tweet-attachment .image','src').then(function(text) { preview_pic = text });
        this.browser.getText('.tweet-attachment .link.header').then(function(text) {
            preview_title_info = text;
            preview_title = preview_title_info.split(' - ')[1];
        });



        var that = this;
        return this.browser.click(".send-tweet-btn")
            .waitUntil(
                function async () {
                    return that.browser.getTitle().then(function(text) {
                        return text === 'Feed Page';
                    });
                }
            ).waitUntil(
                function async () {
                    return that.browser.getText(".tweet-item:first-child .tweet-item__tweet-body .tweet-item__tweet-text .link").then(function (text) {
                        return text === preview_title;
                    });
                }
            );
    });



    it ('прикрепленный url правильный', function () {
        var that = this;
        return this.browser.waitUntil(
            function async () {
                return that.browser.getAttribute(".tweet-item:first-child .tweet-item__tweet-body .tweet-item__tweet-text .link", "href").then(function (text) {
                    return text === attach_url;
                });
            }
        );


    });

    it ('превьюшка url верная', function () {
        var that = this;
        return this.browser.waitUntil(
            function async () {

                return that.browser.getAttribute(".tweet-item:first-child .tweet-item__tweet-body .tweet-item__tweet-image .image", "src").then(function (text) {
                    return text === preview_pic;
                });

            });
    });

    it('прикрепить url в редакторе и дописать текст', function ()
    {
        var that = this;
        var check_array = ["design.ru", "yandex.ru", "volchata.ml"];
        var check_num = Math.floor(Math.random()*3);
        var check_url = check_array[check_num];

        return this.browser.url(config.servers.frontend_server + '/compose/')
            .waitForVisible(".compose-block")



            .setValue(".pepo-textarea textarea", other_tweet)
            .click(".send-tweet-btn")
            .waitUntil(
                function async () {
                    return that.browser.getTitle().then(function(text) {
                        return text === 'Feed Page';
                    });
                }
            )
            .url(config.servers.frontend_server + '/compose/')
            .waitForVisible(".compose-block")
            .click(".button_attach_url")
            .waitForVisible(".url-input")
            .setValue(".url-input .input__control", check_url)
            .click(".url-input .button__control")
            .waitForVisible(".tweet-attachment",30000)
            .waitUntil(
                function async () {
                    return that.browser.getAttribute('.tweet-attachment .link.header','href').then(
                        function(text) {
                            console.log(text);
                            return parseInt(text.indexOf(check_url)) >= 0;
                        }
                    );
                }
            )
            .setValue(".pepo-textarea textarea", first_tweet);

    });

    it('отправить твит с url и текстом', function () {


        this.browser.getAttribute('.tweet-attachment .link.header','href').then(function(text) { attach_url = text });
        this.browser.getAttribute('.tweet-attachment .image','src').then(function(text) { preview_pic = text });
        this.browser.getText('.tweet-attachment .link.header').then(function(text) {
            preview_title_info = text;
            preview_title = preview_title_info.split(' - ')[1];
        });



        var that = this;
        return this.browser.click(".send-tweet-btn")
            .waitUntil(
                function async () {
                    return that.browser.getTitle().then(function(text) {
                        return text === 'Feed Page';
                    });
                }
            ).waitUntil(
                function async () {
                    return that.browser.getText(".tweet-item:first-child .tweet-item__tweet-body .tweet-item__tweet-text .link").then(function (text) {
                        return text === preview_title;
                    });
                }
            ).waitUntil(
                function async () {
                    return that.browser.getText(".tweet-item:first-child .tweet-item__tweet-body .tweet-item__tweet-text").then(function (text) {
                        //console.log(text);
                        return text = preview_title + ' ' + first_tweet;
                    });
                }
            );
    });



    it ('прикрепленный url для твита с текстом правильный', function () {
        var that = this;
        return this.browser.waitUntil(
            function async () {
                return that.browser.getAttribute(".tweet-item:first-child .tweet-item__tweet-body .tweet-item__tweet-text .link", "href").then(function (text) {
                    return text === attach_url;
                });
            }
        );


    });

    it ('превьюшка url верная', function () {
        var that = this;
        return this.browser.waitUntil(
            function async () {

                return that.browser.getAttribute(".tweet-item:first-child .tweet-item__tweet-body .tweet-item__tweet-image .image", "src").then(function (text) {
                    return text === preview_pic;
                });

            });
    });


    d = new Date();
    seed = d.getTime();

    first_tweet = 'Мой первый твит ' + seed;
    other_tweet = 'Другой твит ' + seed;

    it('первый твит для проверки скролла', function () {
        var that = this;
        return this.browser.url(config.servers.frontend_server + '/compose/')
            .waitForVisible(".compose-block")
            .setValue(".pepo-textarea textarea", first_tweet)
            .click(".send-tweet-btn")
            .waitUntil(
                function async () {
                    return that.browser.getTitle().then(function(text) {
                        return text === 'Feed Page';
                    });
                }
            );

    });

    for (var i = 0; i < 10; i++)
    {
        var n = i+2;
        it('твит для проверки скролла ' + n, function () {
            var that = this;
            return this.browser.url(config.servers.frontend_server + '/compose/')
                .waitForVisible(".compose-block")
                .setValue(".pepo-textarea textarea", other_tweet)
                .click(".send-tweet-btn")
                .waitUntil(
                    function async() {
                        return that.browser.getTitle().then(function (text) {
                            return text === 'Feed Page';
                        });
                    }
                );
        });
    }

    it('перемотка', function () {
        var that = this;

        return this.browser.scroll(".tweet-item:nth-child(10)")
            .waitForVisible(".tweet-item:nth-child(11)")
            .waitUntil(
                function async() {
                    return that.browser.getText(".tweet-item:nth-child(11) .tweet-item__tweet-body").then(function (text) {
                        return text === first_tweet;
                    });
                }
            );

    });



});
