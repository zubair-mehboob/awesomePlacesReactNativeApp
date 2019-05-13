import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const UserInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter place name.."
        onChangeText={props.handleTextChange}
      />
      <Button onPress={props.handleClick} title="add" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  }
});

export default UserInput;
