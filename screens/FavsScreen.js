import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function FavsScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text
          onPress={() => {
            navigation.push("List");
          }}
        >
          Liste
        </Text>
        <Text
          onPress={() => {
            navigation.push("Map");
          }}
        >
          Carte
        </Text>
        <Text>Favoris</Text>
      </View>
      <Text>This is the FavsScreen component</Text>
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
