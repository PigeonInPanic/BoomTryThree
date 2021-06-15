import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,  Dimensions, ScrollView } from 'react-native'


const WIDTH = Dimensions.get('window').width * 0.9;
const HEIGHT = Dimensions.get ('window').height;

const ModalShow = () => {


    return(
        <TouchableOpacity
        onPress = {() => props.changeModalVisibilityTwo (false)}
        style = {styles.container}
        >
            <View style = {[styles.modal, {width: WIDTH -20, height: HEIGHT * 0.2}]}>
                <ScrollView>
                    <Text style = {styles.text}>Спасибо за заказ! Ждите звонка от нашего оператора</Text>
                </ScrollView>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container :{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },

  modal: {
      backgroundColor: '#824544',
      borderRadius: 10
  },

  option: {
      alignItems: 'center',
  },

  text: {
      margin: 20,
      fontSize: 20,
      fontWeight: 'bold',
      color: '#ffffff'
  }
})

export {ModalShow}