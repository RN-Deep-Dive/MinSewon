import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StateWithClassComponents from './StateWithClassComponents'
import StateWithFunctionalComponents from './StateWithFunctionalComponents'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StateWithClassComponents /> */}
      <StateWithFunctionalComponents/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
