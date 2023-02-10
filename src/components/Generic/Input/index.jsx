import React from 'react'
import { Container } from './style'



export const Input = ({ children, type, height, onChange, placeholder,name,value,defaultValue }) => {
  return (
    <Container 
    placeholder={placeholder} 
    onChange={onChange} 
    name={name}
    defaultValue={defaultValue}
    value={value}
    type={type} 
    height={height}>{children}</Container >
  )
}
export default Input