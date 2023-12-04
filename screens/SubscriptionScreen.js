import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import axios from "axios";
// AppStyles.js
import AppStyles from "../AppStyles";
// Customs
import CustomButton from "../components/CustomButton";

export default function SubscriptionScreen() {
  const navigation = useNavigation();
  // data state
  const [dataUser, setDataUser] = useState();
  // data company state
  const [dataSubscriptions, setDataSubscriptions] = useState();
  // user subscription state
  const [userSub, setUserSub] = useState();
  // next user subscription state
  const [nextUserSub, setNextUserSub] = useState();
  // is loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        const response = await axios.get(
          `https://site--actilib-backend--wpz9hk24xnmf.code.run/user/${userId}`
        );
        console.log(JSON.stringify(response.data.user, null, 2));
        setDataUser(response.data.user);
        setUserSub(response.data.user.subscription);
        const responseSubsData = await axios.get(
          `https://site--actilib-backend--wpz9hk24xnmf.code.run/subscription`
        );
        console.log(
          JSON.stringify(responseSubsData.data.subscriptions, null, 2)
        );
        setDataSubscriptions(responseSubsData.data.subscriptions);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={AppStyles.color.primary} />
    </View>
  ) : (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Abonnement</Text>
      <View style={styles.subsContainer}>
        <View style={[styles.block, styles.left]}>
          {/* check if user already has subscribed */}
          {userSub ? (
            <>
              <Text style={styles.tall}>{userSub.name}</Text>
              <Text
                style={[styles.small, styles.green]}
              >{`${userSub.userCredits} Crédits - ${userSub.price} €`}</Text>
            </>
          ) : (
            <>
              <Text style={styles.tall}>Forfait -</Text>
              <Text
                style={[styles.small, styles.green]}
              >{`__ Crédits - __ €`}</Text>
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  loadingContainer: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
