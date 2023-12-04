import { Text, View, ActivityIndicator, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createBottomTabNavigator();
const TabTop = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

// AppStyles.js
import AppStyles from "./AppStyles";

// Components import
import LogoTitle from "./components/LogoTitle.js";
import LogoProfile from "./components/LogoProfile.js";
import HeaderBack from "./components/HeaderBack.js";
import HeaderBackToProfileAndRefresh from "./components/HeaderBackToProfileAndRefresh.js";
import HeaderBackToHome from "./components/HeaderBackToHome.js";

// Screen imports
import SignInScreen from "./screens/SignInScreen.js";
import SignUpScreen01 from "./screens/SignUpScreen01.js";
import SignUpScreen02 from "./screens/SignUpScreen02.js";
import CGVUScreen from "./screens/CGVUScreen.js";
import ConfidentialDataScreen from "./screens/ConfidentialDataScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import ExplorerScreen from "./screens/ListScreen.js";
import ListScreen from "./screens/ListScreen.js";
import MapScreen from "./screens/MapScreen.js";
import FavsScreen from "./screens/FavsScreen.js";
import SearchScreen from "./screens/SearchScreen.js";
import BilanScreen from "./screens/BilanScreen.js";
import TestScreen from "./screens/TestScreen.js";
import DetailsScreen from "./screens/DetailsScreen.js";
import PastEventScreen from "./screens/PastEventScreen.js";
import FutureEventScreen from "./screens/FutureEventScreen.js";
import CalendarScreen from "./screens/CalendarScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import LandingScreen from "./screens/LandingScreen.js";
import ActivityScreen from "./screens/ActivityScreen.js";
import EditProfileScreen from "./screens/EditProfileScreen.js";
import SubscriptionScreen from "./screens/SubscriptionScreen.js";
import SettingsScreen from "./screens/SettingsScreen.js";
import ModifyPasswordScreen from "./screens/ModifyPasswordScreen";

// FONTS > npx expo install expo-font @expo-google-fonts/inter
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_100Thin,
} from "@expo-google-fonts/inter";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  //TOKEN
  const setToken = async (token) => {
    if (token) {
      await AsyncStorage.setItem("userToken", token);
    } else {
      await AsyncStorage.removeItem("userToken");
    }

    setUserToken(token);
  };

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      // We should also handle error for production apps
      const userToken = await AsyncStorage.getItem("userToken");

      // This will switch to the App screen or Auth screen and this loading screen will be unmounted and thrown away.
      setUserToken(userToken);

      setIsLoading(false);
    };

    bootstrapAsync();
  }, []);

  //FONTS
  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return isLoading ? (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="white" />
    </View>
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        {userToken === null ? (
          // No token found, user is not signed in yet in this part
          <>
            <Stack.Screen name="Landing" options={{ headerShown: false }}>
              {() => <LandingScreen />}
            </Stack.Screen>
            <Stack.Screen name="SignIn" options={{ headerShown: false }}>
              {(props) => <SignInScreen {...props} setToken={setToken} />}
            </Stack.Screen>
            <Stack.Screen name="SignUp01" options={{ headerShown: false }}>
              {() => <SignUpScreen01 />}
            </Stack.Screen>
            <Stack.Screen name="SignUp02" options={{ headerShown: false }}>
              {(props) => <SignUpScreen02 {...props} setToken={setToken} />}
            </Stack.Screen>
            <Stack.Screen
              name="CGVU"
              options={{
                headerStyle: {
                  backgroundColor: "white",
                },
                headerTitleAlign: "center",
                headerShadowVisible: false,
                headerTitle: (props) => <LogoTitle {...props} />,
                headerLeft: (props) => <HeaderBack {...props} />,
                headerBackVisible: false,
              }}
            >
              {() => <CGVUScreen />}
            </Stack.Screen>
            <Stack.Screen
              name="ConfidentialData"
              options={{
                headerStyle: {
                  backgroundColor: "white",
                },
                headerTitleAlign: "center",
                headerShadowVisible: false,
                headerTitle: (props) => <LogoTitle {...props} />,
                headerLeft: (props) => <HeaderBack {...props} />,
                headerBackVisible: false,
              }}
            >
              {() => <ConfidentialDataScreen />}
            </Stack.Screen>
          </>
        ) : (
          // Here User is Signed-in
          <>
            <Stack.Screen name="Tab" options={{ headerShown: false }}>
              {() => (
                <Tab.Navigator
                  screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: "#0A837E",
                    tabBarInactiveTintColor: "black",
                    tabBarItemStyle: {
                      borderTopColor: "#AAAAAA",
                      borderTopWidth: 1,
                    },
                    tabBarSelectedItemStyle: {
                      borderTopColor: "#0A837E",
                      borderTopWidth: 2,
                    },
                  }}
                >
                  {/* HOME SCREEN */}
                  {/* HOME SCREEN */}
                  {/* HOME SCREEN */}
                  <Tab.Screen
                    name="TabHome"
                    options={{
                      tabBarLabel: "Accueil",
                      tabBarIcon: ({ color, size }) => (
                        <Feather name={"home"} size={size} color={color} />
                      ),
                    }}
                  >
                    {() => (
                      <Stack.Navigator>
                        <Stack.Screen
                          name="Home"
                          options={{
                            headerStyle: {
                              backgroundColor: "white",
                            },
                            headerTitleAlign: "center",
                            headerRight: (props) => <LogoProfile {...props} />,
                            headerTitle: (props) => <LogoTitle {...props} />,
                            headerShadowVisible: false,
                          }}
                        >
                          {() => <HomeScreen />}
                        </Stack.Screen>
                      </Stack.Navigator>
                    )}
                  </Tab.Screen>
                  {/* EXPLORER SCREEN */}
                  {/* EXPLORER SCREEN */}
                  {/* EXPLORER SCREEN */}
                  <Tab.Screen
                    name="TabExplorer"
                    options={{
                      tabBarLabel: "Explorer",
                      tabBarIcon: ({ color, size }) => (
                        <Ionicons
                          name={"search-outline"}
                          size={size}
                          color={color}
                        />
                      ),
                    }}
                  >
                    {() => (
                      <Stack.Navigator>
                        <Stack.Screen
                          name="Explorer"
                          options={{
                            headerStyle: {
                              backgroundColor: "white",
                            },
                            headerTitleAlign: "center",
                            headerRight: (props) => <LogoProfile {...props} />,
                            headerTitle: (props) => <LogoTitle {...props} />,
                            headerShadowVisible: false,
                          }}
                        >
                          {() => <ExplorerScreen />}
                        </Stack.Screen>
                      </Stack.Navigator>
                    )}
                  </Tab.Screen>
                </Tab.Navigator>
              )}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: AppStyles.color.primary,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
