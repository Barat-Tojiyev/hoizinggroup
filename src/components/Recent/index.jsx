import React, { useEffect,useState } from 'react'
import {  Container, Content } from './style'
import HouseCard from '../HouseCard'
import Slider from "react-slick";

const { REACT_APP_BASE_URL:url}=process.env;

export const Recent= () => {
   
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
      <div className="title">Recent Properties for Rent</div>
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
export default Recent
