# React Masonry List

[![npm](https://img.shields.io/npm/v/react-masonry-list.svg?style=flat-square)](https://www.npmjs.com/package/react-masonry-list)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A Masonry component implemented through [css grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout), fast and responsive.
:star2: Each element first fills the column with the largest remaining space in the vertical direction, which will ensure that the height difference of each column is minimal.

![](https://user-images.githubusercontent.com/16912880/177976842-35ca3306-33ef-44c1-ab23-b19fb2f4366f.gif)

:point_right: [demo page](https://react-masonry-list-b1bkks03c-margaux7.vercel.app/)

## Install
`npm install react-masonry-list --save`

Or use yarn
`yarn add react-masonry-list`

## Usage
```js
import Layout from 'react-masonry-list'

const items = [
  //...
]

// If item contains img elements, don't forget set img's width. In order to get a better display effect, you can also set img's `object-fit` to `contain`.

const List = () => {
  return (
    <Layout
      minWidth={100}
      items={items.map(item => (
        <div key={item.id}>...</div>
      ))}
    >
    </Layout>
  )
}

```

### Use with NextJS
Because it's a client side only component, when using it with NextJS, you need to import it by `dynamic` API:

```js
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('react-masonry-list'), {
  ssr: false,
});

const items = [
  //...
]

// If item contains img elements, don't forget set img's width. In order to get a better display effect, you can also set img's `object-fit` to `contain`.

const List = () => {
  return (
    <Layout
      minWidth={100}
      items={items.map(item => (
        <div key={item.id}>...</div>
      ))}
    >
    </Layout>
  )
}

```

## Props

|name|type|required|default|description|
|--|--|--|--|--|
|items|react node array|No|[]|The items you want to render|
|colCount|number|No|3|Column count|
|gap|number|No|10|The size(px) of the gap between elements|
|minWidth|number|No|300|The min width(px) of columns|
|className|string|No| \ |Custom class name of layout container|

## Browser compatibility
Refer to https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns#browser_compatibility
