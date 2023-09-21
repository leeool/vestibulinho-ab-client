import colors from "@/styles/theme"
import styled from "styled-components"

export const Container = styled.div`
display: grid;
gap: 1rem;
max-width: 44rem;
margin: 0 auto;
`

export const Header = styled.header`
display: grid;
width: 100%;
border-radius: 8px;
overflow: hidden;
`

export const Image = styled.img`
grid-area: 1 / -1;
width: 100%;
`

export const Info = styled.div`
grid-area: 1 / -1;
align-self: end;
justify-self: start;
margin: 1rem;
background-color: ${colors.red};
padding: 1rem;
border-radius: 8px;
  display: grid;
`

export const Title = styled.h1`
color: #fff;
font-size: 2.125rem;
`

export const Description = styled.div`
grid-column: 1 / -1;
display: flex;
gap: 1rem;
`

export const DescItem = styled.span`
display: flex;
gap: 0.25rem;
align-items: center;
`

export const DescText = styled.p`
  color: #fff;
  font-size: 1rem;
`

export const Share = styled.div``

export const Content = styled.div`
  display: grid;
  gap: 1rem;
`

export const Paragraph = styled.span`
background-color: #eee;
position: relative;
  z-index: 1;
padding: 1rem;
  border-radius: 4px;

&[data-typing="true"] {
  span {
    position: relative;

  }
  span::after {
    content: "";
    background-color: ${colors.red};
    width: 2.5rem;;
    height: 100%;
    position: absolute;
    right: 0rem;
    border-radius: 2px;
    z-index: -1;
    opacity: 0.5;
  }
}
`
