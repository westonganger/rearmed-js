# Changelog

- `v2.0.1` - Sept 19 ,2017
  * Change default argument for `Array.compact` and `Object.compact` from `[null, undefined]` to `[null, undefined, '']`
- `v2.0.0` - Sept 2, 2017
  * Make all Object patches  much safer by moving them under `Object.prototype.rearmed()` and `Object.rearmed` method to fix issue #2
  * Add `Object#rearmed.add()` and `Object.rearmed.remove()` methods for adding or removing methods to rearmed objects
  * Remove Core section to be replaced with Generic section
  * Add Generic `isBlank`, `isPresent`, `presence`, `simpleType`, `try`
  * Add Array `range` and `tap` methods
  * Fix `Object#all` when called with no callback function. Now defaults to if all values are truthy.
  * Remove `Array#notEmpty`, `Object#notEmpty`, and `String#notEmpty`
- `v1.0.0` - May 6, 2017
  * Allow `all` and `any` methods without a callback
  * Fix some method warnings
  * Restructure directories because you cant define a root folder in npm... gross.
  * Hookup to travis-ci
- `v0.9.0` - February 1, 2017
  * First Release
