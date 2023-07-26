import { StyleSheet, Text, View } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";

const ConfirmationScreen = () => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Yatra For Business",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#c21808",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);



  return (
    <View>
      <Text>ConfirmationScreen</Text>
    </View>
  )
}

export default ConfirmationScreen

const styles = StyleSheet.create({})