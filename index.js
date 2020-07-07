var inquirer= require("inquirer");
var fs = require ('fs');
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt([

    {
        type: "input",
        name: "username",
        message: "what is your github username?"

    },

    {
        type: "input",
        name: "email",
        message: "what is your email address?"

    },

    {
        type: "input",
        name: "title",
        message: "what is your project's name?"

    },

    {
        type: "input",
        name: "description",
        message: "write a short description of your project"

    },

    {
        type: "list",
        name: "license",
        default: "use the arrows to select",
        choices: [
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "MIT",
            "none" 
    ]
},

{
    type: "input",
    name: "installation",
    default: "npm i",
    message: "what command should be run to install dependancies?"

},

{
    type: "input",
    name: "tests",
    default: "npm run test",
    message: "what command should be run for tests?"

},

{
    type: "input",
    name: "usage",
    message: "what does the user need to know about the repo?"

},

{
    type: "input",
    name: "contributions",
    message: "what does the user need to know about contributing to the repo?"

}

]).then(function(data){


    fs.writeFile("GeneratedREADME2.MD", generateMarkdown(data), function (err){
        if (err) {
            return console.log(err);
        
        }
        console.log("sucess")
    });

});
