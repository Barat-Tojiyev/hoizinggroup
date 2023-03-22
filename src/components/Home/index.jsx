
import React from 'react'
import Banner from '../Banner'
import CarouselCard from '../Carousel'
import CarouselCategory from '../CarouselCategory'
import Recent from '../Recent'
import Recommended from '../Recommended'
import WhyCard from '../Why'

import { Container } from './style'


export const Home = () => {
 
  return (
    <Container>
      <CarouselCard/>
      <Recommended/>
      <WhyCard/>      
      <CarouselCategory/>
      <Banner/>
      <Recent/>
     
   
    
    </Container>
  )
}
export default Home