import React from "react";
import { TouchableOpacity,Text} from "react-native";

export default function Click (props){
  const { onPress } = props; 
    return(
        <TouchableOpacity  className=' bg-slate-500 p-2 w-3/4 rounded-lg text-white self-center' onPress={onPress}>
        <Text className='text-white text-lg text-center ' >{props.name}</Text>
      </TouchableOpacity>


        );
      }
      
    