import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AssetCard } from '../components/asset-card';
import { NAVBAR_HEIGHT } from '../constants';
import { useCoinsMarkets } from '../hooks/use-coins-markets';
import { globalStyles } from '../theme';

export const CryptoScreen = () => {
  const insets = useSafeAreaInsets();
  const { loading, data: coins } = useCoinsMarkets();

  if (loading) {
    return (
      <View style={{ top: insets.top, bottom: insets.bottom, padding: 12 }}>
        <ActivityIndicator size={40} color='white' />
      </View>
    )
  }

  return (
    <View style={{ top: insets.top, bottom: insets.bottom, padding: 12, paddingBottom: NAVBAR_HEIGHT }}>
      <Text style={[globalStyles.title, { alignSelf: 'center', marginBottom: 16 }]}>
        Crypto
      </Text>
      <FlatList
        data={coins}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <AssetCard
            image={item.image}
            name={item.name}
            current_price={item.current_price}
            price_change_percentage_24h={item.price_change_percentage_24h}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 16 }} />
        )}
      />
    </View>
  )
};
