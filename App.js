import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, {Component} from 'react';
import { AppButton } from './components/ui/AppButton';
import { AppButtonbottom } from './components/ui/appButtonbottom';
import { AppButtonSimbol } from './components/ui/appButtonSimbol';
import * as math from 'mathjs'

const ClearButton=(props)=>(
  <AppButtonSimbol onPress={props.handleClear}>
      {props.children}
  </AppButtonSimbol>
);

const Input = (props)=>(
  <Text style={{
    borderColor: 'gray',
    left: 300,
    bottom: 50,
    fontSize: 30
  }}
  >{props.input}</Text>
)

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
};

export const Button = props => (
  <View style={`styles.buttonwarpper ${
    isOperator(props.children) ? null : "operator"
  }`}
  onPress={() => props.handlePress(props.children)}>
      {props.children}
  </View>
);


export default class App extends Component{
  constructor(props){
      super(props);
  
      this.state={
        input: ''
      }
     
  

  addToInput=val=>{
    setState({input: state.input+ val})
  };

  handleEqual=()=>{
    setState({input: math.evaluate(state.input)})
  }
}
    render(){
      return (
      <View style={styles.container}>
        <View style={styles.calcwrapper}>
         <TextInput onChangeText={Input} ></TextInput>
          <View style={styles.row}>
            <View >
                <ClearButton>C</ClearButton>
            </View>
            <View >
                <AppButtonSimbol onPress={this.addToInput}>%</AppButtonSimbol>
            </View>
            <View >
                <AppButtonSimbol>,</AppButtonSimbol>
            </View>
            <View >
                <AppButtonSimbol>+</AppButtonSimbol>
            </View>  
          </View>
          <View style={styles.row}>
            <View >
                <AppButton>7</AppButton>
            </View>
            <View >
                <AppButton>8</AppButton>
            </View>
            <View >
                <AppButton>9</AppButton>
            </View>
            <View >
                <AppButtonSimbol>/</AppButtonSimbol>
            </View>
          </View>
        <View style={styles.row}>
          <View >
                <AppButton>4</AppButton>
          </View>
          <View >
                <AppButton>5</AppButton>
          </View>
          <View >
                <AppButton>6</AppButton>
          </View>
          <View >
                <AppButtonSimbol>*</AppButtonSimbol>
          </View>
        </View>
        <View style={styles.row}>
          <View >
                <AppButton>1</AppButton>
          </View>
          <View >
                <AppButton>2</AppButton>
          </View>
          <View >
                <AppButton>3</AppButton>
          </View>
          <View >
                <AppButtonSimbol>-</AppButtonSimbol>
          </View>
        </View>
        <View style={styles.row}>
          <View >
                <AppButtonbottom>0</AppButtonbottom>
          </View>
          <View >
                <AppButtonbottom>=</AppButtonbottom>
          </View>
        </View>
      </View>
      </View>
    
    
  
        
      );
    }
  

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top:90
  },
  row:{
    flex: 2,
    flexDirection: 'row', 
    
  },
  calcwrapper:{
    marginVertical: 90
  }
});
