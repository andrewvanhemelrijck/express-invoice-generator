var data = {
  invoiceNumber: "012",
  client: {
    name: "Rotary Club of Wakefield",
    co: "Laurie Ramaker",
    address: {
      street: "PO Box 382",
      townState: "Wakefield, RI",
      zip: "02880"
    }
  },
  date: new Date(),
  dueDateInterval: 14, //in days
  products: [
    {
      name: "Balloon Festival Website (Maintenance & Updates)",
      price: "$50/hr",
      priceUSD: 50,
      quantity: 20.2
    }
  ],
  deposit: "",
  discount: 707
};

module.exports = data;