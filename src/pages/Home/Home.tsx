import React from "react";
import * as Styled from './Home.Styled';
import Navbar from "../../Navbar";
import Bubble from "../../img/bubble.png";
import Student from "../../img/etequiana.png";

export default function Home() {
    return (
        <>
            <Styled.Top>
                <Navbar />
                <Styled.TopTitle>Vestibulinho é na <Styled.Break/>ETEC AB</Styled.TopTitle>
                <Styled.TopContent>O vestibulinho é mais do que um teste;
                    é o primeiro passo na jornada da <Styled.Break> descoberta acadêmica. 
                    A <Styled.Etec>ETEC Adolpho Berezin </Styled.Etec> está esperando por você. </Styled.Break> 
                </Styled.TopContent>
                <img src={Student} style={{left: '800px', top: '180px', position: 'absolute'}}/>
                <img src={Bubble} style={{left: '700px', top: '110px', position: 'absolute'}}/>
                <Styled.Date style={{left: '735px', top: '150px'}}>Faça sua <br/> inscrição até <br/> 08/11</Styled.Date>
                <Styled.LargeIconCircle style={{left: '220px', top: '80px'}}/>
                <Styled.LargeIconCircle style={{left: '1080px', top: '530px'}}/>
                <Styled.SmallIconCircle style={{left: '188px', top: '504px'}}/>
                <Styled.SmallIconCircle style={{left: '1290px', top: '548px'}}/>
                <Styled.VerySmallIconCircle style={{left: '740px', top: '505px'}}/>
                <Styled.VerySmallIconCircle style={{left: '1188px', top: '379px'}}/>
                <Styled.IconCircle style={{left: '80px', top: '368px'}}/>
                <Styled.IconCircle style={{left: '1148px', top: '198px'}}/>
                <Styled.IconCircle style={{left: '130px', top: '40px'}}/>
                <Styled.TopInsc>Inscrever-se<div>icon</div></Styled.TopInsc>
                <Styled.TopEnd>acompanhe nosso blog</Styled.TopEnd>
            </Styled.Top>
            <Styled.Blog>
                Blog
                <Styled.BlogContainer>
                <Styled.BlogPost>
                    <Styled.BlogTitle>Como Memorizar</Styled.BlogTitle>
                    <Styled.BlogContent>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Styled.BlogContent>
                    <Styled.BlogButton>Ler mais</Styled.BlogButton>
                </Styled.BlogPost>
                <Styled.BlogImage></Styled.BlogImage>
                </Styled.BlogContainer>
                <Styled.BlogContainer>
                <Styled.BlogPost>
                    <Styled.BlogTitle>Como Memorizar</Styled.BlogTitle>
                    <Styled.BlogContent>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Styled.BlogContent>
                    <Styled.BlogButton>Ler mais</Styled.BlogButton>
                </Styled.BlogPost>
                <Styled.BlogImage></Styled.BlogImage>
                </Styled.BlogContainer>
                <Styled.BlogContainer>
                <Styled.BlogPost>
                    <Styled.BlogTitle>Como Memorizar</Styled.BlogTitle>
                    <Styled.BlogContent>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Styled.BlogContent>
                    <Styled.BlogButton>Ler mais</Styled.BlogButton>
                </Styled.BlogPost>
                <Styled.BlogImage></Styled.BlogImage>
                </Styled.BlogContainer>
            </Styled.Blog>
            <Styled.Crono>
                Cronograma 2023
                <Styled.CronoContainer>
                    <Styled.CronoContainerContainer>
                        <Styled.CronoCard>
                            
                            <Styled.CronoDate>19/09 a 29/09</Styled.CronoDate>
                        </Styled.CronoCard>
                    </Styled.CronoContainerContainer>
                    <Styled.CronoContainerContainer>teste</Styled.CronoContainerContainer>
                </Styled.CronoContainer>
            </Styled.Crono>
            <Styled.Acervo></Styled.Acervo>
            <Styled.Veteranos></Styled.Veteranos>
            <Styled.Footer></Styled.Footer>
            <Styled.FooterBottom></Styled.FooterBottom>
        </>
    );
}
