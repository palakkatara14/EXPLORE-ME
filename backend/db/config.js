

// db/config.js

const mongoose = require('mongoose');
const dotenv= require('dotenv');
dotenv.config();

// const uri = "mongodb://localhost:27017/Explore-Me"; // Replace with your MongoDB URI
//const uri = "mongodb+srv://arushigargcs22:WEcTyoUXLp6lLgK9@explore-me.vaamwrk.mongodb.net/"; 

const uri=process.env.MONGO_URI;


//Updated configuration without useUnifiedTopology
mongoose.connect(uri, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

