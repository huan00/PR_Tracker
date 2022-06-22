import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const WorkoutButton = ({ text, navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ExerciseDetail', { name: 'exercise' })
        }
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default WorkoutButton

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'rgb(51,51,51)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white'
  }
})
