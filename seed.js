require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  { name: 'Study Table', sku: 'FURN-TB-812', category: 'Furniture', price: 3999, quantity: 2, reorderLevel: 4, supplier: 'IKEA India' },
  { name: 'Office Chair', sku: 'FURN-CH-204', category: 'Furniture', price: 5499, quantity: 15, reorderLevel: 5, supplier: 'Godrej Interio' },
  { name: 'Laptop 15 inch', sku: 'ELEC-LP-101', category: 'Electronics', price: 52000, quantity: 3, reorderLevel: 5, supplier: 'Dell India' },
  { name: 'Wireless Mouse', sku: 'ELEC-MS-102', category: 'Electronics', price: 799, quantity: 60, reorderLevel: 15, supplier: 'Logitech' },
  { name: 'Bluetooth Speaker', sku: 'ELEC-SP-103', category: 'Electronics', price: 2499, quantity: 25, reorderLevel: 10, supplier: 'boAt' },
  { name: 'Smartphone', sku: 'ELEC-PH-104', category: 'Electronics', price: 14999, quantity: 8, reorderLevel: 10, supplier: 'Samsung' },
  { name: 'Cotton T-Shirt', sku: 'APRL-TS-301', category: 'Apparel', price: 599, quantity: 50, reorderLevel: 20, supplier: 'Allen Solly' },
  { name: 'Denim Jeans', sku: 'APRL-JN-302', category: 'Apparel', price: 2199, quantity: 28, reorderLevel: 10, supplier: 'Levis' },
  { name: 'Notebook A4', sku: 'STNY-NB-701', category: 'Stationery', price: 60, quantity: 200, reorderLevel: 50, supplier: 'Classmate' },
  { name: 'Marker Set', sku: 'STNY-MK-702', category: 'Stationery', price: 250, quantity: 12, reorderLevel: 15, supplier: 'Camlin' },
  { name: 'Basmati Rice 5kg', sku: 'GROC-RC-501', category: 'Grocery', price: 650, quantity: 40, reorderLevel: 10, supplier: 'India Gate' },
  { name: 'Olive Oil 1L', sku: 'GROC-OL-502', category: 'Grocery', price: 899, quantity: 18, reorderLevel: 8, supplier: 'Borges' },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('12 products added');
  } catch (err) {
    console.log(err.message);
  } finally {
    await mongoose.disconnect();
  }
};

seed();
