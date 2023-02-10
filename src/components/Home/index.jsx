
import React from 'react'
import {Button, Input} from '../Generic'



import { Container } from './style'

export const Home = () => {
  return (
    <Container>Home
     <Button>Sending</Button>
     <Input placeholder='Country'/>
    </Container>
  )
}
export default Home