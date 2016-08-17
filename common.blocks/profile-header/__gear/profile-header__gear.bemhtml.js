block('profile-header').elem('gear')(
    content()(
        [
            {
                block: "link",
                mods: { pseudo: true },
                content: [
                    {
                        block: "gear-image",
                        attrs: { src: "/common.blocks/profile-header/gear.png" }
                    }
                ]
            }
        ]
    )
);