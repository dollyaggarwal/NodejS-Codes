const fs = require("fs");
const path = require("path");
//sync call...
//fs.writeFileSync("./test.txt", "Helo World");

//async call...
//fs.writeFile("./test.txt", "Helo World Async", (err) =>{});

//sync call returns a result
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

//async call do not returns any result
fs.readFile("./contacts.txt", "utf-8", (err , result) =>{
    if(err)
    console.log("Error" , err);
else
    console.log(result);
});

// fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);

//fs.cpSync("./test.txt", "./copy.txt"); //create copy of test.txt file named copy.txt
// fs.unlinkSync("./copy.txt");//delete copy.txt

console.log(fs.statSync("./test.txt").isDirectory());
fs.mkdirSync("my-docs");

