block('top-menu')(
mod('layout', 'main').content()([
        { elem: 'back-button' },
        { elem: 'tweet-button' },
        { elem: 'search-button' },
]),
mod('layout', 'plain').content()([
        { elem: 'back-button' }
]),
elem('*').wrap()(function() {
    if(this.elem.match(/-button$/))
        return {
            block : 'button',
            mods:  { theme: 'islands', size: 'm', view: 'plain'},
            mix: { block: 'top-menu', elem: this.elem },
            icon: {
                block: 'icon',
                url: '/img/' + this.elem + '.svg'
            }
        };
})
)
