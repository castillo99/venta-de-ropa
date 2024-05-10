document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.getElementById("products");

    // Recuperar los productos del almacenamiento local del navegador
    // Utiliza try-catch para manejar posibles errores al parsear JSON
    try {
        // Obtener los productos del almacenamiento local
        const productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];

        // Recorrer los productos y crear elementos HTML para mostrarlos
        productosGuardados.forEach(producto => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            
            // Crear elementos HTML para mostrar la información del producto
            const productName = document.createElement("h2");
            productName.textContent = producto.nombre;
            
            const category = document.createElement("p");
            category.textContent = `Categoría: ${producto.categoria}`;
            
            const price = document.createElement("p");
            price.textContent = `Precio: $${producto.precio}`;
            
            // Agregar los elementos al contenedor del producto
            productElement.appendChild(productName);
            productElement.appendChild(category);
            productElement.appendChild(price);
            
            productsContainer.appendChild(productElement);
        });
    } catch (error) {
        console.error("Error al cargar los productos:", error);
    }
});