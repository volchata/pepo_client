block('button').mod('action', 'reply')(
    def()(
        function () {

            this.mods.theme = 'islands';
            this.mods.size = 'm';

            return applyNext();
        }
    )
);
