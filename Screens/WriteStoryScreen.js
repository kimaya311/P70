import * as React from 'react'
import {Header} from 'react-native-elements'
import {TextInput,Text,View,TouchableOpacity,StyleSheet} from 'react-native'
export default class WriteStoryScreen extends React.Component{
render(){
    return (
        <View>
          <Header
          backgroundColor={'peach'}
          centerComponent={{
            text: 'STORYTIME!',
            style: { color: 'blue', fontSize: 20 },
          }}
        />
    <TextInput style={styles.inputBox} placeholder='Story Title'/>
    <TextInput style={styles.inputBox} placeholder='Author Name'/>
    <TextInput style={styles.inputBox} multiline={true} placeholder='Write Story'/>
    <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.displayText}>
        Submit
        </Text> 
    </TouchableOpacity>
    
        </View>
    )
    }
};

const styles=StyleSheet.create({
    inputBox: {
        width:500,
        height:40,
        fontSize:20,
        marginLeft:400,
        marginTop:100
      },
      submitButton: {
        backgroundColor:'orange' ,
        width:100,
        height:40,
        marginLeft:400,
        marginTop:100
      },
      displayText: {
        padding:10,
        fonstSize:20,
        textAlign:'center',
        fontWeigth:'bold',
        color:'blue'
    }
})