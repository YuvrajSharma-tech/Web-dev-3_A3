const express = require('express');
const router = express.Router();

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  adjustStock,
  deleteProduct,
  getLowStock,
  getSummary,
} = require('../controllers/productController');
const validateId = require('../middleware/validateId');
const validateStock = require('../middleware/validateStock');

router.route('/').get(getProducts).post(createProduct);

router.get('/low-stock', getLowStock);
router.get('/summary', getSummary);

router.patch('/:id/stock', validateId, validateStock, adjustStock);

router
  .route('/:id')
  .get(validateId, getProductById)
  .put(validateId, updateProduct)
  .delete(validateId, deleteProduct);

module.exports = router;
