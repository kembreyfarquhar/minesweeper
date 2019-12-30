import React from "react";
import { StyleSheet, Text, View } from "react-native";

import TopBar from "./TopBar";

const BoardContainer = () => {
  return (
    <View style={styles.board}>
      <TopBar />
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    backgroundColor: "grey",
    height: "70%",
    width: "70%"
  }
});

export default BoardContainer;
