import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '../theme';
import { CircularButton } from '../components/circular-button';
import { hex } from '@project-serum/anchor/dist/cjs/utils/bytes';
import { BalanceCard } from '../components/balance-card';
import { assets } from '../data/assets';


export const WalletScreen = () => {
  const insets = useSafeAreaInsets()
  return (
    <View style={{ top: insets.top }}>
      <View
        style={{
          alignItems: 'flex-end',
          padding: 12
        }}
      >
        <Ionicons  name='qr-code-outline' size={28} color={colors.white} />
      </View>
      {/* Balance */}
      <View style={{
        alignItems: 'center'
      }}>
        <Text
          style={{
            fontSize: 16,
            color: colors.primaryLight,
            fontWeight: 'bold',
            paddingBottom: 6
          }}
        >
          Balance combinado
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end'
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: 40
            }}
          >
            67,433.98
          </Text>
          <Text
            style={{
              color: colors.white,
              paddingBottom: 8,
              paddingLeft: 2
            }}
          >
            MXN
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            color: colors.primaryLight,
            fontWeight: 'bold',
          }}
        >
          Toca para ocultar
        </Text>
      </View>
      {/* Circular action buttons */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 20
        }}
      >
        <CircularButton
          title='Depositar'
          iconName='add-outline'
          onPress={() => console.log('press')}
        />
        <CircularButton
          title='Convertir'
          iconName='sync-outline'
          onPress={() => console.log('press')}
          containerStyles={{
            marginHorizontal: 28
          }}
        />
        <CircularButton
          title='Enviar'
          iconName='send-outline'
          onPress={() => console.log('press')}
        />
      </View>
      {/* Balance cards */}
      <FlatList
        data={assets}
        keyExtractor={(asset) => asset.id}
        renderItem={({ item }) => (
          <BalanceCard {...item} />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 16 }} />
        )}
      />
    </View>
  )
};
