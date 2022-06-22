import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const ExerciseDetail = () => {
  return (
    <View>
      <View style={styles.exerciseContainer}>
        <Text>SOmething nice</Text>
      </View>
      <View style={styles.recordContainer}></View>
    </View>
  )
}

export default ExerciseDetail

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: 'green'
  },
  recordContainer: {
    backgroundColor: 'blue'
  }
})
