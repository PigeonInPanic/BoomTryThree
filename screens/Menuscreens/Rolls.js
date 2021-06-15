import React, {useEffect, useState} from "react";
import { SafeAreaView, Dimensions  } from "react-native";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ButtonAdd from "../../shared/buttonADD";


function Rolls({navigation }){

  /* useEffect(() => {
    getPost()
  })

  const getPost = () => {
    
    let URL = "https://jsonplaceholder.typicode.com/photos"
    fetch(URL).then(res => res.json()).then(res => {
      setRollsArray(res)
    }).finally(() => setIsLoading(false))
  }

  const [RollsArray,setRollsArray] = useState([])
  const [isLoading, setIsLoading] = useState(false) */

  const [CartArray, AddInCartArray] = useState([])

  const Data = require('../JSONFILE/Rolls.json')
  console.log(Data);

  const renderItem = ({item}) => (
    <View style = {styles.Order}>
    <Image
        style={styles.ImageOrder}
        source={{
          uri: item.Image,
        }}
      />
    <Text style = {styles.NameOrder}>{item.Name}</Text>
    <Text style = {styles.DescriptionOrder}>Описание: {item.Description}</Text>
    <Text style = {styles.MoneyOrder}>Стоимость: {item.Money}</Text>
    <ButtonAdd text = "В корзину" onPress={() => navigation.push('Корзина', (item), console.log(item))}/>
    </View>
  )

  return(
    <SafeAreaView style={styles.container}>
      <FlatList
      data ={Data}
      renderItem={renderItem}
      keyExtractor={item => item.Category}
      />
    </SafeAreaView>
)}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#FFCC99",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  Order: {
    marginTop: 3,
    flex: 1,
    borderBottomWidth: 0
  },
  ImageOrder :{
    flex: 1,
    width: win.width,
    height: win.width - 200,
  },
  NameOrder :{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24
  },
  DescriptionOrder :{
    flex: 1
  },
  MoneyOrder :{
    flex: 1,
    fontSize: 16,
    marginBottom:15,
    borderBottomWidth: 1
  }

})

export default Rolls