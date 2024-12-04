import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWapper'
import { theme } from '@/constants/theme'
import { StatusBar } from 'expo-status-bar'
import BackButton from '@/components/BackButton'
import { useRouter } from 'expo-router'
import { hp, wp } from '@/helpers/common'
import Input from '@/components/input'
import Icon from '@/assets/icons'


const Login = () => {
    const router = useRouter()
  return (
    <ScreenWrapper>
        <StatusBar style='dark' />
        <View style={styles.container}>
            <BackButton router={router} />

            <View>
                <Text style={styles.welcomeText}>Hey,</Text>
                <Text style={styles.welcomeText}>Welcome Back</Text>
            </View>

            <View style={styles.form}>
                <Text style={{ fontSize: hp(1.5), color: theme.colors.text}}>
                    Please login to continue
                </Text>
                <Input 
                    icon={<Icon name='mail' size={26} strokeWidth={1.6} />}
                    placeholderName='Enter your email'
                    onChangeText={value => {}}
                />
            </View>

        </View>
      
     
      
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 45,
        paddingHorizontal: wp(5)

    },
    welcomeText: {
        fontSize: hp(4),
        fontWeight: theme.fonts.bold,
        color: theme.colors.text,
      },
      form: {
        gap: 25,
      },
      forgotPassword: {
        textAlign: 'right',
        fontWeight: theme.fonts.semibold,
        color: theme.colors.text,
      },
      footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
      },
      footerText: {
        textAlign: 'center',
        color: theme.colors.text,
        fontSize: hp(1.6),
      },
})