import React from "react";
import * as Styled from './NavBar.Styled';

export default function Navbar() {
    return (
        <Styled.NavStyle>
            <nav>
                <Styled.NavList>
                    <li>
                        <Styled.StyledLink to='/'>Início</Styled.StyledLink>
                    </li>
                    <li>
                        <Styled.StyledLink to='/teste'>Blog</Styled.StyledLink>
                    </li>
                    <li>
                        <Styled.StyledLink to='/'>Cronograma</Styled.StyledLink>
                    </li>
                    <li>
                        <Styled.StyledLink to='/'>Prova</Styled.StyledLink>
                    </li>
                    <li>
                        <Styled.StyledLink to='/'>Cursos</Styled.StyledLink>
                    </li>
                    <li>
                        <Styled.StyledLink to='/'>Acervo</Styled.StyledLink>
                    </li>
                    <Styled.Insc>
                        <Styled.StyledLink to='/'>Inscrição</Styled.StyledLink>
                    </Styled.Insc>
                </Styled.NavList>
            </nav>
        </Styled.NavStyle>
    );
}