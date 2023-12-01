import React from "react";
import { View, Text, StyleSheet } from "react-native";
//Texto tareas//
const Title = () => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.input}>¡Tareas de hoy!</Text>
    </View>
  );
};
//Estilos//
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: -400,
    width: "100%",
    justifyContent: "flex-start",
  },
  input: {
    fontSize: 24,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
});

export default Title;
