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
      let new_manager =  new Manager(data.name, data.id, data.email, data.office_number);
        managers.push(new_manager);
        console.log(managers);
        createNewMember(); 

    }).catch(function(err){
        console.log(err);
    })
};

// console.log(managers)

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
        let new_engineer =  new Engineer(data.name, data.id, data.email, data.github);
          engineers.push(new_engineer);
        //   console.log(engineers);
          createNewMember(); 
  
      }).catch(function(err){
          console.log(err);
      })
}


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
        let new_intern =  new Intern(data.name, data.id, data.email, data.school);
          interns.push(new_intern);
          console.log(interns);
          createNewMember(); 
  
      }).catch(function(err){
          console.log(err);
      })
}

function createNewMember() {
    inquirer.prompt ([
        {
            type: "list",
            name: "createNewMember",
            message: "Do you want to add a new team member?",
            choices: ["Add new engineer", "Add new intern", "Done adding team members"]
        }
    ]).then(data => {
//switch statement listening for whether to create new team member, or finish 
        switch(data.createNewMember) {
            case "Add new engineer":
            return engineerPrompt(); 

            case "Add new intern":
            return internPrompt(); 

            case "Done adding team members":
                const manager_cards = managers.map(manager => {
                    
                    return HTML_temps.createManagerCard(manager); 
                });
                const intern_cards = interns.map(intern => {
                    
                    return HTML_temps.createInternCard(intern); 
                });
                const engineer_cards = engineers.map(engineer => {
                    
                    return HTML_temps.createEngineerCard(engineer); 
                });

                let cards = []; 
                cards.push(manager_cards);
                cards.push(engineer_cards);
                cards.push(intern_cards);
                console.log(cards); 

                const template = HTML_temps.generateHTML(cards);

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

 
//create cards for each team member
function createEngineerCards() {

}

function createInternCards() {

}





