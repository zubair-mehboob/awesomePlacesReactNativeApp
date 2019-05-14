import React from "react";
import { Modal, Text, View, Button, Image, StyleSheet } from "react-native";

const PlaceDetails = props => {
  let selectedPlaceView = null;
  if (props.selectedPlace) {
    selectedPlaceView = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal visible={props.selectedPlace !== null} animationType="slide">
      <View>{selectedPlaceView}</View>
      <View>
        <Button
          title="Delete"
          color="red"
          onPress={props.handleListItemDeleted}
        />
        <Button title="Cancel" onPress={props.modalClosedHandler} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  placeImage: {
    widht: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24
  }
});

export default PlaceDetails;
