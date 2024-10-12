let emailvalido = "root@cbtis258.edu.mx";
let passvalido = "admin123";

const chequeloging = (event) =>  {
    event.preventdefaul();

    const email = document.getelement8yid("email").value;
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("loginmrnsaje").value;

    if(email=== emailvalido&& password=== passvalido){ 
        mensaje.textocontent="inicio de sesion correcto";
        mensaje.style.color="green";

        settimeout(()=>  {
            window.location.href="dashboard.html";

        },1000);
    }
    else { 
        mensaje.textcontent="email o contraseña incorrecta";
        mensaje.style.color="red";
    }
};