import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import  {Header} from 'react-native-elements'
import * as Speech from 'expo-speech';
import {SafeAreaProvider} from "react-native-safe-area-context";

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      name: ''
    }
  }
  speak=()=>{
    var thingToSay = this.state.name
    Speech.speak(thingToSay)
  }
render(){
  return(
    <SafeAreaProvider>
    <View style={styles.container}>
   <Header
      backgroundColor={'rgb(0,184,192)'}
      centerComponent={{text:'Text to speech convertor', style:{color:'0', fontSize:15, fontWeight:'bold'}}}
      />
     <Text style={{fontSize: 20,fontWeight: "bold",marginLeft: 100}}>Enter The Word</Text>
     <TextInput style ={styles.formTextInput}
     onChangeText={(text)=>{ 
       this.setState({ 
          name:text 
          }) 
          }} 
          value={this.state.name} 
          />
          <TouchableOpacity style={styles.button}
          onPress={()=>{this.speak()}}>
          <Text style={{fontWeight: 'bold', 
    alignSelf: "center",
    fontSize: 20}}>Click Here</Text>
          </TouchableOpacity>
    </View>  
    </SafeAreaProvider>
  )
}
}
const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: 'white',
  },
  formTextInput:{
    width:"70%",
    height:35,
    alignSelf:'center',
    borderRadius:10,
    borderWidth:4,
    marginTop:20,
    padding:10,
  },
  button:{
      backgroundColor: 'rgb(0,184,192)',
      marginTop:10, 
      marginLeft:100,
      width:150,
      height:45,
      alignItems:"center",
      justifyContent:"center",
      borderRadius: 15,  
      borderWidth: 2  
  },
  buttonText:{
    fontWeight: 'bold',
    alignSelf: "center",
    fontSize: 20
  }
})