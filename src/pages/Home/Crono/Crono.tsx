import { SubTitle } from "@/components/Text";
import React from "react";
import * as S from "./crono.styled";

const Crono = () => {
  return (
    <S.Crono>
      <SubTitle>Cronograma 2023</SubTitle>
      <S.CronoContainer>
        <S.Content>
          <S.CronoCard>
            <S.CronoDate>19/09 a 29/09</S.CronoDate>
          </S.CronoCard>
          <S.Description>
            <S.DescText>
              Solicitações para redução da taxa do Vestibulinho
            </S.DescText>
          </S.Description>
        </S.Content>
      </S.CronoContainer>
    </S.Crono>
  );
};

export default Crono;
