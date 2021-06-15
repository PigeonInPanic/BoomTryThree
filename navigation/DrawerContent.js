import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

export function DrawerContent(props) {
    return(
        <View style={{flex:1 , backgroundColor: "#FFCC99"}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                        <View style={{flex:1, alignItems: "center", justifyContent: "center",}}>
                          <Image
                            style={styles.logo}
                            source={{
                              uri: 'https://sun7-6.userapi.com/impf/RXClc7fiXBw0kGGgIvWyIDv92KtxwpM6kyYU0A/D1Wq7TmiKDw.jpg?size=501x383&quality=96&proxy=1&sign=9262c8b6b995f8ce88c5bc7943f6df3a&type=album',
                            }}
                          />
                        </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
    
                            label="Роллы"
                            onPress={() => {props.navigation.navigate('Роллы')}}
                        />
                        <DrawerItem 
                            label="Суши"
                            onPress={() => {props.navigation.navigate('Суши')}}
                        />
                        <DrawerItem 
                            label="Сеты"
                            onPress={() => {props.navigation.navigate('Сеты')}}
                        />
                        <DrawerItem 
                            label="Пицца"
                            onPress={() => {props.navigation.navigate('Пицца')}}
                        />
                        <DrawerItem 
                            label="Лапша"
                            onPress={() => {props.navigation.navigate('Лапша')}}
                        />
                        <DrawerItem 
                            label="Дополнительно"
                            onPress={() => {props.navigation.navigate('Дополнительно')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
      width: 140,
      height: 110,
    },
    drawerContent: {
      flex:1,
    },
    image: {
      width: 50,
      height: 200,
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
  });