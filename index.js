//create server
const express=require('express')
const app =express()

const connectDB=require('./config/connectDB')
connectDB()
const port = process.env.PORT || 6000;

app.listen(port, () => `Server running on port ${port} `);
console.log('Server is running ');

//connecting DB
const PERSON=require('./Models/Person')

//create a single new person 
 const person= new  PERSON({
     name:"Nidhal",
     age:25,
     favoriteFoods:"Burger"
 })
 person.save((err,res)=>{
    try {
         console.log(data);
     } catch (err) {
         console.log(err);
     }
 })


//Create multiple records 
 PERSON.create([{
         name:"fares",
         age:28,
        favoriteFoods:"Burger"
     },{
         name:"imen",
         age:31,
         favoriteFoods:"Burger"
     },{
         name:"haythem",
        age:33,
         favoriteFoods:"Burger"
     }],(err,data)=>{
        try {
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    })

//Read the data in th DB
PERSON.find({name:'Nidhal'},(err,data)=>{
    try {
        console.log(data);
    } catch (error) {
        console.log(error);
    }
})

//update
PERSON.findByIdAndUpdate("615d767687bf7f36a73bbf48",{age:'katar@gmail.com'},(err,data)=>{
    try {
        console.log(data);
    } catch (error) {
        console.log(error);
    }
} )

//delete
PERSON.findByIdAndDelete('615d767687bf7f36a73bbf48', (err,data)=>{
    try {
        console.log(data);
    } catch (error) {
        console.log(error);
    }
} )