import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import Row from "./Row";

const CellsContainer = () => {
  let rowArr = Array.apply(null, Array(15));

  return (
    <View>
      {rowArr.map((row, index) => (
        <Row key={index} />
      ))}
    </View>
  );
};

export default CellsContainer;
