const lista = $("#lista");

// cambia el color
lista.find("li").css("color", "green");

// agrega un nuevo elemento
lista.append("<li>Cuarto elemento</li>")


let listaVisible = true;
const btnLista = $("#btnLista");

btnLista.click(function () {
    listaVisible = !listaVisible;
    lista.css("display", listaVisible ? "block" : "none");
    btnLista.text(listaVisible ? "Ocultar lista" : "Mostrar Lista")
})


$(document).ready(function () {
    $('#myDataTable').DataTable();
});