const express = require("express")
const app = express()
require("dotenv").config()
const sequelize = require("./connections/db_connection")
const departmentRoutes = require("./routes/department")
const employeeRoutes = require("./routes/employee")
app.use(express.json())

app.use("/department", departmentRoutes)
app.use("/employee", employeeRoutes)
const port = process.env.PORT || 8000


app.listen(port, () => {
    console.log(`Server running at port: ${port}`)
})


