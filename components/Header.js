import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#c21808",
        height: 65,
        padding:8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "white",
          borderWidth: 2,
          backgroundColor:"white",
          borderRadius: 20,
          padding: 8,
        }}
      >
        <Ionicons name="bed-outline" size={24} color="#c21808" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "#c21808",
            fontSize: 15,
          }}
        >
          Hotels
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          
          padding: 8,
        }}
      >
        <Ionicons name="ios-airplane-outline" size={24} color="white" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
          Flights
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          
          padding: 8,
        }}
      >
        <Ionicons name="ios-car-outline" size={24} color="white" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
          Cabs
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          
          padding: 8,
        }}
      >
        <Ionicons name="ios-bus-outline" size={24} color="white" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
          Bus
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;
