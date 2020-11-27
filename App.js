import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { greaterThan } from 'react-native-reanimated';

class App extends Component{
  render(){
  return (
    <View style={styles.container}>
     
      <View style={styles.calculate}></View>
      <View style={styles.result}></View>
      <View style={styles.buttons}> 
        <View style={styles.numbers}></View>
           <View style={styles.opraters}>
             <View><Text>1</Text></View>
             <View><Text>2</Text></View>
             <View><Text>3</Text></View>
             <View><Text>4</Text></View>
             <View><Text>5</Text></View>
           </View>

      </View>
      
    </View>
  );
  }
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  calculate: {
    flex:2,
    
    backgroundColor: 'red',
  },
  result: {
flex:1,
backgroundColor: 'blue',
  },
  buttons: {
    flex:7,
    flexDirection:"row",
    flexGrow:5,
  },
  numbers: {
    flex:5,
    backgroundColor: 'black',
  },
  opraters: {
    flex:2,
    
    backgroundColor: 'gray',
  },
});
