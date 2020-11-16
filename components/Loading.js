import React, { Component } from "react";
import {
   Text,
   StyleSheet,
   View,
   TouchableOpacity,
   FlatList,
   ActivityIndicator,
} from "react-native";

export default class Loading extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: "Loading Component",
         number: 1,
         isLoading: true,
         users: [],
      };
   }

   changeText = () => {
      this.setState({
         name: "Hello ",
         number: this.state.number + 1,
      });
   };

   componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((res) => res.json())
         .then((data) => {
            this.setState({
               isLoading: false,
               users: data,
            });
         });
   }

   render() {
      if (this.state.isLoading)
         return (
            <View style={styles.container}>
               <ActivityIndicator size="large" color="red"></ActivityIndicator>
            </View>
         );
      return (
         <View style={styles.container}>
            {/* <Text> {this.state.name}</Text>
            <Text> {this.state.number}</Text>
            <TouchableOpacity onPress={this.changeText}>
               <Text>Click Me</Text>
            </TouchableOpacity> */}
            <FlatList
               data={this.state.users}
               renderItem={({ item }) => <Text>{item.name}</Text>}
               keyExtractor={(item) => item.id}
            />
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
});
