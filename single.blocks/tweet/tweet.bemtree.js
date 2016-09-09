block('single-tweet')(
    content()(
        function () {
            return {
                block: 'tweets',
                content: {
                    block: 'tweet'
                }
            }
        }
    )
);
