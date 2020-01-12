const inquirer = require("inquirer"); 
const Employee = require("../Develop/lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const HTML_temps = require("./templates/html_template")
const fs = require("fs");

let engineers = [];
let interns = []; 
let managers = []; 


managerInit(); 
//collects information on Manager
function managerInit() {
    inquirer.prompt ([
        {
            type: "confirm",
            name: "manager",
            message: "Would you like to begin by creating a manger?"
        },
        {
            type: "input",
            name: "name",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your manager's ID number?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your manager's email?",
        },
        {
            type: "input",
            name: "office_number",
            message: "What is your manager's office number?",
        }
    ]).then(data => {
    //instantiates new Manager object, calls createNewMember function
      let new_manager =  new Manager(data.name, data.id, data.email, data.office_number);
        managers.push(new_manager);
        console.log(managers);
        createNewMember(); 

    }).catch(function(err){
        console.log(err);
    })
};


function engineerPrompt() {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your engineer's ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your engineer's email?",
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineer's github?"
        }
    ]).then(data => {
        //instantiates new Engineer object, pushes it into engineers array, calls createNewMember function
        let new_engineer =  new Engineer(data.name, data.id, data.email, data.github);
          engineers.push(new_engineer);
          console.log(engineers);
          createNewMember(); 
  
      }).catch(function(err){
          console.log(err);
      })
}

//collects information on new intern
function internPrompt() {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is your intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your intern's ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your intern's email?",
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school?"
        }
    ]).then(data => {
        //instantiates new Intern object, pushes it into interns array, calls createNewMember function
        let new_intern =  new Intern(data.name, data.id, data.email, data.school);
          interns.push(new_intern);
          console.log(interns);
          createNewMember(); 
  
      }).catch(function(err){
          console.log(err);
      })
}
//final prompt asking to create new team member, or finish
function createNewMember() {
    inquirer.prompt ([
        {
            type: "list",
            name: "createNewMember",
            message: "Do you want to add a new team member?",
            choices: ["Add new engineer", "Add new intern", "Done adding team members"]
        }
    ]).then(data => {
        //switch statement listening for user's response 
        switch(data.createNewMember) {
            case "Add new engineer":
            return engineerPrompt(); 

            case "Add new intern":
            return internPrompt(); 

            case "Done adding team members":
                //passes each array containing employee objects through a map function to generate cards
                const manager_cards = managers.map(manager => {
                    
                    return HTML_temps.createManagerCard(manager); 
                });
                const intern_cards = interns.map(intern => {
                    
                    return HTML_temps.createInternCard(intern); 
                });
                const engineer_cards = engineers.map(engineer => {
                    
                    return HTML_temps.createEngineerCard(engineer); 
                });

                //pushes all newly generated card arrays into a single all_cards array
                let all_cards = []; 
                cards.push(manager_cards);
                cards.push(engineer_cards);
                cards.push(intern_cards);

                //passes all_cards array to the html template, saves as const
                const template = HTML_temps.generateHTML(all_cards);

                //uses HTML template containing cards to write new html file
                fs.writeFile(`./output/${managers[0].name}_team.html`, template, function(err) {
                    if(err){
                        console.log(err)
                    }
                    console.log("Team file successfully generated!")
                });

                return template;

            default:
            return console.log("defaulted!")
        }
    })
}







