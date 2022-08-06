//Constructor de Usuarios.
class Usuario {
    constructor(id, nombreDeUsuario, nombre, apellido, edad, email, contrasena, pregunta, respuesta, ) {
        this.id = id;
        this.nombreDeUsuario = nombreDeUsuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = parseFloat(edad);
        this.email = email;
        this.contrasena = contrasena;
        this.pregunta = pregunta;
        this.respuesta = respuesta;
    }
}