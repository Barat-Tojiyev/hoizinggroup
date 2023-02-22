
import React from 'react'
import CarouselCard from '../Carousel'
import HouseCard from '../HouseCard'




import { Container } from './style'

export const Home = () => {
  return (
    <Container>
      <CarouselCard/>
      <HouseCard/>
    </Container>
  )
}
export default Home