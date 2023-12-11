const mongoose = require("mongoose");
const DBURL = process.env.DBURL;

mongoose.connect(DBURL, {},
).then(() => {
    console.log('connection Succesfull')
}).catch((err) => {
    console.log('connection failed', err)
})