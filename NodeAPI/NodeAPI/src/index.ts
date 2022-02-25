import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import routes from './Routes/index'

dotenv.config()
const app = express()

// middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded()) // <form action='api' method="POST" /> thi express.json() khong nhan đuoc

// Database
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    autoIndex: false 
}, (err) => {
    if (err) throw err
    console.log('MongoDB connection.')
})

// Routes
app.use('/api', routes)


// Start Server Listener

const port  = process.env.PORT || 5000;

app.listen(port, ()=> {
    console.log(`start server listener on ${port}`)
})