import React from "react";
import * as S from "./footer.styled";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <S.Footer>
        <S.Container>
          <S.Content>
            <S.Title>Sociais</S.Title>
            <S.Item>Projeto</S.Item>
            <S.Item>ETEC Adolpho Berezin</S.Item>
            <S.Item>CPS</S.Item>
          </S.Content>
          <S.Content>
            <S.Title>Contato da ETEC</S.Title>
            <S.Item href="mailto: e107acad@cps.sp.gov.br">e107acad@cps.sp.gov.br</S.Item>
            <S.Item>(13) 3448-3800</S.Item>
          </S.Content>
          <S.Content>
            <S.Title>Windowally</S.Title>
            <S.Item href="mailto: windowally.contact@gmail.com">windowally.contact@gmail.com</S.Item>
            <S.Item href="https://www.facebook.com/profile.php?id=61551492807955&mibextid=ZbWKwL"
            >Facebook</S.Item>
            <S.Item href="https://www.instagram.com/windowally/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">Instagram</S.Item>
          </S.Content>
        </S.Container>
      </S.Footer>
      <S.FooterBottom>
        <S.Copy>
          © {currentYear} Desenvolvido por Equipe Windowally. Todos os direitos reservados.
        </S.Copy>
      </S.FooterBottom>
    </>
  );
};

export default Footer;
