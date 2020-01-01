import React from "react";
import { StyleSheet, Text, View } from "react-native";

import TopBar from "./TopBar";
import CellsContainer from "./CellsContainer";

const BoardContainer = () => {
  return (
    <View style={styles.board}>
      <TopBar />
      <CellsContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    backgroundColor: "grey",
    padding: 10
  }
});

export default BoardContainer;
