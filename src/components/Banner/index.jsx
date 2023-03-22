import {  Blur, Container,Image,Content } from './style'
import Home1 from '../../assets/img/house1.jpg'
import { Button } from '../Generic'





export const Banner = () => {

  return (
    <Container>     
      <Image src={Home1} alt="#" /> 
    <Blur/>
    <Content>
      <Content.Title>
      Vermont Farmhouse With Antique Jail Is
      the Week's Most Popular Home
      </Content.Title>  
      <Button width='180'>Read More</Button>   
    </Content>       
    </Container>
  )
}
export default Banner
