import React from 'react'
import { Container } from './style'



export const Button = ({children,type,height,onClick,width,ml,mr}) => {
  return (
    <Container onClick={onClick} ml={ml} mr={mr} width={width} type={type} height={height}>{children || 'Generic Button'}</Container >
  )
}
export default Button