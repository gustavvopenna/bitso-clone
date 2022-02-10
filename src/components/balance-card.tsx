import React from 'react';
import { Text, View } from 'react-native';
import { colors, globalStyles } from '../theme';

import { Asset } from '../interfaces/asset-interface';

interface Props extends Asset {
  showBalance: boolean
}

export const BalanceCard = (props: Props) => {
  const {
    name,
    portafolio_percentage,
    balance,
    balance_mxn,
    ticker,
    growing_asset,
    color = colors.primaryLight,
    showBalance = true
  } = props;

  return (
    <View
      style={globalStyles.card}
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
            fontSize: 16,
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
            height: 4,
            borderRadius: 10
          }}
        />
        <Text
          style={{
            color: colors.white,
            fontSize: 14,
            fontWeight: 'bold',
            paddingLeft: 8
          }}
        >
          {portafolio_percentage}%
        </Text>
      </View>
      {
        showBalance && (
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
        )
      }
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
