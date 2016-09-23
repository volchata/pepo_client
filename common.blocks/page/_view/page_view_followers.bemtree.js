block('page').mod('view', 'followers').content()(function () {
    return [
        {
            block: 'user-feed',
            data: this.data,
            js: true
        },
        applyNext()
    ];
});
