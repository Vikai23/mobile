import { Container, Description } from "./style"
import { FontAwesome6 } from "@expo/vector-icons";

const AlertBanner = ({ type, message }) => {

    function IconType() {
        switch (type) {
            case "alert":
                return "triangle-exclamation"
                break;
            case "success":
                return "triangle-exclamation"
                break;
            case "danger":
                return "triangle-exclamation"
                break;
        
            default:
                return "triangle-exclamation"
                break;
        }
    }
    console.log(IconType())

    return (
        <Container>
            <FontAwesome6 
                name={IconType()}
                size={24}
                color="black"
            />
            <Description>{message}</Description>
        </Container>
    )
}

export default AlertBanner