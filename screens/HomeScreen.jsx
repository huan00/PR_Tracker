import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Text
} from 'react-native'

import WeeklyStats from '../components/WeeklyStats'
import Days from '../components/Days'
import RPM from '../components/RPM'
import ExerciseRPM from '../components/ExerciseRPM'
import WorkoutButton from '../components/WorkoutButton'
import Ads from '../components/Ads'
import RecordWorkout from '../components/RecordWorkout'

const HomeScreen = ({ navigation }) => {
  const [myWorkouts, setMyWorkouts] = useState([
    { name: 'Front Squat', date: '6/11/22', rpm: '1', weight: '120' }
  ])
  const [modalVisible, setModalVisible] = useState(false)
  const [barbellExercise, setBarbellExercise] = useState([])

  useEffect(() => {
    getWorkoutFromAPI()
  }, [])

  const handleRecordWorkout = () => {
    setModalVisible((modalVisible) => !modalVisible)
  }

  const handleAddWorkout = (newWorkout) => {
    setMyWorkouts((myWorkouts) => [...myWorkouts, newWorkout])
  }

  const getWorkoutFromAPI = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '93ca3a18dbmshe726aeae2cb1c33p1ec27ajsn9fc9e9dc0389',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    }
    fetch(
      'https://exercisedb.p.rapidapi.com/exercises/equipment/barbell',
      options
    )
      .then((res) => res.json())
      .then((res) => setBarbellExercise(res))
      .catch((err) => console.error(err))
  }

  return (
    <SafeAreaView>
      <View style={styles.viewContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.detailContainer}>
            <WeeklyStats />
            <Days />
            <RPM />
            <View style={{ height: 200 }}>
              <ScrollView>
                {myWorkouts.map((workout, idx) => (
                  <ExerciseRPM
                    navigation={navigation}
                    name={workout.name}
                    weight={workout.weight}
                    key={idx}
                  />
                ))}
              </ScrollView>
            </View>
            <RecordWorkout
              modalVisible={modalVisible}
              handlePress={handleRecordWorkout}
              handleAddWorkout={handleAddWorkout}
              barbellExercise={barbellExercise}
            />
          </View>
          <View style={styles.buttonContainer}>
            <WorkoutButton
              title="Record Workout"
              handlePress={handleRecordWorkout}
            />
            <WorkoutButton title={'+ Plan'} />
          </View>
        </View>
        <View style={styles.adsContainer}>
          <Ads />
        </View>
      </View>
    </SafeAreaView>
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
