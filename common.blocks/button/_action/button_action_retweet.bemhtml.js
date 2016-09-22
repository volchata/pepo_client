block('button').mod('action', 'retweet')(
    def()(
        function () {

            this.mods.theme = 'islands';
            this.mods.size = 'm';

            return applyNext();
        }
    )
);
