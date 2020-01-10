const inquirer = require("inquirer"); 



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
    ])
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
    ])
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
    ])
}

function createNewMember() {
    inquirer.prompt ([
        {
            type: "list",
            name: "createNewMember",
            message: "Do you want to add a new team member?",
            choices: ["Add new engineer", "Add new intern", "Done adding team members"]
        }
    ])
}

