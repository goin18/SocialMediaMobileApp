import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ScreenWrapper from "@/components/ScreenWapper";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import Header from "@/components/Header";
import { Image } from "expo-image";
import { useAuth } from "@/contexts/AuthContext";
import { getUserImageSrc } from "@/services/imageService";
import Icon from "@/assets/icons";
import Input from "@/components/input";
import Button from "@/components/Button";
import { updateUser } from "@/services/userSerivice";
import { router, useRouter } from "expo-router";

const EditProfile = () => {
  const { user: currentUser, userData, setUserDataAuth } = useAuth();
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    phoneNumbers: "",
    image: null,
    bio: "",
    address: "",
  });

  useEffect(() => {
    if (userData) {
      setUser({
        name: userData.name || "",
        phoneNumbers: userData.phoneNumbers || "",
        image: userData.image || null,
        address: userData.address || "",
        bio: userData.bio || "",
      });
    }
  }, [userData]);

  let imageSorce = getUserImageSrc(userData!.image);

  const onPickImage = async () => {};

  const onSubmit = async () => {
    let newUserData = {...user}
    let {name, phoneNumbers, address, image, bio} = newUserData

    if(!name || !phoneNumbers || !address || !bio) {
        Alert.alert('Profile', "Please fill all the fields")
        return 
    }

    setLoading(true)
    console.log(`currentUser?.id: ${currentUser?.id}`);
    console.log(newUserData);
    
    const res = await updateUser(currentUser?.id, newUserData)
    console.log(`update user response`);
    console.log(res);
    if(res.success) {
        setUserDataAuth({...currentUser, ...user})
        router.back()
    }
    setLoading(false)
  };

  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <Header title="Edit Profile" />

          <View style={styles.form}>
            <View style={styles.avatarContainer}>
              <Image source={imageSorce} style={styles.avatar} />
              <Pressable style={styles.cameraIcon} onPress={onPickImage}>
                <Icon name="camera" size={20} strokeWidth={2.5} />
              </Pressable>
            </View>
            <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
              Please fill your profile details
            </Text>
            <Input
              icon={<Icon name="user" />}
              placeholder="Enter your name"
              value={user.name}
              onChangeText={(value) => setUser({ ...user, name: value })}
            />
            <Input
              icon={<Icon name="call" />}
              placeholder="Enter your phone number"
              value={user.phoneNumbers}
              onChangeText={(value) => setUser({ ...user, phoneNumbers: value })}
            />
            <Input
              icon={<Icon name="location" />}
              placeholder="Enter your address"
              value={user.address}
              onChangeText={(value) => setUser({ ...user, address: value })}
            />
            <Input
              // icon={<Icon name="user" />}
              placeholder="Enter your bio"
              value={user.bio}
              multiline={true}
              containerStyles={styles.bio}
              onChangeText={(value) => setUser({ ...user, bio: value })}
            />

            <Button title="Update" loading={loading} onPress={onSubmit} />
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  avatarContainer: {
    height: hp(14),
    width: hp(14),
    alignSelf: "center",
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: theme.radius.xxl * 1.8,
    borderCurve: "continuous",
    borderWidth: 1,
    borderColor: theme.colors.darkLight,
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: -10,
    padding: 8,
    borderRadius: 50,
    backgroundColor: "white",
    shadowColor: theme.colors.textLight,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 7,
  },

  form: {
    gap: 18,
    marginTop: 20,
  },
  input: {
    flexDirection: "row",
    borderWidth: 0.4,
    borderColor: theme.colors.text,
    borderRadius: theme.radius.xxl,
    borderCurve: "continuous",
    padding: 17,
    paddingHorizontal: 20,
    gap: 15,
  },
  bio: {
    flexDirection: "row",
    height: hp(15),
    alignItems: "flex-start",
    paddingVertical: 15,
  },
});
