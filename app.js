const { response, request } = require("express")
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const postmodel = require("./schema")
const port = 5000
const cors = require("cors")
const signuppostmodel = require("./schema")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect("mongodb+srv://admin:admin@cluster0.j0vkg.mongodb.net/App",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)


mongoose.connection.on("connected", () => console.log("Mongoose Connected"))
mongoose.connection.on("error", () => console.log("Mongoose not connected"))


// Create
app.post("/add", (request, response) => {
    try {
        const body = request.body
        postmodel.create(body, (error, data) => {
            if (error) {
                throw error
            } else {
                response.send("Create Successfuly")

            }
        })

    } catch (error) {
        response.send(error)
    }
})



app.post("/signup", (request, response) => {
    try {
        const body = request.body
        signuppostmodel.create(body, (error, data) => {
            if (error) {
                throw error
            } else {
                response.send("Singup Successful")
                console.log(data);

            }
        })
    } catch (error) {
        response.send(error)
    }
})


// Read All
app.get("/read", (request, response) => {
    try {
        postmodel.find({}, (error, data) => {
            if (error) {
                throw error
            } else {
                console.log(data)
                response.send(data);
            }
        })
    } catch (error) {
        response.send(error)
    }
})


// Read all data of specific user
app.get("/find", (request, response) => {
    try {
        const { title } = request.headers
        if (title) {
            postmodel.find({ title }, (error, data) => {
                if (error) {
                    throw error
                } else {
                    response.send(data)
                }
            })
        }
        else {
            response.send("Field Missing")
        }
    } catch (error) {
        response.send(error)
    }
})


// Find one post of specific user
app.get("/findone", (request, response) => {
    try {
        const { title } = request.headers
        if (title) {
            postmodel.findOne({ title }, (error, data) => {
                if (error) {
                    throw error
                } else {
                    response.send(data)
                }
            })
        }
        else {
            response.send("Field Missing")
        }
    } catch (error) {
        response.send(error)
    }
})


app.listen(port, () => console.log(`Server is running on port: ${port}`))