import React from "react";
import { View, Text, Pressable } from "react-native";

const PrimaryButton = ({ children }) => {
  function pressHandlder() {
    console.log("Pressed!");
  }
  return (
    <Pressable onPress={pressHandlder}>
      <View>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
};
export default PrimaryButton;
