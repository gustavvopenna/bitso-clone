import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import { colors } from '../theme';

const SIZE = 50

interface Props {
  containerStyles?: any,
  title: string
  onPress: () => void,
  iconName: string
}

export const CircularButton = ({ containerStyles = {}, iconName, title, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          {
            alignItems: 'center'
          },
          containerStyles
        ]}
      >
        <View
          style={{
            width: SIZE,
            height: SIZE,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.white,
            borderRadius: SIZE / 2
          }}
        >
          <Ionicons name={iconName} size={24} color={colors.primaryDark} />
        </View>
        <Text
          style={{
            color: colors.white,
            paddingTop: 6
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
};
