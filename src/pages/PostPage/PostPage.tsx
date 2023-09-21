import blogData from '@/data/blogData'
import React from 'react'
import { useParams } from 'react-router-dom'
import * as S from "./postPage.styled"
import { BookOpen, Calendar, Share } from 'lucide-react'
import Button from '@/components/Button'
import colors from '@/styles/theme'
import { TypeAnimation } from "react-type-animation"
import { motion } from 'framer-motion'

const PostPage = () => {
  const { id } = useParams()
  const [post, setPost] = React.useState(blogData.find(p => p.id === id))
  const [paragraphs, setParagraphs] = React.useState<string[]>([])
  const [index, setIndex] = React.useState(0)
  const refs = React.useRef<HTMLSpanElement[]>([])

  const texts = [
    "paragrafo teste",
    "teste de paragrafo",
    "outro teste!"
  ]

  React.useEffect(() => {
    if (index === texts.length) return
    setParagraphs(prev => [...prev, texts[index]])
  }, [index, refs.current])


  const handleNext = () => {
    setIndex(prev => prev + 1)

    refs.current[index].setAttribute("data-typing", "false")
  }

  return (
    <S.Container>
      <S.Header>
        <S.Image src={post?.imageUrl} />
        <S.Info>
          <S.Title>
            {post?.title}
          </S.Title>
          <S.Description>
            <S.DescItem>
              <BookOpen color='#fff' size={16} />
              <S.DescText>
                Tempo de leitura: 12 minutos
              </S.DescText>
            </S.DescItem>

            <S.DescItem>
              <Calendar color='#fff' size={16} />
              <S.DescText>
                19 de setembro de 2023
              </S.DescText>
            </S.DescItem>
          </S.Description>
        </S.Info>
      </S.Header>

      <S.Share>
        <Button.Root style={{ width: "fit-content" }}>
          <Button.Text>Compartilhar</Button.Text>
          <Button.Icon>
            <Share color={colors.red} />
          </Button.Icon>
        </Button.Root>
      </S.Share>

      <S.Content>
        {paragraphs.map((p, index) => (
          <S.Paragraph
            as={motion.span}
            initial={{ x: "-5%" }}
            animate={{ x: 0 }}
            data-typing="true"
            transition={{ type: "spring" }}
            ref={(el) => refs.current[index] = el!}
          >
            <TypeAnimation
              sequence={[p, 400, handleNext]}
              repeat={undefined}
              key={p.length}
              cursor={false}
              speed={50}
            />
          </S.Paragraph>
        ))}
      </S.Content>


    </S.Container>
  )
}
export default PostPage

