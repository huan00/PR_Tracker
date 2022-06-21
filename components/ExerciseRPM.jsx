import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ExerciseRPM = () => {
  const excerise = 'Front Squat'
  const weight = '45KG'
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>{excerise}</Text>
        <Text>{weight}</Text>
      </View>
    </View>
  )
}

export default ExerciseRPM

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16
  },
  textContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 16
  }
})
