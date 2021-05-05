

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            // Validar el JWT
            // Si el token no es válido, desconectar

            // Saber qué usuario está activo mediante el uid

            // Emitir todos los usuairos conectados

            // Socket join

            // Escuchar cuando el cliente manda un mensaje
            // mensaje-personal

            // Disconnect 
            // Marcar en la BD que el usuario se desconectó

            // Emitir todos los usuarios conectados
        
        });
    }


}


module.exports = Sockets;