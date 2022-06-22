import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const WorkoutButton = ({ title, handlePress }) => {
  return (
    <View>
      <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{title}</Text>
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
