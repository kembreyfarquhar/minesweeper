import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

const Cell = ({ index, newGame, setNewGame }) => {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    newGame && setPressed(false);
  }, [newGame]);

  return (
    <TouchableHighlight
      style={pressed ? [styles.cell, styles.pressed] : [styles.cell]}
      onPress={() => {
        setPressed(true);
        newGame && setNewGame(false);
      }}
    >
      <Text>{pressed && index}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 30,
    height: 30,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  pressed: {
    backgroundColor: "white"
  }
});

export default Cell;
