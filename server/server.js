require("dotenv").config(); //added
const express = require('express');
const cors = require("cors");

const connectDB = require("./config/db"); //added

const app = express();

const todo = require("./routes/todo");

// connect database
connectDB();

app.use(cors({origin : true, credentials : true}));

app.use(express.json());

app.get("/", (req, res) => res.send("Server is up and running"));
// app.get("/abc", (req, res) => res.send("Abc is up"));

// use routes
app.use("/api/todo", todo);

const PORT = process.env.PORT || 8500;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

// iiOdbkoFQ4cJ3byS

// mongodb+srv://mongodbUser1:<password>@cluster0.k96xoot.mongodb.net/?retryWrites=true&w=majority