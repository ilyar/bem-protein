({
    block: 'page',
    title: 'Grid examples',
    favicon: 'favicon.ico',
    head: [{ elem: 'meta', attrs: { name: 'description', content: '' }}],
    styles: [{ elem: 'css', url: '_grid.css', ie: false }],
    content:[
        {
            elem: 'header',
            tag: 'header',
            content: [
                { tag: 'h2', content: 'Test' }
            ]
        },
        {
            elem: 'content',
            tag: 'main',
            attrs: { role: 'main' },
            content: [
                {
                    block: 'line',
                    content: [
                        {
                            elem: 'col',
                            mods: {'dlw': 2}
                        },
                        {
                            elem: 'col',
                            mods: {'dlw': 10}
                        }
                    ]
                }
            ]
        },
        {
            elem: 'footer',
            tag: 'footer',
            content: [

            ]
        }
    ],
    scripts: [{ elem: 'js', url: '_grid.js' }]
})
