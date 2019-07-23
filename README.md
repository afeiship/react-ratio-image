# react-ratio-image
> Ratio image for react.

## install
```shell
npm install -S afeiship/react-ratio-image
```

## usage
1. import css
  ```scss
  @import "~react-ratio-image/style.scss";

  // customize your styles:
  $react-ratio-image-options: ()
  ```
2. import js
  ```js
  import ReactRatioImage from '../src/main';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    componentDidMount() {}
    render() {
      return (
        <div className="app-container">
          <div className="box">
            <h2>Ratio: 0.5</h2>
            <ReactRatioImage value={0.5}>
              <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
            </ReactRatioImage>

            <h2>Ratio: 1</h2>
            <ReactRatioImage value={1}>
              <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
            </ReactRatioImage>

            <h2>Ratio: 2</h2>
            <ReactRatioImage value={2}>
              <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
            </ReactRatioImage>
          </div>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-ratio-image/