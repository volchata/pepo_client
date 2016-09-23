block('page').mod('view', 'users-search').content()(function () {
    return [
        {
            block: 'users-search',
            data: this.data,
            js: true
        },
        applyNext()
    ];
});
