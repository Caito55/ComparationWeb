document.addEventListener('DOMContentLoaded', function() {
    // Comparador de Texto
    document.getElementById('compararTexto').addEventListener('click', function() {
        var texto1 = document.getElementById('texto1').value;
        var texto2 = document.getElementById('texto2').value;
        
        var comparador = new diff_match_patch();
        var diferencias = comparador.diff_main(texto1, texto2);
        comparador.diff_cleanupSemantic(diferencias);

        var resultadoTexto = document.getElementById('resultadoTexto');
        resultadoTexto.innerHTML = comparador.diff_prettyHtml(diferencias);
    });

    // Comparador de PDF (Requiere biblioteca externa)
    document.getElementById('compararPDF').addEventListener('click', function() {
        // Implementa la lógica para comparar archivos PDF aquí
    });

    // Comparador de Imagen (Requiere biblioteca externa)
    document.getElementById('compararImagen').addEventListener('click', function() {
        // Implementa la lógica para comparar imágenes aquí
    });
});
