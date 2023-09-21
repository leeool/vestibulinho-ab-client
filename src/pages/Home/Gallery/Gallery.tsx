import Button from "@/components/Button";
import { SubTitle } from "@/components/Text";
import { Search } from "lucide-react";
import React from "react";
import * as S from "./gallery.styled";
import eyeImage from "@asset/emoji-eyes.png"
import { Link } from "react-router-dom"

const Gallery = () => {
  const array = new Array(4).fill(true);
  return (
    <S.Container>
      <S.Background />
      <S.Col1>
        <S.Eye src={eyeImage} />
        <SubTitle color="#fff" size={4.5}>Dê uma olhada em nossa escola</SubTitle>
        <Link to={"/galeria"}>
          <Button.Root>
            <Button.Text>Explorar ETEC Adolpho Berezin</Button.Text>
            <Button.Icon>
              <Search />
            </Button.Icon>
          </Button.Root>
        </Link>
      </S.Col1>

      <S.Col2>
        {array.map((_, index) => (
          <S.Image
            src={`https://firebasestorage.googleapis.com/v0/b/vestibulinho-47053.appspot.com/o/${index + 1}.jpg?alt=media`}
            data-img={index + 1}
          />
        ))}
      </S.Col2>
    </S.Container>
  );
};

export default Gallery;
