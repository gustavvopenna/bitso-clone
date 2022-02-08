export interface Asset {
  id: string,
  name: string,
  ticker: string,
  portafolio_percentage: number,
  balance: number,
  balance_mxn: number,
  color?: string,
  growing_asset?: boolean
};
