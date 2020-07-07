var inquirer= require("inquirer");
var fs = require ('fs');
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");




//inquirer activity no 15
//24 STU_template literals

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

    // var filename= data.name.toLowerCase().split('').join('') + ".JSON";

    fs.writeFile("GeneratedREADME.MD", generateMarkdown(data), function (err){
        if (err) {
            return console.log(err);
        
        }
        console.log("sucess")
    });

});



//template literals
//instead of HTML file will be readme type of file
//markup language
//pass data coming from answers from inquirer

//creates HTML file
// const songSnippet = `
//     <div class = "song">
//         <h2>${music.title}</h2>
//         <p class = "artist">${music.artist}</p>
//         <p class = "album">${music.album}</p>
//     </div>
//     `;

//     const element = document.getElementById ("music");
//     element.innerHTML = songSnippet

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
