import React from "react";
import * as S from './header.styled';

const Header = () => {
  return (
    <S.Container>
      <S.Nav>
        <S.Item>
          <S.StyledLink to='/' className={({ isActive }) => isActive ? "active" : ""}>Início</S.StyledLink>
        </S.Item>
        <S.Item>
          <S.StyledLink className={({ isActive }) => isActive ? "active" : ""} to='/blog'>Blog</S.StyledLink>
        </S.Item>
        <S.Item>
          <S.StyledLink className={({ isActive }) => isActive ? "active" : ""} to='/cronograma'>Cronograma</S.StyledLink>
        </S.Item>
        <S.Item>
          <S.StyledLink className={({ isActive }) => isActive ? "active" : ""} to='/provas'>Provas</S.StyledLink>
        </S.Item>
        <S.Item>
          <S.StyledLink className={({ isActive }) => isActive ? "active" : ""} to='/cursos'>Cursos</S.StyledLink>
        </S.Item>
        <S.Item>
          <S.StyledLink className={({ isActive }) => isActive ? "active" : ""} to='/acervo'>Acervo</S.StyledLink>
        </S.Item>
        <S.Item data-link="true">
          <S.StyledLink className={({ isActive }) => isActive ? "active" : ""} to='/inscrição' data-link="true" >Inscrição</S.StyledLink>
        </S.Item>
      </S.Nav>
    </S.Container>
  );
}

export default Header
