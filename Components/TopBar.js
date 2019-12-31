import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <View>
        <Text>MAX-TIME</Text>
      </View>
      <View>
        <Text>RESET</Text>
      </View>
      <View>
        <Text>TIMER</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  }
});

export default TopBar;
