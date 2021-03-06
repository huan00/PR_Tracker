import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import ExerciseDetail from './screens/ExerciseDetail'
import WorkoutHistory from './components/WorkoutHistory'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '' }}
        />
        <Stack.Screen
          name="ExerciseDetail"
          component={ExerciseDetail}
          options={{ title: 'workout' }}
        />
        <Stack.Screen
          name="WorkoutHistory"
          component={WorkoutHistory}
          options={{ title: 'Workout History' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'black' }
})
