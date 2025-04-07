export function normalizeCards(value) {
  return {
    title: value.title,
    subtitle: value.subtitle,
    description: value.description,
    phone: value.phone,
    email: value.email,
    web: value.web,
    image: {
      url: value.url,
      alt: value.url,
    },
    address: {
      state: value.state,
      country: value.country,
      city: value.city,
      street: value.street,
      houseNumber: value.houseNumber,
      zip: value.zip,
    },
  };
}
