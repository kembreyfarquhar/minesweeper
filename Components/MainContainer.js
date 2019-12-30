import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MainContainer = () => {
  return (
    <View style={styles.container}>
      <Text>YAY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default MainContainer;
