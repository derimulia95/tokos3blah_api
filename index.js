const express = require('express')
const cors = require('cors')
const bearerToken = require("express-bearer-token");

const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.use(bearerToken());


const { userRouters } = require("./routers");

app.use("/users", userRouters);


app.listen(PORT, () => console.log('Api Running :', PORT));