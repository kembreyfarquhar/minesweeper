import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import TopBar from "./TopBar";
import CellsContainer from "./CellsContainer";

const BoardContainer = () => {
  const [newGame, setNewGame] = useState(true);

  return (
    <View style={styles.board}>
      <TopBar newGame={newGame} setNewGame={setNewGame} />
      <CellsContainer newGame={newGame} setNewGame={setNewGame} />
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
