import React from "react";
import { TouchableOpacity,Text,StyleSheet} from "react-native";

export default function Click (props){
  const { onPress } = props; 
    return(
      <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{props.name}</Text>
  </TouchableOpacity>
);
}
const styles = StyleSheet.create({
  button: {
      backgroundColor: '#2B6CB0',
      padding: 10,
      width: '75%',
      borderRadius: 8,
      alignSelf: 'center',
      marginTop: 10,
  },
  buttonText: {
      color: 'white',
      fontSize: 18,
      textAlign: 'center',
  },
});