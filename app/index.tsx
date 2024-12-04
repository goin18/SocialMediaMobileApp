import Loading from "@/components/Loading";
import ScreenWrapper from "@/components/ScreenWapper";
import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const index = () => {
  const router = useRouter();
  return (
  //   <ScreenWrapper>
  //     <Text>Index</Text>
  //     <Button
  //       title="Welcome"
  //       onPress={() => {
  //         router.push("/welcome");
  //       }}
  //     />
  //   </ScreenWrapper>

    <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
      <Loading />
    </View>
  );
};

export default index;
