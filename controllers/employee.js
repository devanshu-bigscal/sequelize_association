const { where } = require("sequelize")
const Department = require("../models/department")
const employeeModel = require("../models/employee")

exports.createEmployee = async (req, res) => {

    try {
        const { name, age, phone, department_id } = req.body

        const newEmployee = await employeeModel.create({ name, age, phone, department_id })

        return res.json({ message: "employee created successfully", newEmployee })


    } catch (error) {
        console.log(error)
    }

}

exports.getAllEmployees = async (req, res) => {

    try {
        const allEmployees = await employeeModel.findAll({ attributes: { exclude: ["createdAt", "updatedAt"] }, include: [{ model: Department, as: "departmentDetails", attributes: ["name"], where: { name: "node" } }] })

        res.json(allEmployees)


    } catch (error) {
        console.log(error)
    }
}


exports.getAllEmployeeByDepartmentName = async (req, res) => {

    try {

        const data = await employeeModel.findAll({ attributes: ["name", "age", "phone"], include: [{ model: Department, as: "departmentDetails", where: { name: req.params.name }, attributes: { exclude: ["createdAt", "updatedAt", "id"] } }] })

        return res.json(data)
    } catch (error) {
        console.log(error)
    }

}