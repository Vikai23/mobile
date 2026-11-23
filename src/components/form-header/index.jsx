import * as S from "./style";

// Topo das telas de formulário: uma imagem num círculo, o título e um texto curto.
// "image" é a imagem (pode ser um require ou um { uri }) e "color" é a cor do círculo.
const FormHeader = ({ image, color, title, subtitle }) => {
  return (
    <S.Container>
      <S.Glow $color={color}>
        <S.Picture source={image} resizeMode="contain" />
      </S.Glow>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  );
};

export default FormHeader;
