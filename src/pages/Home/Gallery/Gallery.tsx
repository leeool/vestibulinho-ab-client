import Button from "@/components/Button";
import { SubTitle } from "@/components/Text";
import { Search } from "lucide-react";
import React from "react";
import * as S from "./gallery.styled";

const Gallery = () => {
  return (
    <S.Container>
      <S.Background />
      <S.Col1>
        <SubTitle color="#fff">Dê uma olhada em nossa escola</SubTitle>
        <Button.Root>
          <Button.Text>Explorar ETEC Adolpho Berezin</Button.Text>
          <Button.Icon>
            <Search />
          </Button.Icon>
        </Button.Root>
      </S.Col1>

      <S.Col2>
        <S.Image src="https://img.freepik.com/fotos-gratis/astronauta-de-tiro-completo-na-colagem-da-natureza_23-2150385904.jpg?w=826&t=st=1695245793~exp=1695246393~hmac=5b6869dcaa4aab999b72c650c3a40631c0302283ac93f86fa03e2bfd982939bd"
        />
        <S.Image src="https://img.freepik.com/fotos-gratis/astronauta-de-tiro-completo-na-colagem-da-natureza_23-2150385904.jpg?w=826&t=st=1695245793~exp=1695246393~hmac=5b6869dcaa4aab999b72c650c3a40631c0302283ac93f86fa03e2bfd982939bd"
        style={{height: "8rem", width: "80%"}}
        />
        <S.Image src="https://img.freepik.com/fotos-gratis/astronauta-de-tiro-completo-na-colagem-da-natureza_23-2150385904.jpg?w=826&t=st=1695245793~exp=1695246393~hmac=5b6869dcaa4aab999b72c650c3a40631c0302283ac93f86fa03e2bfd982939bd"/>
        <S.Image src="https://img.freepik.com/fotos-gratis/astronauta-de-tiro-completo-na-colagem-da-natureza_23-2150385904.jpg?w=826&t=st=1695245793~exp=1695246393~hmac=5b6869dcaa4aab999b72c650c3a40631c0302283ac93f86fa03e2bfd982939bd"/>
      </S.Col2>
    </S.Container>
  );
};

export default Gallery;
