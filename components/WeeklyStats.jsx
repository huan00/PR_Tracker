import { useState } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const WeeklyStats = () => {
  const WeeklyStats = 'Weekly Stats'
  const [workouts, setWorkouts] = useState(4)
  const [activeDays, setActiveDays] = useState(6)

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.weeklyStats}>{WeeklyStats}</Text>
      </View>
      <View style={styles.workoutContainer}>
        <View style={styles.workoutContainerStats}>
          <View style={styles.workoutStats}>
            <Text style={styles.workoutSessions}>{workouts}</Text>
            <Text>Workouts</Text>
          </View>
          <View>
            <Text style={styles.workoutSessions}>{activeDays}</Text>
            <Text>Active Days</Text>
          </View>
        </View>
        <View>
          <Image
            style={styles.avatarImg}
            source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }}
          />
        </View>
      </View>
    </View>
  )
}

export default WeeklyStats

const styles = StyleSheet.create({
  avatarImg: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  container: {
    width: '100%'
  },
  weeklyStats: {
    fontSize: 24
  },
  workoutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  workoutContainerStats: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  workoutSessions: {
    fontSize: 36
  },
  workoutStats: {
    width: '40%'
    // alignContent: 'center',
    // alignItems: 'space-between'
  }
})
