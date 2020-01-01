import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

const TopBar = ({ newGame, setNewGame }) => {
  return (
    <View style={styles.topBar}>
      <View>
        <Text>MAX-TIME</Text>
      </View>
      <TouchableHighlight style={styles.reset} onPress={() => setNewGame(true)}>
        <Text>RESET</Text>
      </TouchableHighlight>
      <View>
        <Text>TIMER</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  reset: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 15
  }
});

export default TopBar;
