import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Switch,
  Image,
  Slider
} from "react-native";
//import ListItems from "./screens/src/components/List/ListItem";
import UserInput from "./screens/src/components/UserInput/UserInput";
import ListOutput from "./screens/src/components/List/ListOutput";
import image from "./screens/src/assets/Images/1.jpg";
import PlaceDetails from "./screens/src/components/PlaceDetails/PlaceDetails";

export default class App extends React.Component {
  state = {
    inputText: "",
    placesArray: [],
    selectedPlace: null
  };
  handleTextChange = value => {
    this.setState({
      inputText: value
    });
  };

  handleClick = () => {
    this.setState({
      placesArray: this.state.placesArray.concat({
        name: this.state.inputText,
        key: Math.random().toString(),
        image
      })
    });
  };

  handleListItemDeleted = id => {
    //alert(`Id: ${id} is touched`);
    const filtered = this.state.placesArray.filter(
      place => place.key !== this.state.selectedPlace.key
    );

    this.setState(p => {
      return {
        placesArray: filtered,
        selectedPlace: null
      };
    });
  };

  handleListItemSelected = id => {
    //alert(`Id: ${id} is touched`);
    const found = this.state.placesArray.find(place => place.key === id);
    this.setState(p => {
      return {
        selectedPlace: found
      };
    });
  };

  modalClosedHandler = () => {
    //alert("hey");
    this.setState({
      selectedPlace: null
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetails
          selectedPlace={this.state.selectedPlace}
          modalClosedHandler={this.modalClosedHandler}
          handleListItemDeleted={this.handleListItemDeleted}
        />
        <UserInput
          handleTextChange={this.handleTextChange}
          handleClick={this.handleClick}
        />
        <ListOutput
          placesArray={this.state.placesArray}
          handleListItemSelected={this.handleListItemSelected}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 30
  }
});
