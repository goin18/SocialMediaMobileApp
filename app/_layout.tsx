import { AuthProvider, useAuth } from "@/contexts/AuthContext"
import { supabase } from "@/lib/supabase"
import { getUserData } from "@/services/userSerivice"
import { User } from "@supabase/supabase-js"
import { Stack, useRouter } from "expo-router"
import { useEffect } from "react"

const _layout = () => {
    return (
        <AuthProvider>
            <MainLayout />
        </AuthProvider>
    )
}

const MainLayout = () => {
    const { setAuth, setUserDataAuth } = useAuth()
    const router = useRouter()

    useEffect(() => {
        supabase.auth.onAuthStateChange((_event, session) => {
            if(session) {
                setAuth(session.user)
                updateUserData(session.user)
                router.replace('/home')
            } else {
                setAuth(null)
                router.replace('/welcome')
            }
           })
    }, [])

    const updateUserData = async (user: User) => {
        let res = await getUserData(user.id)
        if(res.success && res.data) {
            setUserDataAuth(res.data)
        }
    }

    return (
        <Stack 
            screenOptions={{
                headerShown: false
            }}
        />
    )
}

export default _layout