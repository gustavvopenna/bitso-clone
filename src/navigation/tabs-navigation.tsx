import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import { WalletScreen } from '../screens/wallet-screen';
import { CryptoScreen } from '../screens/crypto-screen';
import { TransactionsScreen } from '../screens/transactions-screen';
import { ProfileScreen } from '../screens/profile-screen';
import { Text } from 'react-native';
import { colors } from '../theme';

export const TabsNavigation = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      initialRouteName="WalletScreen"
      sceneContainerStyle={{
        backgroundColor: colors.primaryDark
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.white,
        tabBarStyle: {
          backgroundColor: colors.primary,
          elevation: 0,
          borderTopColor: colors.primary,
          shadowOffset: {
            width: 0,
            height: 0
          }
        }
      }}
    >
      <Tab.Screen
        name='WalletScreen'
        component={WalletScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name='wallet-outline' size={24} color={color} />
        }}
      />
      <Tab.Screen
        name='CryptoScreen'
        component={CryptoScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name='stats-chart-outline' size={24} color={color} />
        }}
      />
      <Tab.Screen
        name='TransactionsScreen'
        component={TransactionsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name='reader-outline' size={24} color={color} />
        }}
      />
      <Tab.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name='person-outline' size={24} color={color} />
        }}
      />
    </Tab.Navigator>
  )
};
