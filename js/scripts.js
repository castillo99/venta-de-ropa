document.addEventListener("DOMContentLoaded", function () {
    // Variables comunes
    const resultsTableBody = document.querySelector("#resultadosBusqueda tbody");
    const productsContainer = document.getElementById("products");
    const prevPageButton = document.getElementById("prevPage");
    const nextPageButton = document.getElementById("nextPage");
    const pageInfo = document.getElementById("pageInfo");
    const form = document.getElementById("busquedaForm");
    const resultadosBusqueda = document.getElementById("resultadosBusqueda");

    let currentPage = 1;
    const productsPerPage = 15; // Puedes ajustar este valor según tus necesidades
    let totalProducts = 0;

    // Función para mostrar los productos en una tabla o contenedor
    function mostrarProductos(productos, contenedor) {
        contenedor.innerHTML = "";

        if (contenedor === resultsTableBody) {
            // Mostrar productos en tabla
            if (productos.length > 0) {
                productos.forEach(producto => {
                    const row = document.createElement("tr");

                    const cellNombre = document.createElement("td");
                    cellNombre.textContent = producto.nombre;
                    row.appendChild(cellNombre);

                    const cellImagen = document.createElement("td");
                    const img = document.createElement("img");
                    img.src = producto.imagen;
                    img.alt = producto.nombre;
                    img.style.width = "50px";
                    img.style.height = "50px";
                    cellImagen.appendChild(img);
                    row.appendChild(cellImagen);

                    const cellCategoria = document.createElement("td");
                    cellCategoria.textContent = producto.categoria;
                    row.appendChild(cellCategoria);

                    const cellPrecio = document.createElement("td");
                    cellPrecio.textContent = producto.precio.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
                    row.appendChild(cellPrecio);

                    const cellColor = document.createElement("td");
                    cellColor.textContent = producto.atributos.color;
                    row.appendChild(cellColor);

                    const cellTalla = document.createElement("td");
                    cellTalla.textContent = producto.atributos.talla;
                    row.appendChild(cellTalla);

                    const cellTela = document.createElement("td");
                    cellTela.textContent = producto.atributos.tela;
                    row.appendChild(cellTela);

                    contenedor.appendChild(row);
                });
            } else {
                contenedor.innerHTML = "<tr><td colspan='6'>No se encontraron productos que coincidan con los criterios de búsqueda.</td></tr>";
            }
        } else {
            // Mostrar productos en contenedor
            if (productos.length > 0) {
                productos.forEach(producto => {
                    const productElement = document.createElement("div");
                    productElement.classList.add("product");

                    const productName = document.createElement("h2");
                    productName.textContent = producto.nombre;

                    const category = document.createElement("p");
                    category.textContent = `Categoría: ${producto.categoria}`;

                    const imagen = document.createElement("img");
                    imagen.src = producto.imagen;
                    imagen.alt = producto.nombre;

                    const codigo = document.createElement("p");
                    codigo.textContent = `Código: ${producto.codigo}`;

                    const price = document.createElement("p");
                    price.textContent = `Precio: ${producto.precio.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}`;

                    const color = document.createElement("p");
                    color.textContent = `Color: ${producto.atributos.color}`;

                    const talla = document.createElement("p");
                    talla.textContent = `Talla: ${producto.atributos.talla}`;

                    const tela = document.createElement("p");
                    tela.textContent = `Tela: ${producto.atributos.tela}`;

                    productElement.appendChild(productName);
                    productElement.appendChild(category);
                    productElement.appendChild(imagen);
                    productElement.appendChild(codigo);
                    productElement.appendChild(price);
                    productElement.appendChild(color);
                    productElement.appendChild(talla);
                    productElement.appendChild(tela);

                    contenedor.appendChild(productElement);
                });
            } else {
                contenedor.innerHTML = "<p>No se encontraron productos que coincidan con los criterios de búsqueda.</p>";
            }
        }
    }

    // Función para cargar los productos según la página actual
    function cargarProductos(pagina) {
        const productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];
        totalProducts = productosGuardados.length;

        const startIndex = (pagina - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;

        const productosPaginados = productosGuardados.slice(startIndex, endIndex);
        mostrarProductos(productosPaginados, resultsTableBody || productsContainer);

        pageInfo.textContent = `Página ${pagina} de ${Math.ceil(totalProducts / productsPerPage)}`;
        prevPageButton.disabled = pagina === 1;
        nextPageButton.disabled = endIndex >= totalProducts;
    }

    // Función para buscar productos según los criterios del formulario
    function buscarProductos() {
        const nombre = document.getElementById("buscarNombre").value.toLowerCase();
        const categoria = document.getElementById("buscarCategoria").value;
        const precio = parseFloat(document.getElementById("buscarPrecio").value);

        const productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];

        const productosFiltrados = productosGuardados.filter(producto => {
            return (
                (nombre === "" || producto.nombre.toLowerCase().includes(nombre)) &&
                (categoria === "" || producto.categoria === categoria) &&
                (isNaN(precio) || producto.precio <= precio)
            );
        });

        totalProducts = productosFiltrados.length;
        currentPage = 1;
        const productosPaginados = productosFiltrados.slice(0, productsPerPage);
        mostrarProductos(productosPaginados, resultsTableBody || productsContainer);
        pageInfo.textContent = `Página 1 de ${Math.ceil(totalProducts / productsPerPage)}`;
        prevPageButton.disabled = true;
        nextPageButton.disabled = productsPerPage >= totalProducts;
    }

    // Cargar y mostrar todos los productos al cargar la página
    cargarProductos(currentPage);

    // Añadir eventos a los botones de paginación
    prevPageButton.addEventListener("click", function() {
        if (currentPage > 1) {
            currentPage--;
            cargarProductos(currentPage);
        }
    });

    nextPageButton.addEventListener("click", function() {
        if (currentPage * productsPerPage < totalProducts) {
            currentPage++;
            cargarProductos(currentPage);
        }
    });

    // Añadir evento al formulario de búsqueda
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        buscarProductos();
    });
});