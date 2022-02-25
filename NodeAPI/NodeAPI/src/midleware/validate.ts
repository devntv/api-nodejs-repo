export const checkProductData = async (req, res, next)  => {
    const { title, price, description, image, category } = req.body

    const err = [];
    for (const key in req.body) {
        if(!req.body[key]) {
            err.push(`please add product ${key}`)
        }
    }
    if(err.length > 0) {
        return res.status(401).json({msg: err})
    }

    next()
}