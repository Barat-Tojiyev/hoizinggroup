import { Dropdown } from 'antd'
import React, { useRef, useState,useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import uzeReplase from '../../hooks/useReplase'
import useSearch from '../../hooks/useSearch'
import { Button, Input } from '../Generic'
import { Container, Icon,Section,Wrapper,SelectAnt } from './style'

const { REACT_APP_BASE_URL:url}=process.env;

export const Filter = () => {

  let navigate=useNavigate()
  let location=useLocation()
  let params=useSearch()
  // console.log(params.get('country'),'params');

  const countryRef=useRef()
  const regionRef=useRef()
  const cityRef=useRef()
  const zipCodeRef=useRef()
  const roomsRef=useRef()
  const sizeRef=useRef()
  // const sortRef=useRef()
  const minPriceRef=useRef()
  const maxPriceRef=useRef()

  const [data,setData]=useState([])
  useEffect(()=>{
    fetch(`${url}/categories/list`)
    .then((res)=>res.json())
    .then((res)=>{
      setData(res?.data || [])
    })
  },)

  const[open,setOpen]=useState(false)
  const onOpenChange=()=>{
    setOpen(!open)
  }
  let onSearch=({target:{value,name}})=>{
    navigate(`${location.pathname}${uzeReplase(name,value)}`)
  }
 
  // console.log(useReplase('address','Tashkent'));
  let onChangeCategory=(category_id)=>{
    console.log(category_id);
    navigate(`/properties${uzeReplase('category_id',category_id)}`)
    
  }
const items = [
  {
    key: '1',
    label: (
      <Wrapper>
     <h1 className='subTitle'>Address</h1>
 <Section>
   <Input defaultValue={params.get('country')} onChange={onSearch} name='country' ref={countryRef} placeholder='Country'/>
   <Input defaultValue={params.get('region')} onChange={onSearch} name='region' ref={regionRef} placeholder='Region'/>
   <Input defaultValue={params.get('city')} onChange={onSearch} name='city' ref={cityRef} placeholder='City'/>
   <Input defaultValue={params.get('zip_code')} onChange={onSearch} name='zip_code' ref={zipCodeRef} placeholder='Zip Code'/>
 </Section>
 <h1 className='subTitle'>Apartment info</h1>
 <Section>
   <Input ref={roomsRef} placeholder='Rooms'/>
   <Input ref={sizeRef} placeholder='Size'/>
  {/* <Input ref={sortRef} placeholder='Sort'/> */}
  <SelectAnt onChange={onChangeCategory} defaultValue='Category' >
    {
      data.map((value)=>{
        return(
       <SelectAnt.Option key={value.id} value={value?.id}>{value?.name}</SelectAnt.Option>
        )
      })
    }
    
  
  </SelectAnt>
  
  </Section>
 <h1 className='subTitle'>Price</h1>
 <Section>
 <Input ref={minPriceRef} placeholder='Min price'/>
   <Input ref={maxPriceRef} placeholder='Max price'/>
 </Section>
 
   </Wrapper>
    ),
  }
];
  return (
    <Container>
 
      <Input Icons={ <Icon.Home/>} icon placeholder='Enter an address, neighborhood, city, or ZIP code'/>   
      <Dropdown onOpenChange={onOpenChange} open={open} menu={{items}} trigger='click'  placement="bottomRight" arrow>
      <div>
         <Button  type='light'> <Icon.Setting/> Advanced</Button>   
      </div>
    </Dropdown> 
   
      
      <Button><Icon.Search/> Search</Button> 
    </Container>
  )
}
export default Filter