import colors from "@/styles/theme"
import styled from "styled-components"

interface ContainerProps {
  radius?: number
}

export const Container = styled.button<ContainerProps>`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.25rem 1rem;
    border-radius: ${({ radius }) => (radius || 4) + "px"};
    width: 100%;
    justify-content: space-between;
    border: none;
    cursor: pointer;
    background-color: #fff;
    border: solid 1px ${colors.red};

    &:hover {
        background-color: #f2f2f2
    }

    &:active {
        background-color: #e5e5e5
    }
`

export const ContainerIcon = styled.span`
* {
    color: #CF2e2e;
}

svg {
    width: 100%;
    height: 100%;
}

display: flex;
justify-content: center;
align-items: center;
`

export const ButtonText = styled.p<{ size?: number }>`
    font-size: ${({ size }) => (size || 1) + "rem"};
    color: #CF2e2e;
    font-weight: 500
`
