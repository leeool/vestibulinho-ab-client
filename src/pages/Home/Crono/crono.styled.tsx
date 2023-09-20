import styled from "styled-components"

export const Crono = styled.div`
    background-color: #fff;
    color: #CF2E2E;
    display: grid;
    gap: 2rem;
`;

export const CronoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const Content = styled.div`
    display: flex;
    border-radius: 8px;
    overflow: hidden;
    background-color: #e5e5e5e5;
`;

export const CronoCard = styled.div`
    font-size: 18px;
    border-radius: 8px;
`;

export const CronoDate = styled.div`
    background-color: #CF2E2E;
    padding: 1rem;
    color: #fff;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    max-width: 10ch;
    font-size: 1.25rem;
    text-align: center;
`;

export const Description = styled.div`
    background-color: #eee;
    padding: 1rem;
    display: flex;
    align-items: center;
`

export const DescText = styled.p`
    color: #212121;
`