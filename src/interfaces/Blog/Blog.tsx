import Button from "@/components/Button";
import { SubTitle } from "@/components/Text";
import blogData from "@/data/blogData";
import { ExternalLink } from "lucide-react";
import React from "react";
import * as S from "./blog.styled";

const Blog = () => {
  return (
    <S.Blog>
      <SubTitle>Blog</SubTitle>
      <div>
        {blogData.map((p) => (
          <S.BlogContainer>
            <S.BlogPost>
              <S.BlogTitle>{p.title}</S.BlogTitle>
              <S.BlogContent>{p.content}</S.BlogContent>
              <Button.Root style={{width: "fit-content"}}>
                <Button.Text>Ler mais</Button.Text>

                <Button.Icon>
                    <ExternalLink size={16} strokeWidth={3} />
                </Button.Icon>
              </Button.Root>
            </S.BlogPost>
            <S.BlogImage src={p.imageUrl} />
          </S.BlogContainer>
        ))}
      </div>
    </S.Blog>
  );
};

export default Blog;
