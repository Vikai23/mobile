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
          top: 64
        },
      
        textPrimary: {
          fontSize: 42,
        },
      
        inputContainer: {
          width: "60%",
        },
      
        label: {
          fontSize: 14,
          color: "#222",
          marginBottom: 4,
        },
      
        input: {
          width: "100%",
          height: 40,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          paddingHorizontal: 12,
          backgroundColor: "#fff",
          fontSize: 15,
        },
         
        btn:{
          display: 'flex',
          flexDirection:"row",
          justifyContent: "center",
          alignItems: "center",
          gap: 50,
        },
      
      
        btnPrimary: {
          textDecorationLine: "underline",
          color: "grey",
          fontSize: 15,
        },
      
        btnSecondary: {
          backgroundColor: "blue",
          padding: 8,
          borderRadius: 22,
        },
      });