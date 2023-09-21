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
            <S.Item href="mailto: e107acad@cps.sp.gov.br">emailtec@email.com</S.Item>
            <S.Item>(13) 3448-3800</S.Item>
          </S.Content>
          <S.Content>
            <S.Title>Windowally</S.Title>
            <S.Item href="mailto: windowally.contact@gmail.com">windowally.contact@gmail.com</S.Item>
            <S.Item href="https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61551492807955%26mibextid%3DZbWKwL&e=AT26nZhZiAIrSI445Sd1E-rVNPB8BFCPxRjdHb36wxxAcl8_p0kFkk7Qtin0PlONAs-5g3ZO23SuKWn1gzaje9i1cNRF74nRfzOubFuAy3Rf37cg"
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
