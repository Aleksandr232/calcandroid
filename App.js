import { StyleSheet, Text, View, Button } from 'react-native';
import React, {Component} from 'react';
import * as math from 'mathjs'


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
          <View style={styles.row}>
              <View style={styles.button}>
                  <Button title='C'></Button>
              </View>
              <View style={styles.button}>
                  <Button title='%'></Button>
              </View>
              <View style={styles.button}>
                  <Button title=','></Button>
              </View>
              <View style={styles.button}>
                  <Button title='+'></Button>
                </View>
          </View>
          <View style={styles.row}>
              <View style={styles.button}>
                  <Button title='7'></Button>
              </View>
              <View style={styles.button}>
                  <Button title='8'></Button>
              </View>
              <View style={styles.button}>
                  <Button title='9'></Button>
              </View>
              <View style={styles.button}>
                  <Button title='/'></Button>
                </View>
          </View>
          <View style={styles.row}>
              <View style={styles.button}>
                  <Button title='4'></Button>
              </View>
              <View style={styles.button}>
                  <Button title='5'></Button>
              </View>
              <View style={styles.button}>
                  <Button title='6'></Button>
              </View>
              <View style={styles.button}>
                  <Button title='*'></Button>
                </View>
          </View>
          <View style={styles.row}>
              <View style={styles.button}>
                  <Button title='1'></Button>
              </View>
              <View style={styles.button}>
                  <Button title='2'></Button>
              </View>
              <View style={styles.button}>
                  <Button  title='3'></Button>
              </View>
              <View style={styles.button}>
                  <Button title='-'></Button>
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
  },
  row:{
    flex: 1,
    flexDirection: 'row',
    
  },
  button:{
    width: 100,
    height: 250
  },
  calcwrapper:{
    height: 141
  }
});
