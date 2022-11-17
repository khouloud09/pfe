const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
const Port = process.env.Port;
const DBconnect = require('./config/DB_Connect');
DBconnect();

app.use(express.json());
app.use(cors());


app.use('/user',require('./routes/user'));
app.use('/annonce',require('./routes/annonce'));
app.use('/fav',require('./routes/listFavoris'));






app.listen(Port,(err)=> 
err? console.log(err) : console.log(`server is running on ${Port}`));