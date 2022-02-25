import express from 'express'
import productController from '../controller/productController'

const router = express.Router()

router.get('/products', productController.getProducts)

router.get('/products/:id', productController.getProduct)

router.post('/products', productController.addProduct)

router.put('/products/:id', productController.updateProduct )

router.delete('/products/:id', productController.deleteProduct )

export default router