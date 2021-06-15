import React, { useState, useCallback, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, SafeAreaView, Modal, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import DelButton from '../shared/DelButton';
import FlatButton from '../shared/buttonSubmit';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ModalPicker } from '../shared/ModalPicker'


function DataScreen({ navigation }) {

  const showAlert = () =>
  Alert.alert(
    "Cпасибо за заказ",
    "Ожидайте звонок от нашего оператора",
  );


  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = useCallback(formData => {

    console.log(formData)

  }, []);
  const onChangeField = useCallback(
    name => text => {
      setValue(name, text);
    },
    []
  );

  const [chooseData, setchooseData] = useState('Тип оплаты');
  const [isModalVisible, setisModalVisible] = useState(false);

  const changeModalVisibility = (bool) => {
    setisModalVisible(bool)
  }

  const setData = (option) => {
    setchooseData(option)
  }

  useEffect(() => {
    register('Name');
    register('PhoneNumber');
    register('Address');
    register('TipDost');
  }, [register]);

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <TextInput style={styles.TextInput}
          inlineImageLeft='logo'
          autoCompleteType="username"
          keyboardType="default"
          textContentType="nickname"
          placeholder="Как обращаться?"
          onChangeText={onChangeField('Name')}
        />
      </View>
      <View >
        <TextInput style={styles.TextInput}
          autoCompleteType="cc-number"
          keyboardType="number-pad"
          maxLength={11}
          textContentType="telephoneNumber"
          placeholder="Номер телефона"
          onChangeText={onChangeField('PhoneNumber')}
        />
      </View>
      <View >
        <TextInput style={styles.TextInput}
          autoCompleteType="street-address"
          keyboardType="email-address"
          textContentType="streetAddressLine1"
          placeholder="Адрес доставки"
          onChangeText={onChangeField('Address')}
        />
      </View>
      <TouchableOpacity
        onPress={() => changeModalVisibility(true)}
        style={styles.TextInput}>
        <Text styles={styles.text}>{chooseData}</Text>
      </TouchableOpacity>
      <FlatButton style={styles.button} text="Заказать" onPress={handleSubmit(onSubmit), showAlert} />

      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        nRequestClose={() => changeModalVisibility(false)}
      >
        <ModalPicker
          changeModalVisibility={changeModalVisibility}
          setData={setData}
          onChangeText={onChangeField('TipDost')}
        />
      </Modal>

    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  touch: {

  },
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFCC99",
    alignContent: "center",
    justifyContent: "center"
  },
  TextInput: {
    marginHorizontal: 90,
    marginVertical: 12,
    borderBottomWidth: 1,
    textAlign: 'center',
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    position: "relative",
    fontSize: 14
  },
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#824544',
    alignSelf: "flex-end",
    position: "relative",
    bottom: 15

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default DataScreen