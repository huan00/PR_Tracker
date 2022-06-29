import React, { useState } from 'react'
import {
  View,
  Modal,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput
} from 'react-native'
import WorkoutButton from './WorkoutButton'
import RecordWorkoutDetail from './RecordWorkoutDetail'

const RecordWorkout = ({
  workoutModal,
  handlePress,
  handleAddWorkout,
  barbellExercise,
  getStoredWorkout,
  weightSelectModal,
  setWeightSelectModal
}) => {
  const [searchExercises, setSearchExercises] = useState('')
  const [selectedWorkout, setSelectWorkout] = useState()
  const [newWorkout, setNewWorkout] = useState({
    name: '',
    date: '',
    rpm: 1,
    weight: 100
  })
  const [workoutDetailModal, setWorkoutDetailModal] = useState(false)
  const [selectedWOIdx, setSelectedWOIdx] = useState('')

  const handleNewWorkout = (workout, idx) => {
    setNewWorkout((newWorkout) => ({
      ...newWorkout,
      name: workout.name
    }))
    setSelectWorkout(workout)
    setSelectedWOIdx(idx)
  }

  const handleNext = () => {
    handlePress()
    setWeightSelectModal((weightSelectModal) => !weightSelectModal)
    setSelectedWOIdx('')
    setSearchExercises('')
    setSelectWorkout('')
  }

  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={workoutModal} transparent={true}>
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Text>Record your Workout</Text>
            <TextInput
              placeholder="Search for an exercise"
              style={styles.searchExercise}
              onChangeText={(value) => setSearchExercises(value.toLowerCase())}
            />
            <ScrollView horizontal={true}>
              <View style={styles.workouts}>
                {searchExercises
                  ? barbellExercise.map(
                      (exercise, idx) =>
                        exercise.name.includes(searchExercises) && (
                          <Text
                            style={
                              selectedWOIdx === idx
                                ? styles.selectWorkout
                                : styles.workoutText
                            }
                            key={idx}
                            onPress={() => handleNewWorkout(exercise, idx)}
                          >
                            {exercise.name}
                          </Text>
                        )
                    )
                  : barbellExercise.map((exercise, idx) => (
                      <Text
                        key={idx}
                        // style={styles.workoutText}
                        style={
                          selectedWOIdx === idx
                            ? styles.selectWorkout
                            : styles.workoutText
                        }
                        onPress={() => handleNewWorkout(exercise, idx)}
                      >
                        {exercise.name}
                      </Text>
                    ))}
              </View>
            </ScrollView>
            <View style={styles.imageContainer}>
              {selectedWorkout ? (
                <Image
                  source={{ uri: selectedWorkout.gifUrl }}
                  style={styles.image}
                />
              ) : (
                <Text style={styles.imageLoadingText}>Select WorkOut</Text>
              )}
            </View>
            <View>
              <WorkoutButton title={'Next'} handlePress={handleNext} />
            </View>
          </View>
        </View>
      </Modal>
      <RecordWorkoutDetail
        weightSelectModal={weightSelectModal}
        setWeightSelectModal={setWeightSelectModal}
        setNewWorkout={setNewWorkout}
        newWorkout={newWorkout}
        handleAddWorkout={handleAddWorkout}
        getStoredWorkout={getStoredWorkout}
      />
    </View>
  )
}

export default RecordWorkout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'white'
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
    marginBottom: 10
  },
  image: {
    width: 200,
    height: 200
  },
  imageLoadingText: {
    fontSize: 36,
    marginBottom: 100
  },
  modalView: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'rgba(52,52,52, .8)',
    position: 'absolute',
    bottom: 0
  },
  modalContent: {
    height: '50%',
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    padding: 16
  },
  selectWorkout: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'purple',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 5,
    marginRight: 10
  },
  titleText: {},
  searchExercise: {
    width: '100%',
    fontSize: 24,
    padding: 8
  },
  workouts: {
    flexDirection: 'row',
    width: '100%',
    height: 30
  },
  workoutText: {
    marginRight: 10,
    marginTop: 10,
    fontSize: 18,
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  }
})
