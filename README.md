# Prototype library

Contain blocks with base styles, desktop and touch versions. This is the first level for all projects.

## Components inside

This is all blocks for projects creating. Every block can be build with technologies: bemhtml, css, js, mvc.js, deps.js.
And must be build with markdown for documentation and include level example.bundles for construct guideline.

### Lists

__list__:

- view: default, inline;

__dropdown__

### Navigation

__nav__:

- view: horizontal, vertical, side;

__social__:

- view: share, likes;

__breadcrumbs__

__pagination__


### JS

Blocks without visual realisation.

__collapse__:

- params: trigger, target;

__localStorage__

### Tables

### Progressbars

__loader__

__percentage___


> **it's important:**
> - all blocks must be include padding, margin, position, comments on jsdoc and docs on markdown
> - optional: top, left, right, bottom, float
> - all before this by depend on variables block
> - blocks can't affect each other
> - CSS cascade can be only inside block and only for this block elements
> - mods will be: type, size, view, layout, content, context, theme, without val (example, clear, visible and etc).