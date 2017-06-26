import React, { Component } from 'react'
import { Carousel} from 'react-bootstrap'

import image1 from '../../../images/download-1.jpg'
import image2 from '../../../images/download.jpg'
import image3 from '../../../images/images.jpg'
import heart from '../../../images/heart-1616465__340.jpg'


export default class Slideshow extends Component{
  render(){
    return(
      <div className='Slideshow'>
        <Carousel className='Carousel'>
      <Carousel.Item>
        <img width={500} height={500} alt="500x500"  src={heart}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={500} height={500} alt="500x500" src={image2}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={500} height={500} alt="500x500" src={image3}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>

      </div>
    )
  }
}
