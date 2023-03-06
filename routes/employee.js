const router = require("express")()
const { createEmployee, getAllEmployees, getAllEmployeeByDepartmentName } = require("../controllers/employee")

router.post("/create", createEmployee)
router.get("/fetch", getAllEmployees)
router.get("/fetch/:name", getAllEmployeeByDepartmentName)


module.exports = router