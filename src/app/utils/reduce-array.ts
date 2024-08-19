export function reduceArray(array: number[]): number {
  const totalValue = Math.round(array.reduce((acc, curr) => acc + curr, 0))
  const length = array.length
  return totalValue / length
}
