import styled from "styled-components/native";
import { colors } from "@/theme";

const Badge = styled.View`
  padding: 4px 12px;
  border-radius: 12px;
  background-color: ${(props) => props.$color};
`;

const Label = styled.Text`
  color: ${colors.white};
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.35);
`;

export { Badge, Label };
