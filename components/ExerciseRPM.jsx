import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Touchable,
  TouchableOpacity
} from 'react-native'

const ExerciseRPM = ({ navigation, name, weight }) => {
  // const excerise = 'Front Squat'
  // const weight = '45KG'

  const navigate = () => {}
  return (
    // <View style={styles.container}>
    <TouchableOpacity
      style={styles.textContainer}
      onPress={() => navigation.navigate('WorkoutHistory')}
    >
      <Text>{name}</Text>
      <Text>{weight}</Text>
    </TouchableOpacity>
    // </View>
  )
}

export default ExerciseRPM

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
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
    marginBottom: 10
  }
})
