import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ListView } from "react-native";

const styles = StyleSheet.create({
        bookItem: {
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            borderBottomColor: "#AAAAAA",
            borderBottomWidth: 2,
            padding: 5,
            height: 175
        },
        cover: { flex: 1, height: 150, resizeMode: "contain", margin: 2 },
        info: {
            flex: 3,
            alignItems: "flex-end",
            flexDirection: "column",
            alignSelf: "center",
            padding: 20
            },
        author: { fontSize: 18 },
        title: { fontSize: 18, fontWeight: "bold", textAlign:"right"}
    });
    
    
    class BookItem extends Component 
    {
        static navigationOptions = {
            title: 'BookList',
          };
        render() {
            return (
                <View style={styles.bookItem}>
                <Image style={styles.cover} source={{uri: this.props.coverURL}} />
                <View style={styles.info}>
                <Text style={styles.author}>{this.props.author}</Text>
                <Text style={styles.title}>{this.props.title}</Text>
                </View>
                </View>
            );
        }
    }
    export default BookItem;