import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,  Dimensions, ScrollView } from 'react-native'

const OPTIONS = ['Наличными при получение', 'Картой при получение']

const WIDTH = Dimensions.get('window').width * 0.9;
const HEIGHT = Dimensions.get ('window').height;

const ModalPicker = (props) => {

    const onPressItem = (option) => {
        props.changeModalVisibility(false);
        props.setData(option);
    }
    const option = OPTIONS.map ((item, index) => {
        return(
            <TouchableOpacity
            style = {styles.option}
            key = {index}
            onPress = {() => onPressItem(item)}
            >
                <Text style = {styles.text}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })

    return(
        <TouchableOpacity
        onPress = {() => props.changeModalVisibility (false)}
        style = {styles.container}
        >
            <View style = {[styles.modal, {width: WIDTH -20, height: HEIGHT * 0.2}]}>
                <ScrollView>
                    {option}
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

export {ModalPicker}