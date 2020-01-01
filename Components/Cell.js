import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Cell = props => {
  return (
    <View style={styles.cell}>
      <Text>{props.index}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1
  }
});

export default Cell;
