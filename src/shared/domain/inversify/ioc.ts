export interface IoC {
  [key: string]: {
    type: Symbol,
    value: any,
    symbol: Symbol,
  }
}