import Button from "@/components/Button";
import { SubTitle } from "@/components/Text";
import blogData from "@/data/blogData";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
import * as S from "./blog.styled";

const Blog = () => {
  return (
    <S.Blog>
      <SubTitle color="#fff">Blog</SubTitle>
      <div>
        {blogData.map((p) => (
          <S.BlogContainer key={p.id}>
            <S.BlogPost>
              <Link to={`/blog/${p.id}`}>
                <S.BlogTitle>{p.title}</S.BlogTitle>
              </Link>
              <S.BlogContent>{p.content}</S.BlogContent>
              <Button.Root style={{ width: "fit-content" }}>
                <Link to={`/blog/${p.id}`}>
                  <Button.Text>Ler mais</Button.Text>
                </Link>
                <Button.Icon>
                  <ExternalLink size={16} strokeWidth={3} />
                </Button.Icon>
              </Button.Root>
            </S.BlogPost>
            <Link to={`/blog/${p.id}`}>
              <S.BlogImage src={p.imageUrl} />
            </Link>
          </S.BlogContainer>
        ))}
      </div>
    </S.Blog>
  );
};

export default Blog;
