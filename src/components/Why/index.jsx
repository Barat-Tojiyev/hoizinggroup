import {  Container, Content, Wrapper,Icon } from './style'



export const WhyCard= () => {  
     
  return (
    <Container>
      <div className="title">Why Choose Us?</div>
      <div className="info">Nulla quis curabitur velit volutpat 
      auctor bibendum consectetur sit.</div>
        <Content>
          <Wrapper>
            <Icon.Message></Icon.Message>
            <div className="subTitle">Trusted By Thousands</div>
            <div className="info">
            With over 1 million+ homes for sale available on the website,
            Trulia can match you with a house you will want to call home.
            </div>
          </Wrapper>
          <Wrapper>
            <Icon.What></Icon.What>
            <div className="subTitle">Trusted By Thousands</div>
            <div className="info">
            With over 1 million+ homes for sale available on the website,
            Trulia can match you with a house you will want to call home.
            </div>
          </Wrapper>
          <Wrapper>
            <Icon.Phone></Icon.Phone>
            <div className="subTitle">Trusted By Thousands</div>
            <div className="info">
            With over 1 million+ homes for sale available on the website,
            Trulia can match you with a house you will want to call home.
            </div>
          </Wrapper>
          <Wrapper>
            <Icon.Location></Icon.Location>
            <div className="subTitle">Trusted By Thousands</div>
            <div className="info">
            With over 1 million+ homes for sale available on the website,
            Trulia can match you with a house you will want to call home.
            </div>
          </Wrapper>
    
    
        </Content>
    </Container>
  )
}
export default WhyCard

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
