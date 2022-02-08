import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../theme';

import { Asset } from '../interfaces/asset-interface';

export const BalanceCard = (props: Asset) => {
  const {
    name,
    portafolio_percentage,
    balance,
    balance_mxn,
    ticker,
    growing_asset,
    color = colors.primaryLight
  } = props;

  return (
    <View
      style={{
        backgroundColor: '#263238',
        borderRadius: 10,
        padding: 12
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            width: 26,
            height: 26,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
            backgroundColor: color
          }}
        >
          <Text
            style={{
              color: colors.white
            }}
          >
            $
          </Text>
        </View>
        <Text
          style={{
            color: colors.white,
            fontSize: 18,
            fontWeight: 'bold',
            paddingLeft: 8,
            flexGrow: 1
          }}
          >
          {name}
        </Text>
        <View
          style={{
            backgroundColor: color,
            width: 50,
            height: 10,
            borderRadius: 10
          }}
        />
        <Text
          style={{
            color: colors.white,
            fontSize: 18,
            fontWeight: 'bold',
            paddingLeft: 8
          }}
        >
          {portafolio_percentage}%
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          paddingTop: 20,
          paddingBottom: growing_asset ? 20 : 0
        }}
      >
        <Text
          style={{
            color: colors.white,
            fontSize: 22,
            fontWeight: 'bold'
          }}
        >
          {balance}
        </Text>
        <Text
          style={{
            color: colors.white,
            fontSize: 16,
            paddingLeft: 4,
            paddingBottom: 2
          }}
        >
          {ticker.toUpperCase()}
        </Text>
      </View>
      { growing_asset && <Text
        style={{
          color: colors.primaryLight,
          fontSize: 16,
          fontWeight: '500'
        }}
      >
        Creciendo 🔥
      </Text>}
    </View>
  )
};