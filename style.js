import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
  button: {
    backgroundColor: "green",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  buttonDisabled: {
    backgroundColor: "lightgray",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  buttonTextDisabled: {
    color: "darkgray",
    fontSize: 18,
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
