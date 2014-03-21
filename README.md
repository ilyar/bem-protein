# Prototype library

Contain blocks with base styles, desktop and touch versions. This is the first level for all projects.

## Components inside

This is all blocks for projects creating. Every block can be build with technologies: bemhtml, css, js, mvc.js, deps.js.
And must be build with markdown for documentation and include level example.bundles for construct guideline.

### Base

__variables__:

- see base.blocks level for example;

__page__:

- html>head+body;

__intro__:

- for example see jumbotron in Twitter Bootstrap >= 3

__link__:

- sizes: small, default, large;
- states: default, hover, visited;
- types: default, pseudo;

__HTML5__:

- article;
- section;
- figure;
- video;
- header;
- footer;
- main;
- address;
- author;
- aside;


### Grid

__line__:

- elements: col-\* from 1 to 12;
- disable-on: desktop, tablet, mobile; like xs, md and lg in Twitter Bootstrap >= 3

__content-container__:

- fix content width in page;

### Forms

__label__:

- can be used with form-sectioning elements;

__input__:

- types: textarea, password, file;
- can be has elements: label, hint;

__input-group__:

- addons: button, icon;
- for example is search string: input+button

__radio__:

- view: default, buttons;

__checkbox__:

- view: default, tumbler;

__range__:

- types: one value, two values;

__calendar__

__form__

### Buttons

__button__:

- sizes: small, default, large;
- states: default, hover, active, disabled;

__button-group__:

- view: dropdown, split;

### Typo

__title__:

- sizes: h1, h2, h3, h4;

__paragraph__:

- tag: p;

__icon__:

- tech realisation for inline SVG;

__print__:

- styles for print pages;

__br__:

- available-on: desktop, tablet, mobile;
- disable-on: desktop, tablet, mobile;

__hr__


### Lists

__list__:

- view: default, inline;

__dropdown__

### Windows

__tooltip__:

- view: top, bottom, left, right;

__popover__:

- view: top, bottom, left, right;

__modal__:

- types: alert, default;

__alert__:

- types: info, warning, error, success;

### Panels

__panel__:

- sizes: small, default, large;
- can be has elements: title;

__plate__:

- sizes: small, default, large;

### Navigation

__nav__:

- view: horizontal, vertical, side;

__social__:

- view: share, likes;

__breadcrumbs__

__pagination__

### Wrappers

__device__:

- view: imac, macbook, ipad, iphone;

### JS

Blocks without visual realisation.

__collapse__:

- params: trigger, target;

__localStorage__

### Responsive helpers

__mantle__:

- available-on: desktop, tablet, mobile;
- disable-on: desktop, tablet, mobile;

### Tables

### Progressbars

__loader__

__percentage___

-------------------------------------------------------------------------

> **it's important:**
> - all blocks must be include padding, margin, position
> - optional: top, left, right, bottom, float
> - all before this by depend on variables block
> - blocks can't affect each other
> - CSS cascade can be only inside block and only for this block elements
> - mods will be: type, size, view, layout, content, context, theme, without val (example, clear, visible and etc).