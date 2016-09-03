block('page').mod('view', 'profile-edit').content()(function() {
    return [
        {
            block: 'profile-edit',
            data: this.data.profile_data,
            js: true
        }
    ]
});
