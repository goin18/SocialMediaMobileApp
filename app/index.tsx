import ScreenWrapper from '@/components/ScreenWapper'
import { useRouter } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

const index = () => {
    const router = useRouter()
  return (
    <ScreenWrapper>
        <Text>Index</Text>
        <Button title="Welcome" onPress={() => {
            router.push("/welcome")
        }}/>
    </ScreenWrapper>
  )
}

export default index
