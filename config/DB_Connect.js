const mongoose = require('mongoose');

const DBconnect = async () => {
    try {
await mongoose.connect (process.env.DB_URI);
console.log('Data base is connected');
    }
    catch (error) {
        console.log('Error connecting');
    }
}
module.exports = DBconnect;