import React from "react";
import {
   View,
   Text,
   Image,
   StyleSheet,
   TouchableOpacity,
   ActivityIndicator,
} from "react-native";

class Card extends React.Component {
   render() {
      // return (
      //    <View style={{ flex: 1 }}>
      //       <ActivityIndicator size="large" color="blue"></ActivityIndicator>
      //    </View>
      // );
      return (
         <View style={styles.container}>
            <Text>{this.props.name}</Text>
            <Image
               // source={{ uri: `https://robohash.org/${this.props.id}` }}
               source={this.props.imgUrl}
               style={{ width: 100, height: 100 }}
            ></Image>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      alignItems: "center",
      backgroundColor: "red",
      marginBottom: 20,
   },
});

export default Card;
