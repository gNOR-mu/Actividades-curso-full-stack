const btnInicio = document.getElementById("btnInicio")

btnInicio.addEventListener("click", () => {
    window.scrollTo({
        behavior: "smooth",
        top: 0
    });
})