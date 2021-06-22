const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

const Mongourl = "mongodb+srv://mernstack:mernstack@cluster0.65nc3.mongodb.net/blogDB";

mongoose.connect(Mongourl ,{ useUnifiedTopology: true } );

app.use("/", require("./routes/blogRoute"));

app.listen(3001, function(){
    console.log("express server running on port 3001");
});
