const {Variant,VariantType, Category} = require('../models/_run.js');
// const VariantType = db.VariantType;
// const Variant = db.Variant;
const createEntity = async (model, data, uniqueField, res) => {
    try {
        const existing = await model.findOne({ where: { [uniqueField]: data[uniqueField] } });
        if (existing) {
            return res.status(400).json({ error: `${uniqueField} already exists` });
        }
        const newEntity = await model.create(data);
        res.status(201).json({newEntity});
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.set_vartype = (req, res) => createEntity(VariantType, req.body, 'Name', res);
exports.set_variant = (req, res) => createEntity(Variant, req.body, 'Value', res);
exports.set_category = (req, res) => createEntity(Category, req.body, 'Name', res);