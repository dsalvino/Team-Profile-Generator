const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

function writeToFile(fileName, data) {
    var manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice);
    var engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
    var intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);

    var html = `<html>
    <head>
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
      <div class="container">
          <div class="row py-5">
  
              <div class="col-6">
  
                  <div class="card border-primary " style="width: 18rem;">
                      <div class="card-header bg-primary">
                          <h5 class="card-title">${manager.name}</h5>
                          <h5 class="card-title">Manager</h5>
                      </div>
                      <div class="card-body">
                      <p class="card-text">ID:${manager.id}</p>
                      <p class="card-text">email:<a href="mailto:${manager.email}">${manager.email}</a></p>
                      <p class="card-text">office number:${manager.officeNumber}</p>
                      </div>
                  </div>
              </div>
  
              <div class="col-6">
  
                  <div class="card border-primary " style="width: 18rem;">
                      <div class="card-header bg-primary">
                          <h5 class="card-title">${engineer.name}</h5>
                          <h5 class="card-title">Engineer</h5>
                      </div>
                      <div class="card-body">
                      <p class="card-text">ID:${engineer.id}</p>
                      <p class="card-text">email:<a href="mailto:${engineer.email}">${engineer.email}</a></p>
                      <p class="card-text">Github Username:<a target = "_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></p>
                      </div>
                  </div>
              </div>
  
              </div><div class="row">
  
              <div class="col-4">
  
                  <div class="card border-primary " style="width: 18rem;">
                      <div class="card-header bg-primary">
                          <h5 class="card-title">${intern.name}</h5>
                          <h5 class="card-title">Intern</h5>
                      </div>
                      <div class="card-body">
                      <p class="card-text">ID:${intern.id}</p>
                      <p class="card-text">email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                      <p class="card-text">School:${intern.school}</p>
                      </div>
                  </div>
              </div>
  
           
      <!-- Optional JavaScript -->
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
     
    </body>
  </html>`;

    fs.writeFile(fileName, html,
        function (err, data) {
            if (err) {
                return console.log(err);
            }
            console.log(data);


        })
}

function init() {
    inquirer.prompt([

        {
            type: 'input',
            message: 'Name of Manager',
            name: 'managerName'
        },

        {
            type: 'input',
            message: 'Manager ID',
            name: 'managerId'
        },

        {
            type: 'input',
            message: 'Manager Email',
            name: 'managerEmail'
        },

        {
            type: 'input',
            message: 'Office Number',
            name: 'managerOffice'
        },

        {
            type: 'input',
            message: 'Engineer Name',
            name: 'engineerName'
        },

        {
            type: 'input',
            message: 'Engineer ID',
            name: 'engineerId'
        },

        {
            type: 'input',
            message: 'Engineer Email',
            name: 'engineerEmail'
        },

        {
            type: 'input',
            message: 'Github Username',
            name: 'engineerGithub'
        },

        {
            type: 'input',
            message: 'Intern Name',
            name: 'internName'
        },

        {
            type: 'input',
            message: 'Intern ID',
            name: 'internId'
        },

        {
            type: 'input',
            message: 'Intern Email',
            name: 'internEmail'
        },

        {
            type: 'input',
            message: 'Interns School',
            name: 'internSchool'
        },


    ]).then(answer => {
        writeToFile("teamMembers.html", answer), (err) =>
            err ? console.error(err) : console.log('success!')
    });
};


init();