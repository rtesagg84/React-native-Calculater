import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import InputNumberButton from './InputNumberButton'
const buttons = [
  ['CLEAR','DEL'],
  [ 7 ,8,9,'/'],
  [4,5,6,'*'],
  [1,2,3,'-'],
  [1,'.','=','+'],
];
class App extends Component{
 renderButtons() {
    let layouts = buttons.map((buttonRows,index) =>{
    let rowItem =buttonRows.map((buttonItem,buttonIndex)=>{
      return <InputNumberButton
      value={buttonItem}
      handleOnPress={() =>{}}
       key={`btn-`+ buttonIndex}/>
    });
    
  return <View style={styles.inputRow} key={'row' + index}>{rowItem}</View>
    });
    return layouts
}

  render(){
 
  return (
    
    <View style={styles.container}>
     
      <View style={styles.calculateContainer}>
        <Text>11*11</Text>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>111</Text>
      </View>
    
      <View style={styles.InputContainer}> 
      {this.renderButtons()}
      </View>
    </View>
  );
  }
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  calculateContainer: {
    flex:2,
    fontSize:10,
    alignItems:"flex-end",
    backgroundColor: 'white',
  },

  resultContainer: {
flex:2,
// fontSize:10,
// alignItems:"flex-end",
justifyContent:"center",
backgroundColor: 'white',
  },

  InputContainer: {
    flex:8,
    backgroundColor:'#3D0075',
    
  },

  inputRow: {
flex:1,
flexDirection:'row'

  },
  
  resultText: {
    color:'white',
    fontSize:80,
    fontFamily:'bold',
    textAlign:'right'
  }
  
});
