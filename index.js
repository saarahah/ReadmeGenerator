var inquirer= require("inquirer");
var fs = require ('fs');


// array of questions for user
// const questions = [

// ];

//inquirer activity no 15
//24 STU_template literals

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "what is your name"

    },

    {
        type: "input",
        name: "name",
        message: "what is your name"

    },

    {
        type: "input",
        name: "name",
        choices: [
            "phone",
            "email",
            "other" 
    ]
}

]).then(function(data){

    var filename= data.name.toLowerCase().split('').join('') + ".json";

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err){
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
const songSnippet = `
    <div class = "song">
        <h2>${music.title}</h2>
        <p class = "artist">${music.artist}</p>
        <p class = "album">${music.album}</p>
    </div>
    `;

    const element = document.getElementById ("music");
    element.innerHTML = songSnippet

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
