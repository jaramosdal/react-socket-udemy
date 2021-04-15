const {v4: uuid4}  = require('uuid');

class Band {
    constructor(name){
        this.ud = uuidv4();
        this.name = name;
        this.votes = 0;
    }


}

module.exports = Band;