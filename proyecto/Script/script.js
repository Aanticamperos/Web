const usuario = [
    {
        correo: "tiago@gmail.com",
        contra: "Tiago100"
    },
    {
        correo: "santiago@gmail.com",
        contra: "Santiago01"
    },
    {
        correo: "deportivocali@gmail.com",
        contra: "Cali1000"
    }
];

console.log("hola");


function validarLogin() {
    console.log("hola");
    return new Promise((resolve, reject) => {
        var email = document.getElementById('email').value;
        var contraseña = document.getElementById('contraseña').value;
        var mensajeError = document.getElementById('mensajeError');
        var cargando = document.getElementById("cargando");
        mensajeError.innerText = "";
        var contraverificacion = false;
        var correoverificacion = false;
        var tieneMayuscula = false;
        var tieneMinuscula = false;
        event.preventDefault();

        if (email === '' || contraseña === '') {
            mensajeError.innerHTML += "\n Por favor, complete todos los campos.";
            return;
        }

        var tieneArroba = false;

        for (var i = 0; i < email.length; i++) {
            var caracter = email[i];

            if (caracter === '@') {
                tieneArroba = true;
                correoverificacion = true;
                break;
            }
        }

        if (!tieneArroba) {
            mensajeError.innerHTML += "\n El correo electrónico debe contener el símbolo @";
            return;
        }

        var arrayContraseña = [...contraseña];
        var contador = 0;
        if (contraseña.length < 8) {
            mensajeError.innerHTML += "\n Debe tener una cantidad de 8 caracteres mínimos. ";
        }

        for (let i = 0; i < arrayContraseña.length; i++) {
            var caracter = arrayContraseña[i];

            if (caracter >= '0' && caracter <= '9') {
                contador++;
            }

            if (caracter >= 'a' && caracter <= 'z') {
                tieneMinuscula = true;
            } else if (caracter >= 'A' && caracter <= 'Z') {
                tieneMayuscula = true;
            }
        }

        if (contador < 2 || !tieneMinuscula || !tieneMayuscula) {
            mensajeError.innerHTML += "\n La contraseña debe contener al menos una minúscula, una mayúscula y dos dígitos.";
            return;
        }

        contraverificacion = usuario.some(user => user.correo === email && user.contra === contraseña);

        if (contraverificacion && correoverificacion) {
            cargando.innerHTML="CARGANDO...";
            setTimeout(() => {
                location.href = "listas.html";
                resolve('Login exitoso'); 
            }, 2000);
        } else {
            mensajeError.innerHTML += "\n El correo no está registrado o la contraseña no es válida.";
        }
    });
}

function limpiarCampos() {
    document.getElementById('email').value = '';
    document.getElementById('contraseña').value = '';
    document.getElementById('mensajeError').innerText = '';
}
