import React, { useState } from 'react'
import {
  View,
  Modal,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import WorkoutButton from './WorkoutButton'

const RecordWorkout = ({ modalVisible, handlePress, setModalVisible }) => {
  const workouts = [
    'Front Squat',
    'Back Squat',
    'OverHead Squat',
    'Front Squat',
    'Back Squat',
    'OverHead Squat'
  ]
  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Text>Record your Workout</Text>
            <ScrollView horizontal={true}>
              <View style={styles.workouts}>
                {workouts.map((workout) => (
                  <Text style={styles.workoutText}>{workout}</Text>
                ))}
              </View>
            </ScrollView>
            <View style={styles.imageContainer}>
              <Image source={''} style={styles.image} />
            </View>
            <View>
              <WorkoutButton title={'Next'} handlePress={handlePress} />
            </View>
          </View>
        </View>
      </Modal>
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
    flexGrow: 1,
    width: '100%',
    // height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    marginBottom: 10
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: 'gray'
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
  titleText: {},
  workouts: {
    flexDirection: 'row',
    width: '100%',
    height: 30
    // flex: 1,
    // backgroundColor: 'yellow'
  },
  workoutText: {
    marginRight: 10,
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold'
  }
})
