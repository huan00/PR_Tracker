import React, { useState } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

const Days = () => {
  const days = ['S', 'M', 'T', 'W', 'Th', 'F', 'S']
  return (
    <View style={styles.container}>
      {days.map((day) => (
        <View style={styles.dayContainer}>
          <Text style={styles.day}>{day}</Text>
        </View>
      ))}
    </View>
  )
}

export default Days

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginTop: 20
  },
  day: {
    fontSize: 16,
    textAlign: 'center',
    color: 'rgb(130,130,130)'
  },
  dayContainer: {
    borderRadius: 50,
    width: 40,
    height: 40,
    backgroundColor: 'rgb(242,242,242)',
    justifyContent: 'center'
  }
})
