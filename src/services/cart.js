// Simulate getting a tax % from an API
export const getTaxes = () => {
  return Math.floor(Math.random() * (15 - 5 + 1) + 5) / 100
}

export const cartService = {
  getTaxes
}
