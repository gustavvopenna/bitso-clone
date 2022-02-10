import React, { useCallback, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '../theme';
import { CircularButton } from '../components/circular-button';
import { BalanceCard } from '../components/balance-card';
import { assets } from '../data/assets';


export const WalletScreen = () => {
  const insets = useSafeAreaInsets();
  const [showBalance, setShowBalance] = useState<boolean>(true)

  const toogleBalance = useCallback(() => {
      setShowBalance(showBalance => !showBalance)
    },
    [showBalance]
  )
  

  return (
    <View style={{ top: insets.top, bottom: insets.bottom, padding: 12 }}>
      <View
        style={{
          alignItems: 'flex-end'
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
        <Pressable onPress={toogleBalance}>
          {
            showBalance
            ? (
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
            ) : (
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
                  Balance oculto
                </Text>
              </View>
            )
          }
          <Text
            style={{
              fontSize: 16,
              color: colors.primaryLight,
              fontWeight: 'bold',
              alignSelf: 'center'
            }}
          >
            {showBalance ? 'Toca para ocultar' : 'Toca para mostrar'}
          </Text>
        </Pressable>
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
          <BalanceCard showBalance={showBalance} {...item} />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 16 }} />
        )}
      />
    </View>
  )
};
