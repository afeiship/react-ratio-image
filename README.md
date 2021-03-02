# react-ratio-image
> Ratio image for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ratio-image
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | number | false    | 1       | The ratio value.                      |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ratio-image/dist/style.css";

  // or use sass
  @import "~@jswork/react-ratio-image/dist/style.scss";

  // customize your styles:
  $react-ratio-image-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactRatioImage from '@jswork/react-ratio-image';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-ratio-image">
          <div className="is-box-item">
            <h2>Ratio: 0.5</h2>
            <ReactRatioImage value={0.5}>
              <img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg" />
            </ReactRatioImage>

            <h2>Ratio: 1</h2>
            <ReactRatioImage value={1}>
              <img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg" />
            </ReactRatioImage>

            <h2>Ratio: 2</h2>
            <ReactRatioImage value={2}>
              <img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg" />
            </ReactRatioImage>
          </div>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-ratio-image/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ratio-image/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ratio-image
[version-url]: https://npmjs.org/package/@jswork/react-ratio-image

[license-image]: https://img.shields.io/npm/l/@jswork/react-ratio-image
[license-url]: https://github.com/afeiship/react-ratio-image/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ratio-image
[size-url]: https://github.com/afeiship/react-ratio-image/blob/master/dist/react-ratio-image.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ratio-image
[download-url]: https://www.npmjs.com/package/@jswork/react-ratio-image
