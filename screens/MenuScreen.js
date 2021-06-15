import React from "react";
import { View, Text, StyleSheet } from "react-native";


function MenuScreen(){
  return(
    
    <View style={styles.container}>
      <Text>Menu Screen</Text>
    </View>
)}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFCC99",
  }
})

export default  MenuScreen
