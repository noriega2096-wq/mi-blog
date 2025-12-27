document.addEventListener("DOMContentLoaded", () => {
    console.log("Blog cargado correctamente");

    document.querySelector("header h1")
        .addEventListener("click", () => {
            alert("Bienvenido a mi blog personal 👨‍💻");
        });
});
