import React from 'react'
import * as S from "./button.styled"

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    props?: React.HTMLAttributes<HTMLButtonElement>
}

const Button = ({children, ...props}: Props) => {
  return (
    <S.Container {...props}>
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