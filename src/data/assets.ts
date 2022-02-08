import { Asset } from "../interfaces/asset-interface";

export const assets: Asset[] = [
  {
    id: '1',
    name: 'Pesos mexicanos',
    ticker: 'mxn',
    balance: 15250,
    balance_mxn: 15250,
    portafolio_percentage: 10,
    color: '#1faa00'
  },
  {
    id: '2',
    name: 'Bitcoin',
    ticker: 'btc',
    balance: 0.00010407,
    balance_mxn: 92.28,
    portafolio_percentage: 1.5,
    color: '#f7931a',
    growing_asset: true
  }
]