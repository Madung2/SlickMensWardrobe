const Sequelize = require('sequelize');


const createEntity = async (model, data, uniqueField) => {
    try {
        const existing = await model.findOne({ where: { [uniqueField]: data[uniqueField] } });
        if (existing) {
            console.log(`${data[uniqueField]} already exists`);
            return { error: `${data[uniqueField]} already exists` };
        }
        
        const newEntity = await model.create(data);
        console.log('Success=>', model);
    }
    catch (err) {
        if (err instanceof Sequelize.ValidationError) {
            console.log('validate error=>', data)
            return {error: err.errors}
        }
        else {
            // console.log('error=>', err)
            console.log('error=>', err)
            return {error: err}
        }
    };
};
module.exports = createEntity;