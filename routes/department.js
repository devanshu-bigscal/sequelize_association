const express = require("express")
const { createDepartment, getAllDepartment } = require("../controllers/department")
const router = express()

router.post("/create", createDepartment)
router.get("/fetch", getAllDepartment)



module.exports = router