import { typeColor, typeLabel } from "@/theme";
import * as S from "./style";

// Etiqueta colorida com o tipo do Pokémon (ex: Planta, Fogo, Água)
const TypeBadge = ({ type }) => {
  return (
    <S.Badge $color={typeColor[type]}>
      <S.Label>{typeLabel[type]}</S.Label>
    </S.Badge>
  );
};

export default TypeBadge;
