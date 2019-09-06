import React from 'react';
import ReactDOM from 'react-dom';
// 引入Ant design 样式
import 'antd/es/date-picker/style/css';
import './style/index.css';
import App from './blog';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
