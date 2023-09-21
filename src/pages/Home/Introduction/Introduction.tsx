import React from "react";
import * as S from "./introduction.styled";
import Student from "@asset/etequiana.png";
import Bubble from "@asset/bubble.png";
import { ChevronsDown, ChevronRightSquare } from "lucide-react";
import Button from "@/components/Button";

const Introduction = () => {
  return (
    <S.Container>
      <S.Background />
      <S.Left>
        <S.Title>Vestibulinho é na ETEC AB</S.Title>
        <S.Description>
          O vestibulinho é mais do que um teste; é o primeiro passo na jornada da{" "}
          descoberta acadêmica. A <span>ETEC Adolpho Berezin </span> está
          esperando por você.
        </S.Description>

        <Button.Root radius={8}>
          <Button.Text size={2}>Inscreva-se</Button.Text>
          <Button.Icon>
            <ChevronRightSquare strokeWidth={3} />
          </Button.Icon>
        </Button.Root>
      </S.Left>

      <span>
        <S.Student>
          <img
            src={Student}
          />
          <S.BubbleContainer>
            <S.Bubble>
              <img
                src={Bubble}
              />
              <S.BubbleText>
                Faça sua inscrição até 08/11
              </S.BubbleText>
            </S.Bubble>
          </S.BubbleContainer>
        </S.Student>
      </span>
      <S.Blog>
        <span>
          acompanhe nosso blog
        </span>
        <ChevronsDown />
      </S.Blog>
    </S.Container>
  );
};

export default Introduction;
