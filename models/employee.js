const { DataTypes } = require("sequelize")
const sequelize = require("../connections/db_connection")
const Employees = sequelize.define("Employees", {

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,

    },
    phone: {
        type: DataTypes.DOUBLE
    },
    department_id: {
        type: DataTypes.INTEGER
    }
    , createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    }

})




module.exports = Employees