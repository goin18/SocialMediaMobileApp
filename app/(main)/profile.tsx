import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'expo-router'
import ScreenWrapper from '@/components/ScreenWapper'
import Header from '@/components/Header'
import { hp, wp } from '@/helpers/common'
import Icon from '@/assets/icons'
import { theme } from '@/constants/theme'
import { supabase } from '@/lib/supabase'

const profile = () => {
  const { user, userData } = useAuth()
  const router = useRouter()

  const onLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert(`Logout`, `Error signing out!`);
    }
  };

  const handleLogout = async () => {
    //show confirm modal
    Alert.alert(`Confirm`, "Are you sure you want to logout", [
      { 
        text: 'Cancel',
        onPress: () => { console.log(`model close`)},
        style: 'cancel'
      },
      {
        text: 'Logout',
        onPress: () => { onLogout() },
        style:'destructive'
      }
    ])
  }

  return (
    <ScreenWrapper bg="white">
      <UserHeader userData={userData} router={router} handleLogout={handleLogout} />
      <Text>profile</Text>
    </ScreenWrapper>
  )
}

const UserHeader = ({userData, router, handleLogout}) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: wp(4)}}>
      <Header title="Profile" showBackButton={true} />
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Icon name='logout' color={theme.colors.rose} />
      </TouchableOpacity>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginHorizontal: wp(4),
    marginBottom: 20,
  },
  headerShape: {
    width: wp(100),
    height: hp(20),
  },
  avatarContainer: {
    height: hp(12),
    width: hp(12),
    alignSelf: 'center',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: -12,
    padding: 7,
    borderRadius: 50,
    backgroundColor: 'white',
    shadowColor: theme.colors.textLight,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 7,
  },
  userName: {
    fontSize: hp(3),
    fontWeight: '500',
    color: theme.colors.textDark,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  infoText: {
    fontSize: hp(1.6),
    fontWeight: '500',
    color: theme.colors.textLight,
  },
  logoutButton: {
    position: 'absolute',
    right: 12,
    padding: 5,
    borderRadius: theme.radius.sm,
    backgroundColor: '#fee2e2',
  },
  listStyle: {
    paddingHorizontal: wp(4),
    paddingBottom: 30,
  },
  noPosts: {
    fontSize: hp(2),
    textAlign: 'center',
    color: theme.colors.text,
  }
})