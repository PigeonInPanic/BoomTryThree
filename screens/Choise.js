import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Pressable, Button } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import FlatButton from "../shared/button";


function Choise({ navigation }) {

    const OnPressDF = () => { navigation.navigate("DFTWO") }
    const OnPressDFTWO = () => { navigation.navigate("DF") }

    return(
    <View style={styles.centered_view}>
        <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
                <Text style={styles.text}>Cпособ получения заказа</Text>
            </View>
            <View style={styles.warning_body}>
                <Text style={styles.textv2}>Как желаете получить заказ?</Text>
            </View>
            <View style={styles.fixToText}>
                <TouchableOpacity onPress={OnPressDF}>
                    <View style={styles.warning_button}>
                        <Text style={styles.text}>Cамовывоз</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={OnPressDFTWO}>
                    <View style={styles.warning_button}>
                        <Text style={styles.text}>Доставка</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#FFCC99",
      flexDirection: 'column',
  
    },
    text: {
      color: '#ffffff',
      margin: 10,
      textAlign: 'center',
    },
    textv2: {
      color: '#000000',
      textAlign: 'center',
    },
    centered_view: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#a4815e'
    },
    warning_modal: {
      width: 300,
      height: 200,
      backgroundColor: '#FFCC99',
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 20,
    },
    warning_title: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#824544',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    },
    warning_body: {
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    warning_button: {
      backgroundColor: '#824544',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  })
  
  export default Choise