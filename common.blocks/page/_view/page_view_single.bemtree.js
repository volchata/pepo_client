block('page').mod('view', 'single')(
    content()(
        function () {
            return [
                {
                    block: this.data.single
                }
            ];
        }
    )
);
