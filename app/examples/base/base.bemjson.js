({
    block: 'page',
    title: 'Base level blocks examples',
    favicon: '../../favicon.ico',
    head: [{ elem: 'meta', attrs: { name: 'description', content: '' }}],
    styles: [{ elem: 'css', url: '_base.prefix.css', ie: false }],
    content:[
        {
            elem: 'header',
            tag: 'header',
            content: [

            ]
        },
        {
            elem: 'content',
            tag: 'main',
            attrs: { role: 'main' },
            content: [

            ]
        },
        {
            elem: 'footer',
            tag: 'footer',
            content: [

            ]
        }
    ],
    scripts: [{ elem: 'js', url: '_base.js' }]
})