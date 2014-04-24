({
    noDeps: [
        { block: 'i-bem', elem: 'dom', mods: { init: 'auto' } }
    ],
    mustDeps: [
        {block: 'functions'},
        {block: 'mixins'},
        {block: 'variables'}
    ],
    shouldDeps: [
        {elem: 'reset'},
        {block: 'print'}
    ]
})
