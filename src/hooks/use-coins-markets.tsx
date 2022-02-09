import { useEffect, useState } from 'react';
import { CoingeckoClient } from '../api/CoingeckoClient';
import { CoinMarket } from '../interfaces/coin-market-interface';

export const useCoinsMarkets = () => {
  const [data, setData] = useState<CoinMarket[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  // TODO: handle errors and update ui

  useEffect(() => {
    const getCoinsMarketData = async () => {
      try {
        setLoading(true)
        const response = await CoingeckoClient.get<CoinMarket[]>('/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            sparkline: false,
            price_change_percentage: '7d'
          }
        })
        setData(response.data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    getCoinsMarketData()
  }, []);
  

  return {
    loading,
    data,
    error
  }
};
