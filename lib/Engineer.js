const employee = require("./Employee");

class Engineer extends employee {
    constructor (name, id, email, githubUsername) {
        super(name, id, email);

        this.githubUsername = githubUsername;

        
    }

    getGithub(){
        return this.githubUsername
    }

    getRole(){
        return "Engineer"
    }


}

module.exports = Engineer;