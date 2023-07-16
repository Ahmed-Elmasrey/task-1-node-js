const yargs = require ("yargs")

const fs = require ("fs")
const person = require ("./allData")


const personJson = JSON.stringify (person)
fs.writeFileSync ( "data.json" , personJson )
fs.readFileSync("data.json").toString()
const personObj = JSON.parse (personJson)
personObj.fname="adel"
personObj.lname="ahmed"
personObj.age="40"
personObj.city="cairo"

const personJson2=JSON.stringify (personObj)
fs.writeFileSync ( "data.json" , personJson2 )

