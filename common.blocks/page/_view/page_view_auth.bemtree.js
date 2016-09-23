block('page').mod('view', 'auth').content()(function () {
    return [
        {
            block: 'social-buttons',
            data: {
                image: this.data.image
            }
        }
    ];
});
