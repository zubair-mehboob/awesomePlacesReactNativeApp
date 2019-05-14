import React from "react";
import { StyleSheet, ScrollView, FlatList } from "react-native";
import ListItem from "./ListItem";

const ListOutput = props => {
  return (
    <FlatList
      style={styles.list}
      data={props.placesArray}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          handleListItemSelected={props.handleListItemSelected}
          id={info.item.key}
          image={info.item.image}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: "100%"
  }
});

export default ListOutput;
