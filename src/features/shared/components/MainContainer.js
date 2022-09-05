import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MainContainer = ({ children }) => {
  return (
    // <View style={styles.container}>
    //   {/* <StatusBar barStyle='dark-content' backgroundColor={'white'} /> */}
    //   <StatusBar translucent style="auto" />
    //   {children}
    // </View>

    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle='dark-content' backgroundColor={'white'} /> */}
      <StatusBar translucent style="auto" />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
});

export default MainContainer;
