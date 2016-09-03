block('follow-button')(
    js()(true),
    content()(
        function () {
            return [
                {
                    block: "button",
                    mods: {follow: "yes"},
                    text: "Читать"
                }
            ];
        }
    )
);
