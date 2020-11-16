import React from "react";
import {
   StyleSheet,
   Text,
   View,
   SafeAreaView,
   TouchableOpacity,
   ScrollView,
   ActivityIndicator,
} from "react-native";

import Card from "./components/Card";
import Loading from "./components/Loading";

export default function App() {
   const clickMe = () => {
      alert("Hello");
   };
   return (
      <SafeAreaView style={styles.container}>
         <Loading></Loading>
         {/* <ScrollView>
            <Card name="John" id="1" imgUrl={require("./assets/1.jpg")}></Card>
            <Card name="Kity" id="2" imgUrl={require("./assets/2.jpg")}></Card>
            <Card name="Yushi" id="3" imgUrl={require("./assets/1.jpg")}></Card>
         </ScrollView> */}

         {/* <View style={{ flex: 1 }}><Card></Card></View> */}
         {/* <View style={{ flex: 1, alignItems: "center" }}>
            <TouchableOpacity
               style={styles.btnClickContainer}
               onPress={clickMe}
            >
               <Text
                  style={{
                     textAlign: "center",
                     color: "#fff",
                  }}
               >
                  Click me
               </Text>
            </TouchableOpacity>
         </View> */}
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: 20,
   },
   btnClickContainer: {
      backgroundColor: "darkslateblue",
      paddingVertical: 15,
      paddingHorizontal: 20,
      width: 120,
   },
});
