import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import { Currency } from '../interfaces/coin-market-interface';
import { colors, globalStyles } from '../theme';
import { toCurrency } from '../utils';

interface Props {
  image: string,
  name: string,
  current_price: number,
  price_change_percentage_24h: number,
  onPress?: () => void
}

export const AssetCard = (props: Props) => {
  const {
    image,
    name,
    current_price,
    price_change_percentage_24h,
    onPress
  } = props

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={[globalStyles.card, { flexDirection: 'row', alignItems: 'center' }]}>
        <Image
          source={{ uri: image }}
          style={{
            width: 26,
            height: 26,
            borderRadius: 13,
            backgroundColor: colors.white
          }}
        />
        <Text style={[globalStyles.text, { paddingLeft: 12, flexGrow: 1 }]}>{name}</Text>
        <View style={{ alignItems: 'flex-end' }}>
          <View
            style={{
              flexDirection: 'row',
              paddingBottom: 4
            }}
          >
            <Text style={globalStyles.text}>{toCurrency(current_price)}</Text>
            <Text style={globalStyles.text}>{' '}{Currency.Usd.toUpperCase()}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons
              name={price_change_percentage_24h > 0 ? 'arrow-up-outline' : 'arrow-down-outline'}
              size={12}
              color={price_change_percentage_24h > 0 ? 'green' : 'red'}
            />
            <Text
              style={{
                color: price_change_percentage_24h > 0 ? 'green' : 'red',
                paddingLeft: 4
              }}
            >
              {(price_change_percentage_24h).toFixed(2)}%
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
};
