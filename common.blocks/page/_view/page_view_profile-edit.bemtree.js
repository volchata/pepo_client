block('page').mod('view', 'profile-edit').content()(function() {
    return [
    	{
            elem: 'header',
            content: {
                block: 'top-menu',
                mods: { layout: 'main' }
            }
        },
        {
            block: 'profile-edit',
            data: this.data.profile_data,
            js: true
        }
    ]
});
