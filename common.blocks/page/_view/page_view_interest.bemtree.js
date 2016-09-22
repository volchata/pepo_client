block('page').mod('view', 'interest').content()(function () {
    var data = {};
    var js = true;

    if (this.data) {
        data = this.data;
    }

    return [
        {
            block: 'interest-block',
            data: data,
            js: {userInterests: data.userInterests, allInterests: data.allInterests}
        }
    ];
});
