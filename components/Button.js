import React from "react";
import globalStyle from "../style";
import { TouchableOpacity, Text, View } from "react-native";
const CustomButton = ({
  onPress,
  text,
  disabled = false,
  buttonStyle = globalStyle.button,
  textStyle = globalStyle.buttonText,
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={disabled ? globalStyle.buttonDisabled : buttonStyle}>
        <Text style={disabled ? globalStyle.buttonTextDisabled : textStyle}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
