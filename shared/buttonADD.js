import React, {useEffect, useState} from "react";
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function buttonADD({ text, onPress }) {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: '#824544',
    alignSelf: "flex-end",
    position: "relative",
    bottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 12,
    textAlign: 'center',
  }
});