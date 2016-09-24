block('page').mod('view', 'account-edit').content()(function () {
    return [
        {
            block: 'passport-edit',
            data: this.data.user,
            js: true
        }
    ];
});
