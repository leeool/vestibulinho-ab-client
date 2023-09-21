import Button from "@/components/Button";
import { SubTitle } from "@/components/Text";
import blogData from "@/data/blogData";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
import * as S from "./blogList.styled";
import BlogPost from "../BlogPost";

const BlogList = () => {
  return (
    <S.List>
      {blogData.map((p) => (
        <BlogPost p={p} />
      ))}
    </S.List>
  );
};

export default BlogList;
