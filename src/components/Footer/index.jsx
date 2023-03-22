import { useNavigate } from 'react-router-dom'
import { Button } from '../Generic'
import {  Container,  Content,  HR,  Icon,  Wrapper } from './style'



export const Footer= () => {  

  const navigate=useNavigate()
     
  return (
    <Container>   
        <Content>
          <Wrapper>           
           <Wrapper.Title>Contact Us</Wrapper.Title>
           <Wrapper.Item>
           <Icon.Location/>  Ziadin shaharchasi, Samarqand, O'zbekiston. Paxtachi IT Center 
           </Wrapper.Item>
           <Wrapper.Item>
            <Icon.Phone/>
            +998 99 013 14 43 
           </Wrapper.Item>
           <Wrapper.Item>
           <Icon.Mail/>
            sherforclam45@gmail.com
           </Wrapper.Item>
           <Wrapper.Item>
            <Icon >
           <Icon.Facebook/>
            </Icon>
            <Icon >
           <Icon.Twitter/>
            </Icon>
            <Icon >
           <Icon.Instagram/>
            </Icon>
            <Icon >
           <Icon.Linkiden/>
            </Icon>
           </Wrapper.Item>
          </Wrapper>
          <Wrapper>           
           <Wrapper.Title>Discover</Wrapper.Title>
           <Wrapper.Item>
          Chicago 
           </Wrapper.Item>
           <Wrapper.Item>
           Los Angeles
           </Wrapper.Item>
           <Wrapper.Item>
          Miami
           </Wrapper.Item>
           <Wrapper.Item>
          New York
           </Wrapper.Item>
          </Wrapper>
          <Wrapper>           
           <Wrapper.Title>Lists by Category</Wrapper.Title>
           <Wrapper.Item>
           Apartments 
           </Wrapper.Item>
           <Wrapper.Item>
           Condos
           </Wrapper.Item>
           
           <Wrapper.Item>
           Houses
           </Wrapper.Item>
           <Wrapper.Item>
           Offices
           </Wrapper.Item>
           <Wrapper.Item>
           Retail
           </Wrapper.Item>
           <Wrapper.Item>
           Villas
           </Wrapper.Item>
           
          </Wrapper>
          <Wrapper>           
           <Wrapper.Title>Lists by Category</Wrapper.Title>
           <Wrapper.Item>
           About Us 
           </Wrapper.Item>
           <Wrapper.Item>
           Terms & Conditions
           </Wrapper.Item>
           <Wrapper.Item>
           Support Center 
           </Wrapper.Item>
           <Wrapper.Item>
           Contact Us
           </Wrapper.Item>
          </Wrapper>
          </Content>
          <HR />
        <Content>
          <Wrapper.Title onClick={() => navigate('/home')}>
            <Icon.Logo/> Houzing</Wrapper.Title>        
            <Wrapper.Item>
            Copyright © 2021 CreativeLayers. All Right Reserved.
            <Button ml='50px' width='45' height='45'><Icon.Top/></Button>
            </Wrapper.Item>
           
           
        </Content>
    </Container>
  )
}
export default Footer

// import React, { Component } from "react";
// 

// export default class MultipleItems extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 3
//     };
//     return (
//       <div>
//         <h2> Multiple items </h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//           <div>
//             <h3>9</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
