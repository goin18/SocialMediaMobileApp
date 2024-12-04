import { StyleSheet, TextInput, TextInputProps, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { theme } from '@/constants/theme'
import { hp } from '@/helpers/common'
import Icon from '@/assets/icons'
// props

interface InputProps extends TextInputProps {
    icon?: ReactNode; // Icon is passed as a ReactNode (e.g., JSX)
    placeholderName?: string; // Optional placeholder name
    onChangeText: (text: string) => void; // Function to handle text changes
    containerStyles?: ViewStyle; // Custom container styles
    inputRef?: React.Ref<TextInput>; // Optional ref for the TextInput
  }

  const Input: React.FC<InputProps> = ({
    icon,
    placeholderName,
    onChangeText,
    containerStyles,
    inputRef,
    ...textInputProps
  }) => {
    return (
      <View style={[styles.container, containerStyles]}>
        {icon}
        <TextInput
          style={{ flex: 1 }}
          placeholder={placeholderName}
          placeholderTextColor={theme.colors.textLight}
          onChangeText={onChangeText}
          ref={inputRef}
          {...textInputProps} // Spread additional TextInputProps
        />
      </View>
    );
  };

export default Input

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        height: hp(7.3),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.4,
        borderColor: theme.colors.text,
        borderRadius: theme.radius.xxl,
        borderCurve: 'continuous',
        paddingHorizontal: 18,
        gap: 12
    }
})