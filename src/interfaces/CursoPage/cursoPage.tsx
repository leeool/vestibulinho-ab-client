import React, { useState } from "react";
import * as S from "./cursoPage.styled";
import { Calendar, Clock } from "lucide-react";
import cursoData from "@/data/cursoData";

export default function CursoPage() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <S.Container>
      <S.Top>
        <S.TopContainer>
          <S.CursoImage src="https://img.freepik.com/fotos-premium/homem-de-tiro-no-escuro-explorando-a-natureza_23-2149884252.jpg?w=740" />
          <S.TopContentContainer>
            <S.TopTitle>Informática</S.TopTitle>
            <S.ContentContainer>
              <S.TopContent>
                <Clock />Noite
              </S.TopContent>
              <S.TopContent>
                <Calendar />3 semestres
              </S.TopContent>
            </S.ContentContainer>
          </S.TopContentContainer>
        </S.TopContainer>
      </S.Top>
      <S.Main>
        <S.Title>Sobre o curso</S.Title>
        <S.Content>O curso de Técnico em Informática é uma opção popular para estudantes que desejam adquirir habilidades práticas relacionadas à informática. Na ETEC, esse curso é ministrado com um foco prático e abrange uma variedade de tópicos relacionados a criação de sites, banco de dados, a manutenção de computadores, redes e muito mais.</S.Content>
        <S.Title>Grade curricular</S.Title>
        <S.TabContainer>
          <S.TabHeader>
            <S.TabOption active={activeTab === 1} onClick={() => setActiveTab(1)}>
              1° semestre
            </S.TabOption>
            <S.TabOption active={activeTab === 2} onClick={() => setActiveTab(2)}>
              2° semestre
            </S.TabOption>
            <S.TabOption active={activeTab === 3} onClick={() => setActiveTab(3)}>
              3° semestre
            </S.TabOption>
          </S.TabHeader>
          <S.TabContent>
            {activeTab === 1 && <div>Conteúdo da Opção 1</div>}
            {activeTab === 2 && <div>Conteúdo da Opção 2</div>}
            {activeTab === 3 && <div>Conteúdo da Opção 3</div>}
          </S.TabContent>
        </S.TabContainer>

      </S.Main>
    </S.Container>
  );
}
