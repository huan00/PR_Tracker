import React from 'react'
import { Image, View, Text } from 'react-native'

const WorkoutHistory = () => {
  const rpms = ['1 rpm', '4 rpm', '6 rpm', '8 rpm']
  return (
    <View>
      <View>
        <View>
          <Text>Front Squat</Text>
        </View>
        <View>
          {rpms.map((rpm, idx) => (
            <Text key={idx}>{rpm}</Text>
          ))}
        </View>
      </View>
      <View>
        <Image source={''} />
      </View>
      <View>
        <View>
          <Text>Wednesday, June 18, 2022</Text>
          <Text> 145 lb</Text>
        </View>
        <Text>Wednesday, June 18, 2022</Text>
        <Text> 145 lb</Text>
      </View>
    </View>
  )
}

export default WorkoutHistory
