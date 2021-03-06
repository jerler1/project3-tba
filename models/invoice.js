const mongoose = require("mongoose");
const Inventory = require("./inventory");
const Storefront = require("./storefront");

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
  storeID: {
    type: Schema.Types.ObjectId,
    ref: Storefront,
    required: true,
  },
  stripePaymentID: {
    type: String,
    trim: true,
    require: true,
  },
  customerID: {
    type: String,
    trim: true,
    required: true,
  },
  customerEmail: {
    type: String,
    trim: true,
    required: true,
  },
  purchasedItems: [
    {
      itemDescription: String,
      itemTotal: String,
      itemQuantity: Number,
    },
  ],
  purchaseTotal: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    trim: true,
    required: true,
  },
});

invoiceSchema.add({
  orderDate: {
    type: Date,
    default: Date.now,
  }
})

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
