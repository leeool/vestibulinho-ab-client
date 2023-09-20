import React from 'react'
import * as S from "./button.styled"

interface Props {
    children: React.ReactNode
}

const Button = ({children}: Props) => {
  return (
    <S.Container>
        {children}
    </S.Container>
  )
}

export const ButtonText = S.ButtonText

interface IconProps {
    children: React.ReactNode
}

export const Icon = ({children}: IconProps) => {

    return (
        <S.ContainerIcon>
            {children}
        </S.ContainerIcon>
    )
}

export default Button