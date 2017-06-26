import React, { Component } from 'react'
import { Carousel} from 'react-bootstrap'

import image1 from '../../../images/download-1.jpg'
import image2 from '../../../images/download.jpg'
import image3 from '../../../images/images.jpg'
import heart from '../../../images/heart-1616465__340.jpg'


export default class Slideshow extends Component{
  render(){
    return(
      <div className=' Slideshow'>
      <img src={heart} />
      </div>
    )
  }
}
