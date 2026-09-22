import { useState } from "react";
import { Container, TextWrapper, Label, Description, CloseBtn } from "./style"
import { FontAwesome6 } from "@expo/vector-icons";

const META = {
    alert: { icon: "triangle-exclamation", label: "Alerta" },
    danger: { icon: "circle-exclamation", label: "Perigo" },
    info: { icon: "circle-info", label: "Informação" },
    success: { icon: "circle-check", label: "Sucesso" },
}

const AlertBanner = ({ type, message }) => {
    const [visible, setVisible] = useState(true)
    if (!visible) return null

    const { icon, label } = META[type] ?? META.info
    const textColor = {
        alert: "#7A5B00",
        danger: "#7A1F27",
        info: "#0C4A57",
        success: "#1E5B2C",
    }[type] ?? "#0C4A57"

    return (
        <Container $type={type}>
            <FontAwesome6
                name={icon}
                size={20}
                color={textColor}
            />
            <TextWrapper>
                <Label $type={type}>{label}</Label>
                <Description $type={type}>{message}</Description>
            </TextWrapper>
            <CloseBtn onPress={() => setVisible(false)}>
                <FontAwesome6 name="xmark" size={16} color={textColor} />
            </CloseBtn>
        </Container>
    )
}

export default AlertBanner
