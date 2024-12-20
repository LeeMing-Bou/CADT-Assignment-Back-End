const mongoose = require("mongoose");

const dbName = 'Backend_DB';
const mongoDBContainerName = `DB_MyAssignment_Back_End`;
// const mongoURI = `mongodb://localhost:27088/${dbName}`;
const mongoURI = `mongodb://${mongoDBContainerName}:27017`;


async function dbConnection () {
    mongoose.connection.on('connected', () => {
        console.log('Your Connection was connected successfully!!!');
    })
    await mongoose.connect(mongoURI,{
        dbName : dbName,
    });
}

module.exports = dbConnection;  