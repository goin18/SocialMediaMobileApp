import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

export const hp = (presentage: number) => {
    return (presentage*deviceHeight) / 100
}

export const wp = (presentage: number) => {
    return (presentage*deviceWidth) / 100
}