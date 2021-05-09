import { StyleSheet } from "react-native";

const def = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
  },
});

const globalStyle = StyleSheet.create({
  buttonGreen: {
    ...def.button,
    backgroundColor: "green",
  },
  buttonRed: {
    ...def.button,
    backgroundColor: "red",
  },
  buttonBlue: {
    ...def.button,
    backgroundColor: "#00539CFF",
  },
  buttonDisabled: {
    ...def.button,
    backgroundColor: "lightgray",
  },
  buttonText: {
    ...def.buttonText,
    color: "white",
  },
  buttonTextDisabled: {
    ...def.buttonText,
    color: "darkgray",
  },
  buttonTextBlue: {
    ...def.buttonText,
    color: "#EEA47FFF",
  },
  input: {
    height: 50,
    marginHorizontal: 5,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    textAlign: "center",
  },
});

export default globalStyle;
