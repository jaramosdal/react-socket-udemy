const { v4: uuidv4 } = require('uuid');

class Ticket {
    constructor(numero) {
        this.id = uuidv4();
        this.numero = numero;
        this.escritorio = null;
        this.agente = null;
    }
}

export default Ticket;


// module.exports = Ticket;