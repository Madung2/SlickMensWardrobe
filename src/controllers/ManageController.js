const { sequelize } = require('../configs/database.js');
const Sequelize = require('sequelize');
const {Variant,VariantType, Category, User, Role} = require('../../models/_run.js');

const createEntity = async (model, data, uniqueField, res) => {
    console.log(VariantType, Variant, Category, User, Role);
    try {
        const existing = await model.findOne({ where: { [uniqueField]: data[uniqueField] } });
        if (existing) {
            return res.status(400).json({ error: `${uniqueField} already exists` });
        }
        const newEntity = await model.create(data);
        res.status(201).json(newEntity);
    }
    catch (err) {
        if (err instanceof Sequelize.ValidationError) {
            console.log('validate error=>', err.errors)
            return res.status(400).json({ error: err.errors });
        }
        else {
            console.log('error=>', err)
            return res.status(500).json({ error: err });
        }
    };
};


const getData = async (model, res) => {
    try {
        const entities = await model.findAll();
        res.status(200).json(entities);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
};

exports.get_vartype = async (req, res) => { getData(VariantType, res) };
exports.get_variant = async (req, res) => { getData(Variant, res) };
exports.get_category = async (req, res) => { getData(Category, res) };
exports.get_role = async (req, res) => { getData(Role, res) };
exports.get_user = async (req, res) => { getData(User, res) };

exports.set_vartype = (req, res) => createEntity(VariantType, req.body, 'Name', res);
exports.set_variant = (req, res) => createEntity(Variant, req.body, 'Value', res);
exports.set_category = (req, res) => createEntity(Category, req.body, 'Name', res);
exports.set_role = (req, res) => createEntity(Role, req.body, 'Name', res);






//Dev mode only
exports.set_auth = (req, res) => createEntity(User, req.body, 'Username', res);
