import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

const RPM = () => {
  const RPM = ['1 RPM', '4 RPM', '6 RPM', '8 RPM']
  const record = 'Record'
  return (
    <View style={styles.container}>
      <View style={styles.record}>
        <Text style={styles.rpmText}>{record}</Text>
      </View>
      <View style={styles.rpmContainer}>
        <ScrollView horizontal={true} style={styles.rpmScroll}>
          <View style={{ flexDirection: 'row' }}>
            {RPM.map((rpm) => (
              <Text style={styles.rpmText}>{rpm}</Text>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default RPM

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    flexDirection: 'row',
    marginHorizontal: 16,
    paddingHorizontal: 16,
    justifyContent: 'space-between'
  },
  record: {
    width: '30%',
    height: 40
  },
  rpmContainer: {
    flexDirection: 'row',
    width: '70%',
    paddingLeft: 5,
    height: 40
  },
  rpmText: {
    fontSize: 24,
    paddingRight: 16,
    color: 'black'
  },
  rpmScroll: {}
})
