import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BilanScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text>Bilan</Text>
        <Text
          onPress={() => {
            navigation.push("Test");
          }}
        >
          Test
        </Text>
        <Text
          onPress={() => {
            navigation.push("Details");
          }}
        >
          Détails
        </Text>
      </View>
      <Text>This is the BilanScreen component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  nav: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
});
