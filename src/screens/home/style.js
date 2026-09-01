import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 14,
    },
    logo:{
        top: 35
      }, 
    
      textPrimary: {
        fontSize: 42
      },
      btnPrimary: {
        backgroundColor: "#3474eb",
        padding: 12,
        borderRadius: 20,
        color: "#fff"
      },
      btnSecondary: {
        backgroundColor: "blue",
        padding: 12,
        borderRadius: 20
      },
      geral: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 20
      }
    });
    

