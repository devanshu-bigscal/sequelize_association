const Department = require("../models/department")
const departmentModel = require("../models/department")
const Employees = require("../models/employee")

exports.createDepartment = async (req, res) => {

    try {
        const { name } = req.body
        const newDepartment = await departmentModel.create({ name })

        return res.json({ message: "Department created successfully", newDepartment })
    } catch (error) {
        console.log(error)
    }
}


exports.getAllDepartment = async (req, res) => {

    try {
        const allDepartments = await departmentModel.findAll({ include: [{ model: Employees, as: "employeeDetails", attributes: { exclude: ["createdAt", "updatedAt", "department_id", "id"] } }] })

        res.json(allDepartments)


    } catch (error) {
        console.log(error)
    }
}

