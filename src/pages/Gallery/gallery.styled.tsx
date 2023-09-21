import colors from "@/styles/theme"
import styled from "styled-components"

export const Container = styled.div``

export const ImageContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 1rem;
`

export const Image = styled.img`
max-width: 100%;
border-radius: 8px;
transition: all 0.2s ease-in-out ;
cursor: pointer;

&:hover {
  box-shadow: -5px 5px ${colors.red};
}

`

export const ImageLoading = styled.div`
  border-radius: 8px;
  background-color: ${colors.red};

`
