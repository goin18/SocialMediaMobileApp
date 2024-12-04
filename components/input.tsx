import { StyleSheet, TextInput, TextInputProps, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { theme } from '@/constants/theme'
import { hp } from '@/helpers/common'
import Icon from '@/assets/icons'
// props

interface InputProps extends TextInputProps {
    icon?: ReactNode;
    placeholderName?: string;
    onChangeText: (text: string) => void; 
    containerStyles?: ViewStyle; 
    inputRef?: React.Ref<TextInput>;
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
          {...textInputProps} 
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