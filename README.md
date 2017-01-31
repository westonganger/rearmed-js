# rearmed-js
<a href='https://ko-fi.com/A5071NK' target='_blank'><img height='32' style='border:0px;height:32px;' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=a' border='0' alt='Buy Me a Coffee' /></a> 

Start writing your Javascript like you write your Ruby code! This library is a collection of helpful methods and monkey patches for Arrays Objects, Numbers, and Strings.


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

* any(cb)
* all(cb)
* compact
* dig(*args)
* each(cb)
* empty
* equals(array)
* excludes(val, fromIndex=0)
* notEmpty
* find(cb_or_val)
* findIndex(cb_or_val)
* first
* flatten
* includes(val, fromIndex=0)
* index(cb_or_val)
* inGroupsOf(int, fillWith=false)
* groupBy(cb)
* last
* max(cb=null)
* maxBy(cb=null)
* min(cb=null)
* minBy(cb=null)
* reject(cb)
* select(cb)
* smartIncludes(val, fromIndex=0) // uses `equals` method to compare if item is Array or Object
* smartExcludes(val, fromIndex=0) // uses `equals` method to compare if item is Array or Object
* sum(cb=null)
* uniq(cb=null)

## Object (Hash)

* all(cb)
* any(cb)
* compact
* delete
* dig(*args)
* each(cb)
* empty
* equals(object)
* excludes ???
* except(*keys)
* hasKey
* hasValue
* includes ???
* join
* merge(object)
* only(*args)
* reject(cb)
* select(cb)
* values

## Number

* ceil
* floor
* isDecimal
* isEven
* isInteger
* isOdd
* round

## String

* capitalize
* caseCmp(str)
* chars
* downcase
* empty
* endsWith(val)
* excludes(val, fromIndex=0)
* gsub(str, toStr)
* includes(val, fromIndex=0)
* lstrip
* reverse
* rstrip
* startsWith(val)
* strip
* sub(str, toStr)
* titleize(onlyFirstLetters=true)
* toBool
* upcase

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


# Credits
Created by Weston Ganger - @westonganger
<a href='https://ko-fi.com/A5071NK' target='_blank'><img height='32' style='border:0px;height:32px;' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=a' border='0' alt='Buy Me a Coffee' /></a> 
