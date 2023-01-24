import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Routes,
  Route
} from "react-router-dom";

import { NavBar, ListSection } from '../../Components'

import logo from '../../Image/everestate.svg'
import '../../Style/index.css'

import listItems from '../../Constants/fakeList'

const AppWrapper = styled.div``

class App extends Component {
  render () {
    return (
      <AppWrapper>
        <NavBar logo={logo} list={listItems} />
        <ListSection list={listItems} />
      </AppWrapper>
    )
  }
}

export default App
