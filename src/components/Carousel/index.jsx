import { Carousel } from 'antd'
import React, { useRef } from 'react'
import { Arrow, Blur, Container,Image,Content } from './style'
import Home1 from '../../assets/img/house1.jpg'
import Home2 from '../../assets/img/image2.jpg'




export const CarouselCard = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };

      const corusel=useRef()
      const onMove=({target:{dataset:{name}}})=>{
       if(name==='right') corusel.current.next()
       if(name==='left') corusel.current.prev()
      }
  return (
    <Container>
        <Carousel ref={corusel}  afterChange={onChange}>
      <Image src={Home1} alt="#" />
      <Image src={Home2} alt="#" />
    </Carousel>
    <Blur/>
    <Content>
      <Content.Title>
      Skyper Pool Partment
      </Content.Title>
    <Content.SubTitle>112 Glenwood Ave Hyde Park, Boston, MA</Content.SubTitle>  
    <Content.Title>$5,250 / mo</Content.Title>   
    </Content>
        <Arrow onClick={onMove} data-name='left' left/>
        <Arrow onClick={onMove} data-name='right' />
    </Container>
  )
}
export default CarouselCard
