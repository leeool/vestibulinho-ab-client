import React from 'react'
import { Background, Container } from './home.styled'
import Typist from 'react-typist'
import TypeWriter from '@/components/TypeWriter/TypeWriter'

const Home = () => {

  return (
    <Container>
      <Background />

      <TypeWriter />
    </Container>
  )
}

export default Home 
