import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import InputNumberButton from './InputNumberButton'
const buttons = [
  ['CLEAR','DELETE'],
  ['7' ,'8','9','/'],
  ['4','5','6','*'],
  ['1','2','3','-'],
  ['0','.','=','+'],
];
class App extends Component{
  constructor(){
    super();
    this.initialState = {
      displayValue:'0',
      oprarter:null,
      firstValue:'',
      secondValue:'',
      nextValue:false,
    }
    this.state=this.initialState
  
  }
 renderButtons() {
    let layouts = buttons.map((buttonRows,index) =>{
    let rowItem =buttonRows.map((buttonItem,buttonIndex)=>{
      return <InputNumberButton
      value={buttonItem}
      handleOnPress={this.hundleInPut.bind(this,buttonItem)}
       key={`btn-`+ buttonIndex}/>
    });
    
  return <View style={styles.inputRow} key={'row' + index}>{rowItem}</View>
    });
    return layouts
}

hundleInPut= (input) => {
  const {displayValue,oprarter,initialState,secondValue,firstValue,nextValue}=this.state;
  switch(input){
    case "0":
    case "1":
    case "2":
    case "3":
   case "4":
   case "5":
   case "6":
   case "7":
   case "8":
    case "9":
      this.setState({displayValue: (displayValue ==='0')? input : displayValue + input});
      if(!nextValue){
        this.setState({firstValue:firstValue + input})
      }else{
        this.setState({secondValue:secondValue + input})
      }
      break;
     case "*":
      case "-":
        case "+":
          case "/":
            
              this.setState(
                {
                  nextValue:true,
                  oprarter:input,
                  displayValue: (oprarter !==null ? displayValue.substr(0, displayValue.length - 1) : displayValue )+ input}
                );
               
              break;
              case".":
              let dot=displayValue.toString().slice(-1)
              this.setState({
                
                displayValue:(dot!=='.'?displayValue + input:displayValue)
              })

              if(!nextValue){
                this.setState({firstValue:firstValue + input})
              }else{
                this.setState({secondValue:secondValue + input})
              }

              break;
              case'=':
              let formatOprater=(oprarter =='x')? '*':(oprarter== '÷')?'/':oprarter;
              let result = eval(firstValue + formatOprater + secondValue);
              this.setState({
                displayValue:result % 1 === 0 ? result:result.toFixed(2),
                firstValue:result % 1 === 0 ? result:result.toFixed(2),
                secondValue:"",
                oprarter:null,
                nextValue:false,
              })
              break;
              case "DELETE":
                let string = displayValue.toString();
                let deletString= string.substr(0,string.length - 1);
                let length=string.length
               this.setState(
               { displayValue: (length == 1? "0":deletString),
               firstValue:(length == 1? "":deletString)
              })
                break;
                case "CLEAR":
                this.setState(this.initialState);
                break;

  }

}
  render(){
 
  return (
    
    <View style={styles.container}>
     
      <View style={styles.calculateContainer}>
  <Text style={styles.textOutPut}>{this.state.displayValue}</Text>
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
  },
  textOutPut:{
    fontSize:40
  }
  
});
