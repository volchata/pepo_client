block('button').mod('action', 'like')(
    def()(
        function () {

            this.mods.theme = 'islands';
            this.mods.size = 'm';

            return applyNext();
        }
    )
);
