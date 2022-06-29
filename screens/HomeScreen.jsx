import React, { useState, useEffect } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import AsyncStorge from '@react-native-async-storage/async-storage'

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
  const [storedWorkouts, setStoredWorkouts] = useState()
  const [workoutModal, setworkoutModal] = useState(false)
  const [weightSelectModal, setWeightSelectModal] = useState(false)
  const [barbellExercise, setBarbellExercise] = useState([])
  const [storedBarbellExercises, setStoredBarbellExercises] = useState([])

  useEffect(() => {
    getStoredWorkout()
    getStoredExercises()
    // if (!storedBarbellExercises) {
    //   console.log(storedBarbellExercises)
    //   getWorkoutFromAPI()
    // }
  }, [weightSelectModal])

  const getStoredWorkout = async () => {
    try {
      const workouts = await AsyncStorge.getItem('@workout_Key')
      workouts != null ? setStoredWorkouts(JSON.parse(workouts)) : null
    } catch (error) {
      console.log(error)
    }
  }
  const getStoredExercises = async () => {
    try {
      const storedExcerises = await AsyncStorge.getItem('@APIExercise')
      storedExcerises != null
        ? setStoredBarbellExercises(JSON.parse(storedExcerises))
        : null
    } catch (error) {
      console.log(error)
    }
  }

  const handleRecordWorkout = () => {
    setworkoutModal((workoutModal) => !workoutModal)
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

  const storeAPIData = async (data) => {
    try {
      console.log(data)
      let APIExercise = JSON.stringify(data)
      await AsyncStorge.setItem('@APIExercise', APIExercise)
    } catch (error) {
      console.log(error)
    }
  }

  if (barbellExercise.length > 0) {
    storeAPIData(barbellExercise)
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
                {storedWorkouts &&
                  storedWorkouts.map((workout, idx) => (
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
              workoutModal={workoutModal}
              weightSelectModal={weightSelectModal}
              setWeightSelectModal={setWeightSelectModal}
              handlePress={handleRecordWorkout}
              handleAddWorkout={handleAddWorkout}
              barbellExercise={storedBarbellExercises}
              getStoredWorkout={getStoredWorkout}
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
