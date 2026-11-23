import styled from "styled-components/native";
import { colors } from "@/theme";

// Fundo escurecido atrás do modal
const Overlay = styled.View`
    flex: 1;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0.6);
`

const Container = styled.View`
    background-color: ${colors.panel};
    border-top-left-radius: 28px;
    border-top-right-radius: 28px;
    border-width: 1px;
    border-color: ${colors.line};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 56px 24px 48px;
    gap: 16px;
`

const IconCircle = styled.View`
    width: 72px;
    height: 72px;
    border-radius: 72px;
    background-color: ${props => props.$type == "success" ? "#22A45D" : colors.red};

    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.Text`
    font-size: 28px;
    font-weight: 900;
    color: ${colors.text};
`

const Description = styled.Text`
    font-size: 16px;
    color: ${colors.muted};
    text-align: center;
`

const CloseBtn = styled.TouchableOpacity`
    position: absolute;
    top: 20px;
    right: 20px;
`

export { CloseBtn, Container, Description, IconCircle, Title, Overlay }
