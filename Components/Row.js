import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Cell from "./Cell";

const Row = ({ newGame, setNewGame }) => {
  let cellArr = Array.apply(null, Array(10));

  return (
    <View style={styles.row}>
      {cellArr.map((cell, index) => (
        <Cell
          key={index}
          index={index}
          newGame={newGame}
          setNewGame={setNewGame}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  }
});

export default Row;
