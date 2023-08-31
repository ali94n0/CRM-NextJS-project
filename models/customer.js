import { Schema, model, models } from "mongoose";

const customerSchema = new Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },
  lastName: {
    type: String,
    minLength: 3,
    required: true,
  },
  email: {
    type: String,
    minLength: 5,
    required: true,
  },
  phone: String,
  address: String,
  postalCode: Number,
  date: Date,
  products: Array,
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const Customer = models.customer || model("customer", customerSchema);

export default Customer;
