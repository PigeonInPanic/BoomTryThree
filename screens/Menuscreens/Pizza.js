import React, {useEffect, useState} from "react";
import { SafeAreaView, Dimensions  } from "react-native";
import { View, Text, StyleSheet,Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ButtonAdd from "../../shared/buttonADD";

function CartScreen(){
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

  const Data = require('../JSONFILE/Pizza.json')
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
    <ButtonAdd text = "В корзину"/>
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
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  Order: {
    flex: 1
    
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
    marginBottom:15,
    borderBottomWidth: 1
  }

})

export default CartScreen