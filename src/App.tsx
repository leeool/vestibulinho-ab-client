import React from 'react'
import { Container, MainContainer } from '@/styles/global'
import { Outlet } from 'react-router-dom'
import Header from './interfaces/Header'
import Footer from './interfaces/Footer'


function App() {
  return (
    <MainContainer>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </MainContainer>
  )
}

export default App
