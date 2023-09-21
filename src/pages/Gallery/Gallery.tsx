import React from 'react'
import * as S from "./gallery.styled"

const Gallery = () => {
  const array = new Array(10).fill(true)
  const [imageLoading, setImageLoading] = React.useState(true)
  return (
    <S.Container>
      <S.ImageContainer>
        {array.map((_, index) => (
          <>
            {imageLoading && <S.ImageLoading />}
            <S.Image
              style={{ opacity: imageLoading ? 0 : 1 }}
              onLoad={() => setImageLoading(false)} src={`https://firebasestorage.googleapis.com/v0/b/react-native-4952f.appspot.com/o/${index + 1}.jpg?alt=media`} />
          </>

        ))}
      </S.ImageContainer>
    </S.Container>
  )
}
export default Gallery

