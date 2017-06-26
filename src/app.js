import React, { Component } from 'react'
import { render } from 'react-dom'
import '../styles/main.css'

import Menu from './pages/components/menu'
import Slideshow from './pages/components/carousel'

class App extends Component{
  render(){
    return(
<div className='container'>

<div className='row'>
    <Menu />
  <h1 className='text-center'>Carousel</h1>
  <Slideshow />

</div>
</div>
          )
  }
}

render(<App />, document.getElementById('app'))
