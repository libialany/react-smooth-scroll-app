import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './MainApp/container'

ReactDOM.render(<BrowserRouter><React.StrictMode><App /></React.StrictMode></BrowserRouter>, document.getElementById('root'))