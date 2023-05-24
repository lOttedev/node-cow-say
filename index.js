const student = require("./information");

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hello my name is ${student.name}`,
    e: "xX",
    T: "_x_",
  })
);
