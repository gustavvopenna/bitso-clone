import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons";

import { colors } from '../theme'

interface Props {
  title: string,
  onPress?: () => void
}

export const MenuItem = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => onPress?.()}
      activeOpacity={0.7}
    >
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: colors.primaryLight,
          paddingHorizontal: 8,
          paddingVertical: 16
        }}
      >
        <Text
          style={{
            color: colors.white,
            fontSize: 16,
            flexGrow: 1
          }}
        >
          {title}
        </Text>
          <Ionicons
            name='chevron-forward-outline'
            color={colors.primaryLight}
            size={20}
          />
      </View>
    </TouchableOpacity>
  )
}
