import React, {Component} from "react";
import {StyleSheet, Button,TouchableHighlight, Text, View, Image} from "react-native";

class Counter extends Component{
        constructor(props){
            super(props);
    
        }
        render(){
            return(
                <View style={styles.container}>
                    <TouchableHighlight onPress={this.props.increment}>
                        <View style={styles.button}>
                            <Text style={styles.counter}>Increment Counter</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.viewCount}>
                        <Text style={styles.counterNumber}>{this.props.count}</Text>
                    </View>
                </View>
            );
        }

}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    button:{
        alignItems:"center",
        justifyContent:"center",
        width:200,
        height:50,
        backgroundColor:"rgba(227, 57, 57,0.6)"
    },
    counter:{
        fontSize: 20,
        fontWeight: "bold",
        color:"#fff"
    },
    counterNumber:{
        fontSize: 30,
        fontWeight: "bold",
        color:"#000"
    },
    viewCount:{
        padding: 10,

    }

})

export default Counter;