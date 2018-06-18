import React from 'react'
import ReactDOM from 'react-dom'
//
import App from './app/App'
import './styles/styles.scss'

ReactDOM.render(<App></App>, document.getElementById('app'));

if (module.hot) module.hot.accept();