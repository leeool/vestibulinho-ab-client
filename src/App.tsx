import React from 'react'
import { MainContainer } from '@/styles/global'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  )
}

export default App
