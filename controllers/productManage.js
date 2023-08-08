const {Variant,VariantType} = require('../models/_run.js');
// const VariantType = db.VariantType;
// const Variant = db.Variant;

exports.set_vartype = async (req, res) => {
    try {
        const { Name } = req.body;
        const existingName = await VariantType.findOne({ where: { Name } });
        if (existingName) {
            return res.status(400).json({ error: "Name already exists" });
        }
        //
        const newVariantType = await VariantType.create({ Name });
        res.status(201).json({newVariantType});

    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.set_variant = async (req, res) => {
    try {
        const { TypeID, Value, ValueKor } = req.body;
        const existingName = await Variant.findOne({ where: { Value } });
        if (existingName) {
            return res.status(400).json({ error: "Value already exists" });
        }
        const newVariant = await Variant.create({ TypeID, Value, ValueKor });
        res.status(201).json({newVariant});
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.set_category = async (req, res) => {
    try {
        const { Name, Description } = req.body;
        check
        const existingName = await Variant.findOne({ where: { Name } });
        if (existingName) {
            return res.status(400).json({ error: "Name already exists" });
        }
        const newVariant = await Variant.create({ TypeID, Value, ValueKor });
        res.status(201).json({newVariant});
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};