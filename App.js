import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Days from './components/Days'
import ExerciseRPM from './components/ExerciseRPM'
import RPM from './components/RPM'
import WeeklyStats from './components/WeeklyStats'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{WeeklyStats}</Text>
        <WeeklyStats />
        <Days />
        <RPM />
        <ExerciseRPM />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // alignItems: 'center's
    // justifyContent: 'center'
  }
})
