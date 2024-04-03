import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Bouton(props) {
  const { onPress } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#63b3ed',
    width:100,
    height:30,
    padding: 3,
    borderRadius: 5,
    
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});


