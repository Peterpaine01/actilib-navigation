import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// components
import CustomInputSearch from "../components/CustomInputSearch";
import CustomButtonSearch from "../components/CustomButtonSearch";

export default function ListScreen() {
  const [activitiesList, setActivitiesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.EXPO_PUBLIC_SERVER_URL}/activities`
        );
        // console.log(response.data);
        setActivitiesList(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  console.log(activitiesList);

  if (isLoading === true) {
    // We haven't finished checking for the data yet
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text>Liste</Text>
        <Text
          onPress={() => {
            navigation.push("Map");
          }}
        >
          Carte
        </Text>
        <Text
          onPress={() => {
            navigation.push("Favs");
          }}
        >
          Favoris
        </Text>
      </View>
      <Text
        onPress={() => {
          navigation.push("Search");
        }}
      >
        Go to SearchScreen by filters
      </Text>

      <CustomButtonSearch
        text="Cours, activité, atelier"
        style="full_width"
        feather_start
        start_icon="search"
        feather_end
        end_icon="sliders"
        onPress={() => {
          navigation.push("Search");
        }}
      />

      <Text>This is the ListScreen component</Text>
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
