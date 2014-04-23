({
    block: 'page',
    title: 'Protein library',
    favicon: '../../favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'name', content: 'Protein' }},
        { elem: 'meta', attrs: { name: 'description', content: 'Protein - awesome prototyping library on BEM methodology' }}
    ],
    styles: [{ elem: 'css', url: '_index.prefix.css', ie: false }],
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
    scripts: [{ elem: 'js', url: '_index.js' }]
})