const inquirer = require("inquirer"); 
const Employee = require("../Develop/lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const HTML_temps = require("./templates/html_template")

let engineers = [];
let interns = []; 
let managers = []; 



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

managerInit(); 
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
        // const choice = data.choice
        // console.log(data.createNewMember);
        switch(data.createNewMember) {
            case "Add new engineer":
            return engineerPrompt(); 

            case "Add new intern":
            return internPrompt(); 

            case "Done adding team members":
                const manager_cards = managers.map(manager => {
                    // console.log("manager", manager);
                    return HTML_temps.createManagerCard(manager); 
                });
                const intern_cards = interns.map(intern => {
                    // console.log("manager", manager);
                    return HTML_temps.createInternCard(intern); 
                });
                const engineer_cards = engineers.map(engineer => {
                    // console.log("manager", manager);
                    return HTML_temps.createManagerCard(engineer); 
                });

                let cards = []; 
                cards.push(manager_cards);
                cards.push(engineer_cards);
                cards.push(intern_cards);
                console.log(cards); 
                // console.log(manager_cards);
                return manager_cards;
            //have arrays at this point, need to generate cards 
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

// function createManagerCard(data) {
//   return `<div class="col-sm-3">
//             <div class="card m-2 p-2">
//                 <h3 class="card-header bg-dark text-white text-center">${data.name}</h3>

//                 <div class="card-body bg-light">
//                   <h5 class="card-title text-center">Manager</h5>
//                   <p class="card-text">
//                     ID: ${data.id}
//                   </p>
//                   <p class="card-text">
//                     email: ${data.email} 
//                   </p>
//                   <p class="card-text">
//                     office number: ${data.office_number}
//                   </p>
//                 </div>
//             </div>
//             </div>`

//     // fs.appendFile function here after each card gets made? 
// }

//append cards to HTML template literal
//write HTML file



