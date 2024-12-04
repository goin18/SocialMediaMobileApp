import React, { ReactNode } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ScreenWrapperProps {
  children: ReactNode; // ReactNode to represent any valid React child components
  bg?: string; // Optional background color property
}

const ScreenWrapper = ({ children, bg }: ScreenWrapperProps) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : 30;
  return (
    <View style={{ flex: 1, backgroundColor: bg, paddingTop }}>
      {children}
    </View>
  );
};

export default ScreenWrapper;