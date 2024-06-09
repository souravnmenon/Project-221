const express = require("express");
const app = express();
const server = require("http").Server(app);
var nodemailer = require("nodemailer")
app.use(express.json())

const transporter = nodemailer.createTransport({
    port:465,
    host:"smtp.google.com",
    auth:{
        user:"technicalhelper74@gmail.com",
        pass:"kvcq awuc ywcc vxov"
    },
    secure:true
})

server.listen(process.env.PORT || 3030);