import React,{Component} from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
export default class InputNumberButton extends Component {
    render(){
        const{value,handleOnPress}=this.props
        return(
        <TouchableOpacity onPress={()=>handleOnPress(value)} style={styles.container}>
            <Text style={styles.text}>{value}</Text>
            </TouchableOpacity>
        )
    }
}
const styles=StyleSheet.create({
    container: {
        flex:1,
        margin:1,
        backgroundColor:'rgba(255,255,255,0.1)',
        justifyContent:'center'
    },
    text: {
        color:'white',
        fontSize:26,
        alignSelf:'center'
    }
})