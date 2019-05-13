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

export default class App extends React.Component {
  state = {
    inputText: "",
    placesArray: []
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
        key: Math.random().toString()
      })
    });
  };

  handleListTouch = id => {
    // alert(`Id: ${id} is touched`);
    const filtered = this.state.placesArray.filter(place => place.key !== id);
    this.setState(p => {
      return {
        placesArray: filtered
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <UserInput
          handleTextChange={this.handleTextChange}
          handleClick={this.handleClick}
        />
        <ListOutput
          placesArray={this.state.placesArray}
          handleListTouch={this.handleListTouch}
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
