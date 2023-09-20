import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

`

export const MainContainer = styled.div`
max-width: 75rem;
margin: 0 auto;
padding: 1rem;
min-height: 100vh;
display: flex;
flex-direction: column;
`
