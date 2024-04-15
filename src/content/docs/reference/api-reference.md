---
title: API Reference
description: Attributes reference
---

Following attributes can be used on any `<input />` element.

## Attributes for specifying behaviour

| Attribute          | Value                                                           |
| ------------------ | --------------------------------------------------------------- |
| validation-message | CSS selector specifying where error message should be displayed |

## Attributes for defining custom error messges

| Attribute                | Description                                                                                                                                                                                        | Corresponding ValidityState property                                                              |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| message-bad-input        | Input value that the browser is unable to convert                                                                                                                                                  | [badInput](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/badInput)               |
| message-pattern-mismatch | Input value does not match the specified [pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern)                                                                        | [patternMismatch](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/patternMismatch) |
| message-range-overflow   | Input value is greater than the maximum specified by the [max](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max) attribute                                                      | [rangeOverflow](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/rangeOverflow)     |
| message-range-underflow  | Input value is less than the minimum specified by the [min](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min) attribute                                                         | [rangeUnderflow](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/rangeUnderflow)   |
| message-step-mismatch    | Input value does not fit the rules determined by the [step](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step) attribute (that is, it's not evenly divisible by the step value) | [stepMismatch](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/stepMismatch)       |
| message-too-long         | Input value exceeds the specified `maxlength`                                                                                                                                                      | [tooLong](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/tooLong)                 |
| message-too-short        | Input value fails to meet the specified `minlength`                                                                                                                                                | [tooShort](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/tooShort)               |
| message-type-mismatch    | Input value is not in the required syntax (when [type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#type) is `email` or `url`)                                                  | [typeMismatch](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/typeMismatch)       |
| message-value-missing    | Input element has a [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#required) attribute, but no value                                                                   | [valueMissing](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/valueMissing)       |

## Experimental API

TODO
