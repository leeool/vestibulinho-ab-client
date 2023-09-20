import styled from "styled-components";

export const Container = styled.div`
    color: #fff;
    display: grid;
    grid-template-columns: 0.7fr 1fr;
    padding: 1rem 0;
    height: 30rem;
    align-content: center;
    gap: 3rem;
`
    
export const Background = styled.div`
    background-color: #CF2E2E;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    left: 0;
`

export const Col1 = styled.div`
display: grid;
gap: 1rem;
align-content: center;
`

export const Col2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    justify-items: center;
`

export const Image = styled.img`
    width: 100%;
    height: 10rem;
    object-fit: cover;
    aspect-ratio: 1 / 4;
    border-radius: 8px;
    align-self: end;
`