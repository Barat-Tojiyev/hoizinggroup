
import React from 'react'
import { Blur, Container, Content, Image } from './style'
import CategoryImg from '../../assets/img/CategoryHome.png'



export const CategoryCard = ({data={},onClick}) => {
const {name }=data


  return (
    <Container onClick={onClick}>
      <Blur/>
      <Content>{name ||'Category'}</Content>
      <Image src={  CategoryImg} alt='#' />
    </Container>
  )
}
export default CategoryCard
