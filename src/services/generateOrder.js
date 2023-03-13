
export const generateOrder = (name, lastName, email, country, address, postcode, city, terms, uid, orderNum, trackingNum, cart, prices) => {
  return {
    buyer: {
        name,
        lastName,
        email,
        country,
        address,
        postcode,
        city,
        terms,
        uid
    },
    orderNum,
    trackingNum,
    items: cart,
    pricing: prices,
    createDat: new Date().toLocaleString()
  }
}