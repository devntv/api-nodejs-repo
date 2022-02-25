import Products from "../model/productModel"

const productController = {
    getProducts: async (req, res) => {
       try {
           const products = await Products.find() // get all product
           return res.status(200).json(products)
       } catch (err) {
           return res.status(500).json({msg: 'err.message'})
       }
    },

    getProduct: async (req, res) => {
        try {
            let product;
            if(req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
                product = await Products.findById(req.params.id) 
            }
            if(!product) {
                return res.status(404).json({msg: 'San pham chua ton tai.'})
            }
            return res.status(200).json(product)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    addProduct: async (req, res) => {
        try {      
            const { title, price, description, image, category } = req.body
            const newProduct = new Products({
                title, price, description, image, category
            })
            await newProduct.save()
            return res.status(200).json(newProduct)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    updateProduct: async (req, res) => {
        try {      
            const { title, price, description, image, category } = req.body
            const product = await Products.findByIdAndUpdate(req.params.id, {
                title, price, description, image, category
            }, {new: true})
            return res.status(200).json(product)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    deleteProduct: async (req, res) => {
        try {      
         const product = await Products.findByIdAndDelete(req.params.id)
         if(!product) {
             return res.status(404).json({msg: 'san pham khong ton tai'})
         }
         return res.status(200).json({msg:'Xoa sp thanh cong!'})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

export default productController