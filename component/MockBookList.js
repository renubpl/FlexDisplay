import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import BookItem from "./BookItem";
// import NYT from "./NYT";

const mockBooks = [
        {
            rank: 1,
            title: "GATHERING PREY",
            author: "John Sandford",
            book_image:
            "http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9780399168796.jpg"
            },
        {
            rank: 2,
            title: "MEMORY MAN",
            author: "David Baldacci",
            book_image:
            "http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9781455586387.jpg"
        },
        {
            rank: 3,
            title: "HARRY POTTER AND THE PHILOSOPHERS STONE",
            author: "J.KRowling",
            book_image:
                    "https://kbimages1-a.akamaihd.net/ca35b0df-52d8-44cd-ad10-1d1ae7828317/1200/1200/False/harry-potter-and-the-philosopher-s-stone-3.jpg"                  
         },
         {
            rank: 4,
            title: "ORIGIN",
            author: "Dan Brown",
            book_image:
                    "https://danbrown.com/wp-content/uploads/2017/06/US_Big.jpg"                  
         },
         {
            rank: 5,
            title: "DA VINCI CODE",
            author: "Dan Brown",
            book_image:
                    "https://cdn.shopify.com/s/files/1/0682/8189/products/The-Da-Vinci-Code_1024x1024.png?v=1449828152"                  
         },
         {
            rank: 6,
            title: "CRUCIBLE",
            author: "JAMES Rollins",
            book_image:
                    "https://images-na.ssl-images-amazon.com/images/I/51ze1aN8HfL._SX329_BO1,204,203,200_.jpg"                  
         }

        ];

class BookList extends Component
{
    constructor(props) {
    super(props);
         this.state = { data: this._addKeysToBooks(mockBooks) };
    // this.state = { data: [] };
    }

    // componentDidMount() {
    //     this._refreshData();
    // }

    
    _renderItem = ({ item }) => {
            return (
            <BookItem
            coverURL={item.book_image}
            title={item.key}
            author={item.author}
            />
         );
    };

    _addKeysToBooks = books => {
        // Takes the API response from the NYTimes
        // and adds a key property to the object
        // for rendering purposes
        return books.map(book => {
        return Object.assign(book, { key: book.title });
        });
        };

    //     _refreshData = () => {
    //         NYT.fetchBooks().then(books => {
    //         this.setState({ data: this._addKeysToBooks(books) });
    //         });
            
    //    };
        
        render() {
        return <FlatList data={this.state.data} renderItem={this._renderItem} />;
        }
        }
        
const styles = StyleSheet.create({ root:{
    marginTop:20,
    padding:10,
  },container: { flex: 1, paddingTop: 22 } });

export default BookList;