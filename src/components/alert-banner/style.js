import styled from "styled-components/native";

const THEME = {
    alert: { bg: "#FFF3CD", text: "#7A5B00" },
    danger: { bg: "#F8D7DA", text: "#7A1F27" },
    info: { bg: "#D1ECF1", text: "#0C4A57" },
    success: { bg: "#D4EDDA", text: "#1E5B2C" },
}

const Container = styled.View`
    flex-direction: row;
    align-items: flex-start;
    gap: 12px;
    width: 100%;
    padding: 14px 16px;
    border-radius: 12px;
    background-color: ${props => THEME[props.$type]?.bg ?? THEME.info.bg};
`

const TextWrapper = styled.View`
    flex: 1;
    gap: 2px;
`

const Label = styled.Text`
    font-size: 15px;
    font-weight: 700;
    color: ${props => THEME[props.$type]?.text ?? THEME.info.text};
`

const Description = styled.Text`
    font-size: 13px;
    color: ${props => THEME[props.$type]?.text ?? THEME.info.text};
`

const CloseBtn = styled.TouchableOpacity`
    padding: 2px;
`

export { Container, TextWrapper, Label, Description, CloseBtn }
