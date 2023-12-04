import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ModifyPasswordScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the ModifyPasswordScreen component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
