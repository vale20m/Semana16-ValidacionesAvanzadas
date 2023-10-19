// Declaramos las constantes (de HTML) con las que trabajaremos en JS

const form = document.querySelector("#form");

const password1 = document.querySelector("#password1");

const password2 = document.querySelector("#password2");

const terminos = document.querySelector("#terminos");

const mensajeTerminos = document.querySelector("#mensajeTerminos");

const botonTerminos = document.querySelector("#botonTerminos");

// Agregamos un addEventListener al form, el cual ejecuta una funcion cuando se intenta enviar.

form.addEventListener('submit', function (event) {

    // Se chequea si los campos del form son validos, y en caso de que no lo sean, no ejecuta el caso default y detiene la propagación del código
    // En caso de que sean válidos, continua normalmente.

    if (!form.checkValidity()){
        event.preventDefault();
        event.stopPropagation();
    }

    /*
    Agregamos un addEventListener al campo de repetir contraseña, que ejecuta una función cuando se modifica el mismo
    y, en caso de que las contraseñas sean diferentes o el primer campo contraseña no sea válido, se muestra un mensaje
    de error, escondiendolo si no se cumple ninguna condición.
    */

    password2.addEventListener("input", () => {
        if ((password2.value != password1.value) || (!password1.checkValidity())) {
          password2.setCustomValidity('Las contraseñas deben de ser iguales');
        }
        else {
          password2.setCustomValidity('');
        }
    });

    /*
    Agregamos un addEventListener al checkbox "terminos", el cual ejecuta una función al cambiar de estado, y en caso
    de no estar chequeado, muestra un mensaje de error y colorea el boton de rojo. Realiza lo contrario si no se cumple.
    */

    terminos.addEventListener("change", function(){
        if (!terminos.checked){
            mensajeTerminos.hidden = false;
            botonTerminos.style.color = "red";
        } else {
            mensajeTerminos.hidden = true;
            botonTerminos.style.color = "";
        }
    });

    // Agrega una clase al form, la cual permite mostrar los campos invalidos y validos del mismo.

    form.classList.add('was-validated');

});


