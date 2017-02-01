# rearmed-js
<a href='https://ko-fi.com/A5071NK' target='_blank'><img height='32' style='border:0px;height:32px;' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=a' border='0' alt='Buy Me a Coffee' /></a> 

This library is a collection of helpful methods and monkey patches for Arrays Objects, Numbers, and Strings.

Start writing your Javascript like you write your Ruby code! 

# Install

#### Yarn, NPM, or Bower
```
yarn add chosen-material-theme

npm install chosen-material-theme

bower install chosen-material-theme
```

#### Rails
```ruby
# Gemfile
source 'https://rails-assets.org' do
  gem 'rails-assets-rearmed-js'
end


# app/assets/javascripts/application.js
/*
 *= require rearmed
*/
```

# Methods Implemented

## Array

```javascript
var array = [];

array.any(cb) // bool

array.all(cb) // bool

array.compact(badValues=[null, undefined]) // array
  
array.dig(*args) // value

array.each(cb)

array.empty() // bool

array.equals(array) // bool

array.excludes(val, fromIndex=0) // bool

array.notEmpty() // bool

array.find(cb_or_val) // value

array.findIndex(cb_or_val) // integer, undefined if not found

array.first() // value

array.flatten() // array

array.includes(val, fromIndex=0) // bool

array.index(cb_or_val) // integer, undefined if not found

array.inGroupsOf(int, fillWith=false) // nested array

array.groupBy(cb) // nested array

array.last // value

array.max(cb=null) // value

array.maxBy(cb=null) // value

array.min(cb=null) // value

array.minBy(cb=null) // value

array.reject(cb) // array

array.select(cb) // array

array.smartIncludes(val, fromIndex=0) // bool, uses `equals` method to compare if item is Array or Object

array.smartExcludes(val, fromIndex=0) // bool, uses `equals` method to compare if item is Array or Object

array.sum(cb=null) // number

array.uniq(cb=null) // array
```

## Object (Hash)

```javascript
var obj = {};

obj.all(cb) // bool

obj.any(cb) // bool

obj.compact(badValues=[null, undefined]) // object

obj.dig(*args) // object

obj.each(cb)

obj.empty() // bool

obj.equals(obj) // bool

obj.except(*keys) // object, accepts keys as splat arguments or an array

obj.hasKey() // bool

obj.hasValue() // bool

obj.join() // string

obj.keys() // array

obj.merge(obj) // object

obj.only(*keys) // object, accepts keys as splat arguments or an array

obj.reject(cb) // object

obj.select(cb) // object

obj.values() // array
```

## Number

```javascript
var num = 8.5;

num.ceil() // number

num.floor() // number

num.isDecimal() // bool

num.isEven() //bool

num.isInteger() //bool

num.isOdd() // bool

num.round() // number
```

## String

```javascript
var str = 'Hello World':

str.capitalize() // string

str.caseCmp(str) // bool

str.chars() // array

str.downcase() // string

str.empty() // bool

str.endsWith(val) // bool

str.excludes(val, fromIndex=0) // bool

str.gsub(str, toStr) // string

str.includes(val, fromIndex=0) // bool

str.lstrip() // string

str.reverse() // string

str.rstrip() // string

str.startsWith(val) // bool

str.strip() // string

str.sub(str, toStr) // string

str.titleize(onlyFirstLetters=true) // string

str.toBool() // bool

str.upcase() // string
```

# Browser Support

Supports Internet Explorer 9+ and all other browsers.

# Custom Builds

Visit this page to create your custom build. (https://solidfoundationwebdev.com/rearmed-js)[https://solidfoundationwebdev.com/rearmed-js]

Alternatively you can just `require` only the methods you want. For example:

```javascript
require('rearmed/array/reject');
require('rearmed/array/select');
require('rearmed/string/titleize');
```

# TODO
* Warn when overriding existing method for each monkey patch
* Modularize each method for custom build system
* Object merge
* Test Object methods
* Allow splat args
* Test splat args
* Objects duplicate not create simple object ???


# Credits
Created by Weston Ganger - @westonganger
<a href='https://ko-fi.com/A5071NK' target='_blank'><img height='32' style='border:0px;height:32px;' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=a' border='0' alt='Buy Me a Coffee' /></a> 
