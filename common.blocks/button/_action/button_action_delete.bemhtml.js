block('button').mod('action', 'delete')(
    def()(
        function () {

            this.mods.theme = 'islands';
            this.mods.size = 'm';

            return applyNext();
        }
    )
);
