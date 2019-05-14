import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
const ListItem = props => {
  return (
    <TouchableOpacity
      style={styles.listitems}
      onPress={() => props.handleListItemSelected(props.id)}
    >
      <Image source={props.image} style={styles.placeImage} />
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
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    width: 30,
    height: 30,
    marginRight: 8
  }
});

export default ListItem;
