var data = require('../data/data.js');

var invoiceGen = {
  data: data,
  dueDate: function() {
    var due = new Date(this.data.date.getTime() + this.data.dueDateInterval * 86400000);
    return due;
  },
  productLineTotal: function(product) {
    return product.priceUSD * product.quantity;
  },
  subTotal: function() {
    var sum = 0;
    this.data.products.forEach(function(product) {
      sum += product.priceUSD * product.quantity;
    });
    return sum.toFixed(2);
  },
  total: function() {
    var output = this.subTotal() - this.data.deposit - this.data.discount;
    return output.toFixed(2);
  }
};

module.exports = invoiceGen;