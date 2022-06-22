import React from 'react'
import { View, Modal, Text, ScrollView, Image, StyleSheet } from 'react-native'
import WorkoutButton from './WorkoutButton'

const RecordWorkoutDetail = () => {
  const calendar = (days) => {
    let date = []
    for (let i = 1; i < days; i++) {
      date.push(i)
    }
    return date
  }

  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={false} transparent={true}>
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
                  <Text style={styles.adjustText}>+</Text>
                  <Text style={styles.adjustText}>-</Text>
                </View>
                <View>
                  <Text style={styles.weightRep}>145</Text>
                </View>
              </View>
              <View style={styles.setTitle}>
                <View>
                  <Text style={styles.weightRep}>1</Text>
                </View>
                <View>
                  <Text style={styles.adjustText}>+</Text>
                  <Text style={styles.adjustText}>-</Text>
                </View>
              </View>
            </View>
            <View style={styles.barbell}>
              <View style={styles.barbellBar}>
                <View style={styles.barbellWeight}></View>
                <View style={styles.barbellWeight}>
                  <Text>50</Text>
                </View>
              </View>
              <View>
                <View style={styles.barbellWeight}></View>
                <View style={styles.barbellWeight}>
                  <Text>50</Text>
                </View>
              </View>
            </View>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{ paddingBottom: 5, paddingTop: 5 }}
            >
              <View style={styles.calendar}>
                {calendar(30).map((day) => (
                  <Text style={styles.calendarText}>{day}</Text>
                ))}
              </View>
            </ScrollView>
            <View>
              <WorkoutButton title={'Save'} />
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
    alignItems: 'space-between',
    flexDirection: 'row'
  },
  barbellBar: {},
  barbellWeight: {
    backgroundColor: 'rgb(47,128,237)',
    width: 50,
    height: 50
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
    marginHorizontal: 5
  }
})
