import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactRatioImage from '../src/main';
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
