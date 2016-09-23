block('page').mod('view', 'avatar-edit').content()(function () {
    return [
        {
            block: 'avatar-edit',
            data: this.data.user,
            js: true
        }
    ];
});
