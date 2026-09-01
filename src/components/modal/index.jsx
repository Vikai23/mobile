import * as DM from "./style"
import { useNavigation } from "@react-navigation/native"

const DetailsModal = () => {
    const navigation = useNavigation()
    return (
        <DM.Overlay>
            <DM.Container>
                <DM.Title>Title</DM.Title>
                <DM.Description>DMescription</DM.Description>
                <DM.CloseBtn onPress={() => navigation.goBack()}>
                    <DM.CloseBtnText>Close</DM.CloseBtnText>
                </DM.CloseBtn>
            </DM.Container>
        </DM.Overlay>
    )
}
export default DetailsModal