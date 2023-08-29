const {Variant,VariantType, Category, User, Role, Product} = require('../models/_run.js');
// console.log('var=>', Variant)

exports.post_product = async (req, res) => {
    try {
        const {VariantIDs, ...productData} = req.body;
        const product = await Product.create(productData);
        const variants = await Variant.findAll({where: {VariantID: VariantIDs}});
        console.log('var=>', VariantIDs)
        await product.setVariant(variants);
        console.log('setvar')
        return res.status(201).json(product);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: err });
    }
}