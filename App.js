import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import Ads from './components/Ads'
import Days from './components/Days'
import ExerciseRPM from './components/ExerciseRPM'
import RPM from './components/RPM'
import WeeklyStats from './components/WeeklyStats'
import WorkoutButton from './components/WorkoutButton'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <WeeklyStats />
        <Days />
        <RPM />
        <ExerciseRPM />
        <View style={styles.buttonContainer}>
          <WorkoutButton text={'Record Workout'} />
          <WorkoutButton text={'+ Plan'} />
        </View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.adsContainer}>
        <Ads />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  viewContainer: {
    flexDirection: 'column',
    flexGrow: 5
  },
  adsContainer: {
    flexGrow: 2
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  }
})
