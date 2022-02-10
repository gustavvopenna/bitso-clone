import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { NAVBAR_HEIGHT } from '../constants';
import { colors, globalStyles } from '../theme';
import { MenuItem } from '../components/menu-item';

export const ProfileScreen = () => {
  let insets = useSafeAreaInsets();
  const menuItems = ['Cuenta', 'Información legal', 'Ayuda'];

  return (
    <View style={{ top: insets.top, bottom: insets.bottom, paddingBottom: NAVBAR_HEIGHT }}>
      {/* Profile header */}
      <View style={{ padding: 12 }}>
        <View
          style={{
            backgroundColor: colors.gray100,
            width: 60,
            height: 60,
            borderRadius: 60,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: colors.primaryLight
            }}
          >
            GP
          </Text>
        </View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '500',
            color: colors.white,
            marginBottom: 6,
            marginTop: 16
          }}
        >
          Gustavo Peña
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: colors.gray100
          }}
        >
          gustavo.pema@gmail.com
        </Text>
      </View>
      {/* Menu items */}
      <View
        style={{
          marginVertical: 20
        }}
      >
        {
          menuItems.map((item, i) => (
            <MenuItem key={`menu-item-${i}`} title={item} />
          ))
        }
      </View>
    </View>
  )
};
