---
title: Introduction
description: What is input-validity
tableOfContents: false
---

`input-validity` is a minimal [(702 B min+gzip)](https://bundlephobia.com/package/input-validity@0.1.1) client-side form validation library with 0 dependencies that uses [native HTML5 validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation). Works perfect with server-rendered apps and minimal frontend libraries such as [HTMX](https://htmx.org/) or [Alpine.js](https://alpinejs.dev/).

In essence it allows for custom styling of HTML validation and aligns behaviour attributes like `required`, `type="email"`, `min`, `maxlength`, etc. to behave more like modern frontend framework validation.

Under the hood `input-validity` does following:

1. Adds `data-dirty` to a `<input />` or element, which combined with `:invalid` CSS pseudo class allows for indicating error state of the input. This attribute is added to the input after first `invalid` event (fired after first submit attempt).
2. Displays native error message in any DOM element specified with `validation-message` attribute. Falls back to native popover if not specified.
3. Allows for custom error messages with `message-*` attributes. Falls back to native messages if not specified.
