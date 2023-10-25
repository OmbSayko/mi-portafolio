// Eventos para la clase .active
const navLinks = document.querySelectorAll("nav ul li");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (event) => {
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });

    event.currentTarget.classList.add("active");
  });
});

//
const info = document.querySelector(".alert-info");

        function process(event) {
            event.preventDefault();

            const phoneInput = document.getElementById("phone");
            const phoneNumber = phoneInput.value;
            const regex = /^[0-9]{10}$/; // Expresión regular para validar un número de 10 dígitos.

            if (regex.test(phoneNumber)) {
                // Número válido, realiza la redirección a WhatsApp.
                var whatsappURL = "https://wa.me/" + 7228066010;
                window.location.href = whatsappURL;
            } else {
                // Número no válido, muestra un mensaje de error.
                info.style.display = "block";
                info.innerHTML = "El número de teléfono no es válido. Por favor, ingrese un número de 10 dígitos.";
            }
        }

   