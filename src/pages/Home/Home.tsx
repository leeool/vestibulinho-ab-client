import React from "react";
import * as S from './Home.Styled';
import Introduction from "./Introduction/Introduction";
import Blog from "@/interfaces/Blog";
import Crono from "./Crono";
import Gallery from "./Gallery";

export default function Home() {
    return (
        <S.Container>
            <Introduction />
            <Blog />
            <Crono />
            <Gallery />
            
           {/* <S.Crono>
                Cronograma 2023
                <S.CronoContainer>
                    <S.CronoContainerContainer>
                        <S.CronoCard>
                            <S.CronoDate>19/09 a 29/09</S.CronoDate>
                        </S.CronoCard>
                    </S.CronoContainerContainer>
                    <S.CronoContainerContainer>
                        <S.CronoCard>
                            <S.CronoDate>19/09 a 29/09</S.CronoDate>
                        </S.CronoCard>
                    </S.CronoContainerContainer>
                </S.CronoContainer>
            </S.Crono>
            <S.Acervo></S.Acervo>
            <S.Veteranos></S.Veteranos> */}
            
        </S.Container>
    );
}
