# React Masonry List

[![npm](https://img.shields.io/npm/v/react-masonry-list.svg?style=flat-square)](https://www.npmjs.com/package/react-masonry-list)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A Masonry component implemented through [css grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout), fast and responsive.
:star2: Each element first fills the column with the largest remaining space in the vertical direction, which will ensure that the height difference of each column is minimal.

![](https://user-images.githubusercontent.com/16912880/138633709-82e4b1dd-eb09-4ae5-a920-e6bad1464248.gif)

:point_right: [demo page](https://qc5tst.web.cloudendpoint.cn/)

## Install
`npm install react-masonry-list --save` 

Or use yarn
`yarn add react-masonry-list`

## Usage
```js
import { Layout, Item } from 'react-masonry-list'

const items = [
  //...
]

const List = () => {
  return (
    <Layout>
      <Item>
        {items.map(el => (
          //...
        ))}
      </Item>
    </Layout>
  )
}
```

## Props

### Layout

|name|type|required|default|description|
|--|--|--|--|--|
|colCount|number|No|3|Column count|
|gap|number|No|10|The size(px) of the gap between elements|
|minWidth|number|No|300|The min width(px) of columns|
|className|string|No| \ |Custom class name of layout container|

### Item
|name|type|required|default|description|
|--|--|--|--|--|
|className|string|No| \ |Custom class name of items|

## Browser compatibility
Refer to https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns#browser_compatibility

## Notice :exclamation:
Due to the limitations of some browsers such as chrome (limits the grid to 1000 rows, and the excess part cannot be rendered correctly), this component is not suitable for long lists. You should use pagination when you use it to prevent the row of the page from being too long. Based on the calculation formula, the maximum height of the layout is gap * 1000. For example, if your gap is 10, then the maximum height of the layout is 10000px.
### more detail
Refer to https://bugs.chromium.org/p/chromium/issues/detail?id=688640
or https://github.com/rachelandrew/gridbugs/issues/28