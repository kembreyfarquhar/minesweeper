import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoardContainer = () => {
  return <View style={styles.board}></View>;
};

const styles = StyleSheet.create({
  board: {
    backgroundColor: "grey",
    height: "70%",
    width: "70%"
  }
});

export default BoardContainer;
