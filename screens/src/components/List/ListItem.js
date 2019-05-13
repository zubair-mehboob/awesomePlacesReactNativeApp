import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const ListItem = props => {
  return (
    <TouchableOpacity
      style={styles.listitems}
      onPress={() => props.handleListTouch(props.id)}
    >
      <Text>{props.placeName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listitems: {
    backgroundColor: "#dfdfdf",
    color: "purple",
    marginBottom: 5,
    padding: 10,
    width: "100%"
  }
});

export default ListItem;
