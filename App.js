import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Days from './components/Days'
import WeeklyStats from './components/WeeklyStats'

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>{WeeklyStats}</Text>
      </View>
      <WeeklyStats />
      <Days />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
