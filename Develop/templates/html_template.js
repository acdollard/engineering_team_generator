function createManagerCard(data) {
    // console.log("cmc", data);
    return `<div class="col-sm-3">
              <div class="card m-2 p-2">
                  <h3 class="card-header bg-dark text-white text-center">${data.name}</h3>
  
                  <div class="card-body bg-light">
                    <h5 class="card-title text-center">Manager</h5>
                    <p class="card-text">
                      ID: ${data.id}
                    </p>
                    <p class="card-text">
                      email: ${data.email} 
                    </p>
                    <p class="card-text">
                      office number: ${data.office_number}
                    </p>
                  </div>
              </div>
              </div>`
};

function createEngineerCard(data) {
    // console.log("cmc", data);
    return `<div class="col-sm-3">
              <div class="card m-2 p-2">
                  <h3 class="card-header bg-success text-white text-center">${data.name}</h3>
  
                  <div class="card-body bg-light">
                    <h5 class="card-title text-center">Engineer</h5>
                    <p class="card-text">
                      ID: ${data.id}
                    </p>
                    <p class="card-text">
                      email: ${data.email} 
                    </p>
                    <p class="card-text">
                      github: ${data.github}
                    </p>
                  </div>
              </div>
              </div>`
};

function createInternCard(data) {
    // console.log("cmc", data);
    return `<div class="col-sm-3">
              <div class="card m-2 p-2">
                  <h3 class="card-header bg-danger text-white text-center">${data.name}</h3>
  
                  <div class="card-body bg-light">
                    <h5 class="card-title text-center">Intern</h5>
                    <p class="card-text">
                      ID: ${data.id}
                    </p>
                    <p class="card-text">
                      email: ${data.email} 
                    </p>
                    <p class="card-text">
                      school: ${data.school}
                    </p>
                  </div>
              </div>
              </div>`
};




function generateHTML(cards) {
 return   `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <div class="row">
            <div class="col-12 bg-primary text-light text-center pt-4 pb-4">
                <h3 class="color-dark">My Team</h3>
            </div>
        </div>
    <div class="container bg-light mt-2">
        <div class="row">
           
    
        ${cards}
             
        </div>
    
    </div>
        
    </body>
    </html>`
}


module.exports = {generateHTML, createManagerCard, createInternCard, createEngineerCard} 