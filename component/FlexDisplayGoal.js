import React, {Component} from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import * as Progress from 'react-native-progress';




class FlexDisplayGoal extends Component{
    static navigationOptions = {
        title: 'Goal View',
      };
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.topBlock}>
                    
                        <Image style={{width: 150, height:150}}
                             source={require('../component/goaldart.png')}>
                        </Image>
                    
                    </View>
                    <View style={styles.middleBlock}>
                        <View style={styles.middleLeft}>
                            <Text style={styles.textPercentage}>
                                    0%
                             </Text>
                            <Text style={styles.textPercentageTitle}>
                                On Track
                            </Text>
                        </View>
                        <View style={styles.middleRight}>
                             <Text style={styles.textPercentage}>
                                100%
                            </Text>
                            <Text style={styles.textPercentageTitle}>
                                Remaining
                            </Text>
                            </View>
                        </View>
                    
                    
                   
               
                
                    <View style={styles.bottomBlock}>

                        <View style={styles.progressLeft}>
                            <Text style={styles.amount}>£150</Text>
                            <Text style={styles.date}>8/19</Text>
                        </View>
                      
                        <View style={styles.progressBar}>
                        
                        
                        <Text style={styles.amount}>£150</Text> 
                        <View style={styles.marker}></View>
                            <Progress.Bar progress={0.5} width={200} borderColor={"rgb(227,223,0)"}
                            borderWidth={4} borderRadius={2} color={"#0c2169"} unfilledColor={"white"}
                            height={40} width={250}>
                                
                            </Progress.Bar>
                            <Text style={styles.date}>8/19</Text>
                        </View>
                        <View style={styles.progressRight}> 
                            <Text style={styles.amount}>£2000</Text>
                            <Text style={styles.date}>11/19</Text> 
                         </View> 
                   
                        
                    </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:80,
        paddingBottom:60,    
        backgroundColor:"#fff"
    },
    topBlock:{
        flex: 2,
          alignItems: "center"
    },
    middleBlock:{
        flex:1,
        flexDirection: "row",
        justifyContent:"space-between",
        textAlign:"center",
        textAlignVertical:"center"
        
    },
    middleLeft:{ 
        alignItems:"center",
        padding: 10,     
        marginLeft:10 
    },
    middleRight:{
        alignItems:"center",
         padding: 10,
         marginRight:10 
    },
    bottomBlock:{
        flex:2,
        flexDirection:"row",
        justifyContent: 'center',
        alignItems:"center",
        padding: 10,
    },
    textPercentage:{
        fontSize:24,
        
        fontWeight:"bold",
        color: "#0c2169"
    },
    textPercentageTitle:{
        fontSize: 18,
        fontWeight: "700",
        color: "rgb(37, 193, 245)"
    },
    progressBar:{
        alignItems:"center"
    },
    progressLeft:{
        padding: 3,
        margin:3,
        alignItems:"center"
    },
    progressRight:{
        padding: 3,
        margin:3,
        alignItems:"center"
    },
    amount:{
        fontSize:14,
        color:"#0c2169"
    },
    date:{
        fontSize:14,
        color:"rgb(37, 193, 245)"
    },
    marker:{
        flex:1,
        height:70,
        
        borderColor:"#b52828",
        borderStyle:"dashed",
        borderWidth:1,
        position:"absolute",
        zIndex:1,
        
    }

    
});

export default FlexDisplayGoal;