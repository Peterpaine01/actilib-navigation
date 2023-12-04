import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TabTop = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export default function ExplorerScreen() {
  return (
    <NavigationContainer>
      <TabTop.Navigator
        screenOptions={{
          headerShown: true,
          tabBarActiveTintColor: "#0A837E",
          tabBarInactiveTintColor: "black",
          tabBarItemStyle: {
            borderBottomColor: "#AAAAAA",
            borderBottomWidth: 1,
          },
          tabBarSelectedItemStyle: {
            borderBottomColor: "#0A837E",
            borderBottomWidth: 2,
          },
        }}
      >
        {/* <TabTop.Screen name="Liste" component={ListScreen} /> */}
        <TabTop.Screen name="Carte" component={MapScreen} />
        <TabTop.Screen name="Favoris" component={FavsScreen} />
      </TabTop.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
