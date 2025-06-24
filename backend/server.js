import express from 'express'
import cors from 'cors'
import {connectDB} from './config/db.js'
import mongoose from 'mongoose'
import User from './model/user.js'
const app=express()

connectDB()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
//custom middleware
const methodFind=(req,res,next)=>{
    console.log(`${req.method} ${req.url}`)
    next()
}
app.use(methodFind)
app.get('/get',async(req,res)=>{
    const user= await User.find()
    res.json(user)
})

app.listen(3000,()=>{
    console.log('Server running on port 3000')
})


app.post('/post',async(req,res)=>{
    try{
        const newUser=new User(req.body)
        await newUser.save()
        res.status(201).json(newUser)
    }catch(error){
        res.status(401).json(error)
    }
})

app.put('/put/:id',async(req,res)=>{
    try{
        const update=await User.findByIdAndUpdate(req.params.id,req.body)
        res.json(update)
    }
    catch(error){
        res.json(error)
    }
})

app.patch('/patch',(req,res)=>{
    res.send('from patch')
})

app.delete('/delete/:id',async(req,res)=>{
     try{
        const del=await User.findByIdAndDelete(req.params.id,req.body)
        res.json(del)
    }
    catch(error){
        res.json(error)
    }
})