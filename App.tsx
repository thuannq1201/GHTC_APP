import * as React from "react";
import { SafeAreaView, View } from "react-native";
import RootNavigator from "./src/navigation/RootNavigator";


function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootNavigator/>
    </SafeAreaView>
  );
}

export default App;
