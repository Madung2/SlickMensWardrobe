module.exports = (sequelize, DataTypes) => {
    const Note = sequelize.define('Note', {
        NoteID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Kor: {
            type: DataTypes.STRING
        },
        Description: {
            type: DataTypes.TEXT
        },
        AccordID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'Note',
    });
    Note.associate = (models) => {
        Note.belongsTo(models.Accord, {
            foreignKey: 'AccordID',
            onDelete: 'CASCADE'
        })
    }
    return Note;
}