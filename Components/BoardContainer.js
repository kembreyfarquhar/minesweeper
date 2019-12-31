import React from "react";
import { StyleSheet, Text, View } from "react-native";

import TopBar from "./TopBar";
import Cells from "./Cells";

const BoardContainer = () => {
  return (
    <View style={styles.board}>
      <TopBar />
      <Cells />
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    backgroundColor: "grey",
    height: "70%",
    width: "80%"
  }
});

export default BoardContainer;
