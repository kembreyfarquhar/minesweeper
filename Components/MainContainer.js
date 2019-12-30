import React from "react";
import { StyleSheet, Text, View } from "react-native";

import BoardContainer from "./BoardContainer";

const MainContainer = () => {
  return (
    <View style={styles.container}>
      <BoardContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    borderWidth: 2,
    borderColor: "green"
  }
});

export default MainContainer;
