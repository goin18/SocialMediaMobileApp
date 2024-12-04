import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWapper'
import Button from '@/components/Button'
import { supabase } from '@/lib/supabase'

const Home = () => {

    const onLogout = async () => {
        const {error} = await supabase.auth.signOut()
        if(error) {
            Alert.alert(`Logout`, `Error signing out!`)
        }
    }

  return (
    <ScreenWrapper>
      <Text>Home</Text>
      <Button title='logout' onPress={onLogout}/>
    </ScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({})