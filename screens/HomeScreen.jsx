import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import WeeklyStats from '../components/WeeklyStats'
import Days from '../components/Days'
import RPM from '../components/RPM'
import ExerciseRPM from '../components/ExerciseRPM'
import WorkoutButton from '../components/WorkoutButton'
import Ads from '../components/Ads'

const HomeScreen = ({ navigation }) => {
  const nagivateToExercise = () => {
    navigation.nagivate('ExerciseDetail', { name: 'ExerciseDetail' })
  }
  return (
    <View style={styles.viewContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.detailContainer}>
          <WeeklyStats />
          <Days />
          <RPM />
          <ExerciseRPM moveTo={nagivateToExercise} />
        </View>
        <View style={styles.buttonContainer}>
          <WorkoutButton
            text={'Record Workout'}
            nagivateToExercise={nagivateToExercise}
          />
          <WorkoutButton text={'+ Plan'} />
        </View>
      </View>
      <View style={styles.adsContainer}>
        <Ads />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'column',
    flexGrow: 5,
    backgroundColor: 'white',
    borderWidth: 0
  },
  adsContainer: {
    flexGrow: 2,
    borderWidth: 1,
    borderColor: 'green'
  },
  contentContainer: {
    flexGrow: 9
  },
  detailContainer: {
    flexGrow: 8
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    flexGrow: 1
  }
})