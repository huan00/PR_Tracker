import React, { useReducer, useState } from 'react'
import {
  View,
  Modal,
  Text,
  ScrollView,
  TextInput,
  StyleSheet
} from 'react-native'
import WorkoutButton from './WorkoutButton'

const initialWeight = { weight: 100 }
const initialRep = { rep: 1 }

const reducerWeight = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { weight: parseInt(state.weight) + 1 }
    case 'decrement':
      return { weight: parseInt(state.weight) - 1 }
    case 'input':
      return { weight: parseInt(action.payload) }
    default: {
      return { weight: state.weight }
    }
  }
}
const reducerRep = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { rep: parseInt(state.rep) + 1 }
    case 'decrement':
      return { rep: parseInt(state.rep) - 1 }
    case 'input':
      return { rep: parseInt(action.payload) }
    default: {
      return { rep: state.rep }
    }
  }
}

const RecordWorkoutDetail = ({
  workoutDetailModal,
  setNewWorkout,
  newWorkout,
  handleAddWorkout,
  setWorkoutDetailModal
}) => {
  const [weight, dispatchWeight] = useReducer(reducerWeight, initialWeight)
  const [rep, dispatchRep] = useReducer(reducerRep, initialRep)

  const calendar = (days) => {
    const week = { Su: 0, M: 1, T: 2, W: 3, Th: 4, F: 5, Sa: 6 }
    let dayOfWeek = new Date().getDay()
    let dateOfMonth = new Date().getDate()
    let start = dateOfMonth - dayOfWeek
    let date = []

    for (let key in week) {
      date.push(key + start++)
    }

    return date
  }

  const handleWeight = (type) => {
    dispatchWeight({ type: type })
    setNewWorkout((newWorkout) => ({ ...newWorkout, weight: weight.weight }))
    console.log(newWorkout)
  }

  const handleWeightInput = (type, value) => {
    dispatchWeight({
      type: type,
      payload: parseInt(value)
    })
    setNewWorkout((newWorkout) => ({ ...newWorkout, weight: weight.weight }))
    console.log(newWorkout)
  }

  const handleRep = (type) => {
    dispatchRep({ type: type })
    setNewWorkout((newWorkout) => ({ ...newWorkout, rpm: rep.rep }))
    console.log(newWorkout)
  }

  const handleRepInput = (type, value) => {
    dispatchRep({ type: type, payload: parseInt(value) })
    setNewWorkout((newWorkout) => ({ ...newWorkout, rpm: rep.rep }))
    console.log(newWorkout)
  }

  const handleDate = (date) => {
    setNewWorkout((newWorkout) => ({ ...newWorkout, date: date }))
    console.log(newWorkout)
  }

  const handleSave = () => {
    handleAddWorkout(newWorkout)
    setWorkoutDetailModal(false)
    console.log(workoutDetailModal)
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={workoutDetailModal}
        transparent={true}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <View>
              <Text style={styles.contentText}>Front Squat</Text>
            </View>
            <View style={styles.setTitle}>
              <Text style={styles.contentText}>Total Weight(lb)</Text>
              <Text style={styles.contentText}>Rep max</Text>
            </View>
            <View style={styles.setTitle}>
              <View style={styles.setTitle}>
                <View>
                  <Text
                    style={styles.adjustText}
                    onPress={() => handleWeight('increment')}
                  >
                    +
                  </Text>
                  <Text
                    style={styles.adjustText}
                    onPress={() => handleWeight('decrement')}
                  >
                    -
                  </Text>
                </View>
                <View style={{ height: 50, width: 100 }}>
                  <TextInput
                    style={styles.weightRep}
                    onChangeText={(value) => handleWeightInput('input', value)}
                    value={String(weight.weight)}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={styles.setTitle}>
                <View>
                  <TextInput
                    style={styles.weightRep}
                    onChangeText={(value) => handleRepInput('input', value)}
                    value={String(rep.rep)}
                    keyboardType="numeric"
                  />
                </View>
                <View>
                  <Text
                    style={styles.adjustText}
                    onPress={() => handleRep('increment')}
                  >
                    +
                  </Text>
                  <Text
                    style={styles.adjustText}
                    onPress={() => handleRep('decrement')}
                  >
                    -
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.barbell}>
              <View style={styles.barbellBar}>
                <View style={styles.barbellWeight}></View>
                <View style={{ justifyContent: 'flex-end' }}>
                  <Text>45</Text>
                </View>
                <View style={styles.barbellWeight}></View>
              </View>
              <View style={styles.barbellBarBottom}>
                <View style={styles.barbellWeight}>
                  <Text style={styles.barbellText}>
                    {(weight.weight - 45) / 2}
                  </Text>
                </View>
                <View style={styles.barbellWeight}>
                  <Text style={styles.barbellText}>
                    {(weight.weight - 45) / 2}
                  </Text>
                </View>
              </View>
            </View>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{ paddingBottom: 5, paddingTop: 5 }}
            >
              <View style={styles.calendar}>
                {calendar(30).map((day, idx) => (
                  <Text
                    style={styles.calendarText}
                    key={idx}
                    onPress={() => handleDate(day)}
                  >
                    {day}
                  </Text>
                ))}
              </View>
            </ScrollView>
            <View>
              <WorkoutButton
                title={'Save'}
                handlePress={() => handleSave(newWorkout)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default RecordWorkoutDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'white'
  },
  adjustText: {
    width: 20,
    height: 20,
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: 'grey',
    borderRadius: 50,
    marginBottom: 2
  },
  barbell: {
    // backgroundColor: 'blue',
    width: '100%',
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'space-between'
  },
  barbellBar: {
    borderBottomWidth: 2,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  barbellBarBottom: {
    borderTopWidth: 2,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  barbellText: {
    textAlign: 'center',
    fontSize: 24
  },
  barbellWeight: {
    backgroundColor: 'rgb(47,128,237)',
    borderWidth: 1,
    height: 50,
    width: 50
  },
  calendar: {
    flexDirection: 'row',
    height: 30
  },
  calendarText: {
    fontSize: 18,
    borderColor: 'rgb(224,224,224)',
    borderWidth: 1,
    marginRight: 5,
    padding: 5
  },
  contentText: {
    fontSize: 18
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
  setTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  weightRep: {
    fontSize: 36,
    marginHorizontal: 5,
    width: 70,
    height: 50,
    textAlign: 'center'
  }
})
