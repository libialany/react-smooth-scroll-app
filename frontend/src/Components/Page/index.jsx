import React, { Component } from 'react'
import styled from 'styled-components'
import NavBar from '../NavBar'
import ListSection  from '../Section/ListSection'

import logo from '../../Image/everestate.svg'
import '../../Style/index.css'

import listItems from '../../Constants/fakeList'

const AppWrapper = styled.div``
class Page extends Component {

  render () {
    return (
        <AppWrapper>
          <NavBar logo={logo} list={listItems} />
          <ListSection list={listItems} />
        </AppWrapper>
    )
  }
}

export default Page
