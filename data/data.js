var data = {
  invoiceNumber: "007",
  client: {
    name: "Wakefield Rotary Club",
    co: "Laurie Ramacher",
    address: {
      street: "PO Box 22",
      townState: "Wakefield, RI",
      zip: "02879"
    }
  },
  date: new Date(),
  dueDateInterval: 14, //in days
  dueDate: function() {
    var due = new Date(this.date.getTime() + this.dueDateInterval * 86400000);
    return due;
  },
  products: [
    {
      name: "South County Balloon Festival Web Site",
      price: "$50/hr",
      priceUSD: 50,
      quantity: 20.2,
      lineTotal: function() {
        return this.priceUSD * this.quantity;
      }
    }
  ],
  subTotal: function() {
    var sum = 0;
    this.products.forEach(function(product) {
      sum += product.lineTotal();
    });
    console.log(sum);
    return sum.toFixed(2);
  },
  deposit: "",
  discount: 707,
  total: function() {
    var output = this.subTotal() - this.deposit - this.discount;
    return output.toFixed(2);
  }
};

module.exports = data;