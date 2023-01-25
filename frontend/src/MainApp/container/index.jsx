import React, { Component } from 'react'
import {
  Routes,
  Route
} from "react-router-dom";
import '../../Style/index.css';
import LoginForm from '../../Components/Forms/LoginForm';
import RegisterForm from '../../Components/Forms/RegisterForm';
import Page from '../../Components/Page';
class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path='/login' element={<LoginForm/>}></Route>
          <Route path='/register' element={<RegisterForm/>}></Route>
          <Route path='/page' element={<Page/>}></Route>
        </Routes>
      </div>
    )
  }
}

export default App
