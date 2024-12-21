const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname,'02_FileSystem','sample.txt'),'utf-8',(err,data)=>{
  if(err)
    throw err
  console.log(data)
})


fs.writeFile(path.join(__dirname,'02_FileSystem','sample1.txt'),'Hi, My Name is Manikandaprapu',(err)=>{
  if(err)
    throw err
  console.log("Write Complete")
})

fs.appendFile(path.join(__dirname,'02_FileSystem','sample1.txt'),'Hi, My Name is Prathi',(err)=>{
  if(err)
    throw err
  console.log("Write Complete")
})
