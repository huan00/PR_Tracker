import { useState } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const WeeklyStats = () => {
  const WeeklyStats = 'Plan Progress'
  const [workouts, setWorkouts] = useState(4)
  const [activeDays, setActiveDays] = useState(6)

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.avatarImg}
          source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }}
        />
      </View>
      <View style={styles.title}>
        <Text style={styles.weeklyStats}>{WeeklyStats}</Text>
      </View>
      <View style={styles.workoutContainer}>
        <View style={styles.workoutContainerStats}>
          <View style={styles.workoutStats}>
            <Text style={styles.workoutSessions}>{workouts}</Text>
            <Text style={styles.workoutSessionsText}>Workouts</Text>
          </View>
          <View style={styles.workoutStats}>
            <Text style={styles.workoutSessions}>{activeDays}</Text>
            <Text style={styles.workoutSessionsText}>Active Days</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default WeeklyStats

const styles = StyleSheet.create({
  avatarImg: {
    width: 65,
    height: 65,
    borderRadius: 50,
    marginBottom: 20
  },
  container: {
    width: '100%',
    paddingHorizontal: 16
  },
  title: {
    paddingBottom: 24
  },
  weeklyStats: {
    fontSize: 24
  },
  workoutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  workoutContainerStats: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  workoutSessions: {
    width: '40%',
    fontSize: 36,
    textAlign: 'left'
  },
  workoutSessionsText: {
    color: 'gray'
  },
  workoutStats: {
    alignContent: 'center',
    alignItems: 'flex-start'
  }
})
