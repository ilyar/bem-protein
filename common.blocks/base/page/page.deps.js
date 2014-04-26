({
    noDeps: [
        { block: 'i-bem', elem: 'dom', mods: { init: 'auto' } }
    ],
    mustDeps: [
        {block: 'functions'},
        {block: 'variables'},
        {block: 'mixins'}
    ],
    shouldDeps: [
        {elem: 'reset'},
        {block: 'print'}
    ]
})
