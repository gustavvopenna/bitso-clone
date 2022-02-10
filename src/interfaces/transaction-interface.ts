type TransactionType = 
  | 'Deposit'
  | 'Withdraw'
  | 'Bitso+'
  | 'Exchange'

interface Transaction {
  id: string | number,
  type: TransactionType,
  date: Date,
  quantity: number,
  currency: string,
  to_currency?: string
}
