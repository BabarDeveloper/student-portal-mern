const mongoose = require("mongoose")


const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/SchoolManagementApp")
        console.log("database connected");
    } catch (error) {
        console.log("Something went wrong while connecting to db", error);
    }
}

module.exports = dbConnect