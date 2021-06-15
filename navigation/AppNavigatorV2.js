import * as React from 'react';

import FlatButton from '../shared/button'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Rolls from '../screens/Menuscreens/Rolls'
import Pizza from '../screens/Menuscreens/Pizza'
import Pasta from '../screens/Menuscreens/Pasta'
import AD from '../screens/Menuscreens/Additional information'
import Sets from '../screens/Menuscreens/Sets'
import Sushi from '../screens/Menuscreens/Sushi'
import MenuScreen from '../screens/MenuScreen'
import CartScreen from '../screens/CartScreen'
import DataScreen from '../screens/DataFiles'
import DataTwoScreen from '../screens/DataFilesTwo';
import Choise from '../screens/Choise';

import { DrawerContent } from '../navigation/DrawerContent';

import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()


function StackMenuScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Меню" component={MyDrawer} />
    </Stack.Navigator>
  )
}

const StackCartScreen = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName={"Корзина"} screenOptions={{
      headerStyle: {
        backgroundColor: "#824544",
      },
      headerTintColor: '#FFFFFF',
      headerTitleAlign: 'center',

    }}
    >
      <Stack.Screen name="Carting" options={{
        title: "Корзина"
      }} component={CartScreen} />
      <Stack.Screen name="ChoiseCart" options={{
        title: "Выбор"
      }} component={Choise} />
      <Stack.Screen name="DF" options={{
        title: "Доставка",
      }} component={DataScreen}
      />
      <Stack.Screen name="DFTWO" options={{
        title: "Самовывоз",
      }} component={DataTwoScreen}
      />
    </Stack.Navigator>
  )
}



const StackRollsScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Роллы" component={Rolls} options={{
        title: "Роллы",
        headerStyle: {
          backgroundColor: "#824544",
        },
        headerTitleAlign: 'center',
        headerTintColor: '#FFFFFF',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#824544" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
      <Stack.Screen name="Корзина" component={CartScreen} options={{
        headerStyle: {
          backgroundColor: "#824544",
        },
        headerTintColor: '#FFFFFF',
        headerTitleAlign: 'center',

      }} />
    </Stack.Navigator>
  )
}
const StackPizzaScreen = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{
      title: "Пицца",
      headerStyle: {
        backgroundColor: "#824544",
      },
      headerTitleAlign: 'center',
      headerTintColor: '#FFFFFF',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25}
          backgroundColor="#824544" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }}>
      <Stack.Screen name="Пицца" component={Pizza} />
    </Stack.Navigator>
  )
}
const StackPastaScreen = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{
      title: "Лапша",

      headerStyle: {
        backgroundColor: "#824544",
      },
      headerTitleAlign: 'center',
      headerTintColor: '#FFFFFF',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25}
          backgroundColor="#824544" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }}>
      <Stack.Screen name="Лапша" component={Pasta} />

    </Stack.Navigator>
  )
}
const StackAdditionalInformationScreen = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{
      title: "Дополнительно",

      headerStyle: {
        backgroundColor: "#824544",
      },
      headerTitleAlign: 'center',
      headerTintColor: '#FFFFFF',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25}
          backgroundColor="#824544" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }}>
      <Stack.Screen name="Дополнительно" component={AD} />
    </Stack.Navigator>
  )
}
const StackSushiScreen = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{
      title: "Суши",

      headerStyle: {
        backgroundColor: "#824544",
      },
      headerTitleAlign: 'center',
      headerTintColor: '#FFFFFF',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25}
          backgroundColor="#824544" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }}
    >
      <Stack.Screen name="Суши" component={Sushi} />
    </Stack.Navigator>
  )
}
const StackSetsScreen = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{
      title: "Сеты",

      headerStyle: {
        backgroundColor: "#824544",
      },
      headerTitleAlign: 'center',
      headerTintColor: '#FFFFFF',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25}
          backgroundColor="#824544" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }}
    >
      <Stack.Screen name="Суши" component={Sets} />
    </Stack.Navigator>
  )
}

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Роллы" component={StackRollsScreen} />
      <Drawer.Screen name="Суши" component={StackSushiScreen} />
      <Drawer.Screen name="Сеты" component={StackSetsScreen} />
      <Drawer.Screen name="Пицца" component={StackPizzaScreen} />
      <Drawer.Screen name="Лапша" component={StackPastaScreen} />
      <Drawer.Screen name="Дополнительно" component={StackAdditionalInformationScreen} />

    </Drawer.Navigator>
  );
}

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        style: {
          backgroundColor: "#824544",
        },
        activeTintColor: '#ffffff',
        inactiveTintColor: '#B87142',
      }}>
        <Tab.Screen name="Меню" component={MyDrawer} options={{
          tabBarLabel: 'Меню',
          tabBarIcon: ({ color }) => (
            <Icon name="menu" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen name="Корзинка" component={StackCartScreen} options={{
          tabBarLabel: 'Корзина',
          tabBarIcon: ({ color }) => (
            <Icon name="cart" color={color} size={26} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default MyTabs
