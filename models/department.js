const { DataTypes } = require("sequelize")
const sequelize = require("../connections/db_connection")
const Employees = require("./employee")
const Department = sequelize.define("Department", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    }
})

Department.hasMany(Employees, { foreignKey: "department_id", as: 'employeeDetails' })
Employees.belongsTo(Department, { foreignKey: "department_id", as: 'departmentDetails' })
module.exports = Department