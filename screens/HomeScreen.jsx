import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import WeeklyStats from '../components/WeeklyStats'
import Days from '../components/Days'
import RPM from '../components/RPM'
import ExerciseRPM from '../components/ExerciseRPM'
import WorkoutButton from '../components/WorkoutButton'
import Ads from '../components/Ads'
import RecordWorkout from '../components/RecordWorkout'
import RecordWorkoutDetail from '../components/RecordWorkoutDetail'

const HomeScreen = ({ navigation }) => {
  const [myWorkouts, setMyWorkouts] = useState([
    { name: 'Front Squat', date: '6/11/22', rpm: '1', weight: '120lb' }
  ])

  const [modalVisible, setModalVisible] = useState(false)
  const handleRecordWorkout = () => {
    setModalVisible((modalVisible) => !modalVisible)
  }
  const handleAddWorkout = (newWorkout) => {
    setMyWorkouts((myWorkouts) => [...myWorkouts, newWorkout])
  }
  console.log(myWorkouts)
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
              setModalVisible={setModalVisible}
              handlePress={handleRecordWorkout}
              handleAddWorkout={handleAddWorkout}
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
