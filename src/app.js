import React, { Component } from 'react'
import { render } from 'react-dom'
import '../styles/main.css'

import Menu from './pages/components/menu'
import Slideshow from './pages/components/carousel'

class App extends Component{
  render(){
    return(
<div>
  <Menu />
  <h1>Carousel</h1>
  <Slideshow />

</div>
          )
  }
}

render(<App />, document.getElementById('app'))