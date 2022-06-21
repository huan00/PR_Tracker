import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Days from './components/Days'
import RPM from './components/RPM'
import WeeklyStats from './components/WeeklyStats'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text>{WeeklyStats}</Text>
        </View>
        <WeeklyStats />
        <Days />
        <View>
          <RPM />
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // alignItems: 'center',
    // justifyContent: 'center'
  }
})
