---
title: Install
description: How to install and use input-validity
---

Installing `input-validity` is as simple as adding a `<script>` tag to your page. No need for complicated build steps or systems.

## CDN

via CDN, for example [unpkg](https://www.unpkg.com/):

```html
<script src="https://www.unpkg.com/input-validity"></script>
```

or with specific version:

```html
<script src="https://www.unpkg.com/input-validity@0.1.5"></script>
```

CDN approach is extremely simple but you may want to consider [not using CDNs in production](https://blog.wesleyac.com/posts/why-not-javascript-cdn).

## Download a copy

[Download](https://www.unpkg.com/input-validity@0.1.5/dist/iife/index.js) and copy it into your project to a public assets directory

```html
<script src="/path/to/input-validity.js"></script>
```

## NPM and bundlers

If you prefer you can also install with `npm` / `pnpm` / `yarn`:

```
npm install input-validity
```

And then import into your code:

```js
import "input-validity";
```

Currently only ESM is supported.
