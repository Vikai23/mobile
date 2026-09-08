import { Container, Description } from "./style"

const AlertBanner = ({ type, message}) => {
    return (
        <Container>
            <Description>{message}</Description>
        </Container>
    )
}

export default AlertBanner