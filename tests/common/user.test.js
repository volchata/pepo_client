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

describe('user', function() {

    var self_profile_url;

    it('открыть поиск пользователей', function () {
        return this.browser.click(".control-group_role_menu .button:nth-child(3)")
            .waitForVisible(".page_view_users-search");
    });
    it('поиск работает', function () {
        return this.browser.setValue(".users-search__search-input .input__control",'test')
            .waitForVisible(".user-item .user-item__middle .about-user", 10000);
    }, 10000);
    it('пользователь найден', function () {
        var that = this;
        return this.browser.waitUntil(
            function async() {
                return that.browser.getText(".user-item .user-item__middle .about-user .text + .text").then(function (text) {
                    return text === '@test';
                });
            }
        );
    });
    it('открыть свой профиль через поиск', function () {
        return this.browser.click(".user-item*=@test")
            .waitForVisible(".page_view_profile");
    });
    it('отредактировать профиль', function () {

        var that = this;
        self_profile_url = this.browser.getUrl();

        return this.browser.click(".control-group_role_menu .button:nth-child(4)")
            .waitForVisible(".button*=Редактировать")
            .click(".button*=Редактировать")
            .waitUntil(
                function async() {
                    return that.browser.getUrl().then(function (text) {
                        return text === config.servers.frontend_server + '/account/edit/';
                    });
                }
            );

    });

    var seed = Math.floor(10*Math.random());

    var first_name = 'Имя ' + seed;
    var last_name = 'Фамилия ' + seed;


    it('внести новые данные', function () {
        var that = this;
        return this.browser.setValue(".input_field_firstName .input__control",first_name)
            .setValue(".input_field_lastName .input__control",last_name)
            .click(".button_type_submit")
            .waitUntil(
                function async() {
                    return that.browser.getUrl().then(function (text) {
                        return text !== config.servers.frontend_server + '/account/edit/';
                    });
                }
            );
    });

    it('данные сохранены', function () {
        return this.browser.url(config.servers.frontend_server +'/profile/')
            .waitForVisible(".about-user*=" + first_name)
            .waitForVisible(".about-user*=" + last_name)

    });


});
