import React, { useEffect,useState } from 'react'
import {  Container, Content } from './style'
import HouseCard from '../HouseCard'
import Slider from "react-slick";

const { REACT_APP_BASE_URL:url}=process.env;

export const Recommended= () => {
   
  const [data,setData]=useState([])
  // useEffect(()=>{
  //   fetch(`${url}/categories/list`)
  //   .then((res)=>res.json())
  //   .then((res)=>{
  //     setData(res?.data || [])
  //   })
  // },)
  useEffect(()=>{
    fetch(`${url}/houses/list`)
    .then((res)=>res.json())
    .then((res)=>{
      setData(res?.data || [])
    })
  },[])
  
  const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3
       };
  
     
  return (
    <Container>
      <div className="title">Recommended</div>
      <div className="info">Nulla quis curabitur velit
       volutpat auctor bibendum consectetur sit.</div>
        <Content>
    <Slider {...settings}>
    {data.map((value)=>{
        return  <HouseCard key={value.id} data={value}/>
      })}
    </Slider>
        </Content>
    </Container>
  )
}
export default Recommended

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
