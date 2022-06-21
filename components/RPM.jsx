import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

const RPM = () => {
  const RPM = ['1 RPM', '4 RPM', '6 RPM', '8 RPM']
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.rpmText}>Record</Text>
      </View>
      <ScrollView horizontal="true">
        <View style={styles.rpmContainer}>
          {RPM.map((rpm) => (
            <Text style={styles.rpmText}>{rpm}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default RPM

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginHorizontal: 16,
    paddingHorizontal: 16,
    justifyContent: 'space-between'
  },
  rpmContainer: {
    width: '70%',
    flexDirection: 'row',
    paddingLeft: 16
    // justifyContent: 'space-between'
  },
  rpmText: {
    fontSize: 24,
    paddingRight: 16
  }
})
