import React from "react";
import { StyleSheet, ScrollView, FlatList } from "react-native";
import ListItem from "./ListItem";
//import ListItems from "./screens/src/components/List/ListItem";

// const ListOutput = props => {
//   const placesOutput = props.placesArray.map((place, i) => (
//     <ListItem
//       key={i}
//       placeName={place}
//       handleListTouch={props.handleListTouch}
//       id={i}
//     />
//   ));
//   return <ScrollView style={styles.list}>{placesOutput}</ScrollView>;
// };
//==============================================================
const ListOutput = props => {
  return (
    <FlatList
      style={styles.list}
      data={props.placesArray}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          handleListTouch={props.handleListTouch}
          id={info.item.key}
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
