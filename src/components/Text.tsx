import styled from "styled-components"

export const Title = styled.h1`
    font-size: 4rem;
`
    
export const SubTitle = styled.h2<{color?: string}>`
    font-size: 3rem;
    color: ${({color}) => color || "#212121"};
    font-weight: 650;
`
