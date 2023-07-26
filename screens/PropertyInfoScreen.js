import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Pressable,
    Image,
  } from "react-native";
  import React, { useLayoutEffect } from "react";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import { pixelNormalize } from "../components/Normalise";
  import { MaterialIcons } from "@expo/vector-icons";
  import Amenities from "../components/Amenities";
  
  const PropertyInfoScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
        title: `${route.params.name}`,
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
      });
    }, []);
    const difference = route.params.oldPrice - route.params.newPrice;
    const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;
    return (
      <>
        <SafeAreaView>
          <ScrollView>
            <Pressable
              style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}
            >
              {route.params.photos.slice(0, 5).map((photo) => (
                <View style={{ margin: 6 }}>
                  <Image
                    style={{
                      width: 120,
                      height: pixelNormalize(80),
                      borderRadius: pixelNormalize(4),
                    }}
                    source={{ uri: photo.image }}
                  />
                </View>
              ))}
              <Pressable
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <Text style={{ textAlign: "center", marginLeft: 20 }}>
                  Show More
                </Text>
              </Pressable>
            </Pressable>
  
            <View
              style={{
                marginHorizontal: 12,
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                  {route.params.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 6,
                    marginTop: 7,
                  }}
                >
                  <MaterialIcons name="stars" size={24} color="#f9a603" />
                  <Text>{route.params.rating}</Text>
                  <View
                    style={{
                      backgroundColor: "black",
                      paddingVertical: 3,
                      marginStart:10,
                      borderRadius: 5,
                      width: 130,
                    
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: 13,
                      }}
                    >
                      Yatra Smart Choice
                    </Text>
                  </View>
                </View>
              </View>
  
              
            </View>
  
            <Text
              style={{
                borderColor: "#E0E0E0",
                borderWidth: 3,
                height: 1,
                marginTop: 15,
              }}
            />
            <Text
              style={{
                marginTop: 10,
                fontSize: 17,
                fontWeight: "500",
                marginHorizontal: 12,
              }}
            >
              Price for 1 Night and {route.params.adults} adults
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 12,
                marginTop: 4,
                gap: 8,
              }}
            >
              <Text
                style={{
                  color: "red",
                  fontSize: 20,
                  fontWeight:600,
                  textDecorationLine: "line-through",
                }}
              >
                {route.params.oldPrice * route.params.adults}
              </Text>
              <Text style={{ fontSize: 20, color:"#2a9df4", fontWeight:600 }}>
                Rs {route.params.newPrice * route.params.adults}
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: 12,
                marginTop: 7,
                backgroundColor: "green",
                paddingHorizontal: 4,
                paddingVertical: 5,
                width: 78, 
                borderRadius: 4,
              }}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                {offerPrice.toFixed(0)} % OFF
              </Text>
            </View>
  
            <Text
              style={{
                borderColor: "#E0E0E0",
                borderWidth: 3,
                height: 1,
                marginTop: 15,
              }}
            />
            <View
              style={{
                margin: 12,
                flexDirection: "row",
                alignItems: "center",
                gap: 60,
              }}
            >
              <View>
                <Text
                  style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}
                >
                  Check In
                </Text>
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "#c21808" }}
                >
                  {route.params.selectedDates.startDate}
                </Text>
              </View>
  
              <View>
                <Text
                  style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}
                >
                  Check Out
                </Text>
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "#c21808" }}
                >
                  {route.params.selectedDates.endDate}
                </Text>
              </View>
            </View>
            <View style={{ margin: 12 }}>
              <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
                Rooms and Guests
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
              >
                {route.params.rooms} rooms {route.params.adults} adults{" "}
                {route.params.children} children
              </Text>
            </View>
  
            <Text
              style={{
                borderColor: "#E0E0E0",
                borderWidth: 3,
                height: 1,
                marginTop: 15,
              }}
            />
            <Amenities />
  
            <Text
              style={{
                borderColor: "#E0E0E0",
                borderWidth: 3,
                height: 1,
                marginTop: 15,
              }}
            />
          </ScrollView>
        </SafeAreaView>
  
        <Pressable
        onPress={() => navigation.navigate("Rooms",{
          rooms:route.params.availableRooms,
          oldPrice:route.params.oldPrice,
          newPrice:route.params.newPrice,
          name:route.params.name,
          children:route.params.children,
          adults:route.params.adults,
          rating:route.params.rating,
          startDate:route.params.selectedDates.startDate,
          endDate:route.params.selectedDates.endDate
        })}
          style={{
            backgroundColor: "#c21808",
            position: "absolute",
            bottom: 20,
            padding: 15,
            width:"95%",
            borderRadius:20,
            marginHorizontal:10,
          }}
        >
          <Text style={{ textAlign: "center", color: "white",fontWeight:"bold",fontSize:17 }}>
            Select Availabilty
          </Text>
        </Pressable>
      </>
    );
  };
  
  export default PropertyInfoScreen;
  
  const styles = StyleSheet.create({});