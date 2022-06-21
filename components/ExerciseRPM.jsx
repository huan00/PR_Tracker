import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

const ExerciseRPM = () => {
  const excerise = 'Front Squat'
  const weight = '45KG'
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text>{excerise}</Text>
          <Text>{weight}</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ExerciseRPM

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '45%',
    padding: 16
  },
  textContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 16,
    marginBottom: 15
  }
})
