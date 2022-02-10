import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { NAVBAR_HEIGHT } from '../constants';
import { transactions } from '../data/transactions';
import { globalStyles } from '../theme';

export const TransactionsScreen = () => {
  let insets = useSafeAreaInsets();
  let options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }

  return (
    <View style={{ top: insets.top, bottom: insets.bottom, paddingBottom: NAVBAR_HEIGHT }}>
      <Text style={[globalStyles.title, { alignSelf: 'center', marginBottom: 16 }]}>
        Transacciones
      </Text>
      <FlatList
      data={transactions}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={{
          backgroundColor: '#263238',
          paddingHorizontal: 14,
          paddingVertical: 8
        }}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 8
            }}
          >
            <Text style={[globalStyles.text, { flexGrow: 1 }]}>{item.type}</Text>
            <Text style={globalStyles.text}>{item.quantity}{' '}</Text>
            <Text style={globalStyles.text}>{item.currency.toUpperCase()}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row'
            }}
          >
            <Text style={[globalStyles.text, { flexGrow: 1 }]}>{item.date.toLocaleDateString('es-MX', options)}</Text>
            <View
              style={{
                paddingHorizontal: 8,
                paddingVertical: 4,
                backgroundColor: '#9be7ff',
                borderRadius: 8
              }}
            >
              <Text style={{ color: '#0039cb', fontWeight: 'bold' }}>Recibido</Text>
            </View>
          </View>
        </View>
      )}
      ItemSeparatorComponent={() => (
        <View style={{ height: 16 }} />
      )}
      />
    </View>
  )
};
