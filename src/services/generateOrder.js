
export const generateOrder = (name, lastName, email, country, address, postcode, city, terms, cart, total) => {
  return {
    buyer: {
        name,
        lastName,
        email,
        country,
        address,
        postcode,
        city,
        terms
    },
    items: cart,
    total,
    createDat: new Date().toLocaleString()
  }
}