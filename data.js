const productos = [
    {
        nombre: "Blusa corta",
        categoria: "Categoría 1",
        imagen: "imagen1.jpg",
        codigo: "ABC100",
        precio: 35.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Blusa larga",
        categoria: "Categoría 1",
        imagen: "imagen1.jpg",
        codigo: "ABC101",
        precio: 45.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Crop tops",
        categoria: "Categoría 1",
        imagen: "imagen1.jpg",
        codigo: "ABC102",
        precio: 20.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Blusa manga larga",
        categoria: "Categoría 1",
        imagen: "imagen1.jpg",
        codigo: "ABC103",
        precio: 45.900,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Blusa corta con mangas",
        categoria: "Categoría 1",
        imagen: "imagen1.jpg",
        codigo: "ABC104",
        precio: 38.900,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Crop tops encaje",
        categoria: "Categoría 1",
        imagen: "imagen1.jpg",
        codigo: "ABC105",
        precio: 35.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Crop tops strapples",
        categoria: "Categoría 1",
        imagen: "imagen1.jpg",
        codigo: "ABC106",
        precio: 28.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Blusa corta manga larga",
        categoria: "Categoría 1",
        imagen: "imagen1.jpg",
        codigo: "ABC107",
        precio: 30.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Blusa encaje",
        categoria: "Categoría 1",
        imagen: "imagen1.jpg",
        codigo: "ABC108",
        precio: 50.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Blusa de tiras",
        categoria: "Categoría 1",
        imagen: "imagen1.jpg",
        codigo: "ABC109",
        precio: 45.500,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Blusa strapple",
        categoria: "Categoría 1",
        imagen: "imagen1.jpg",
        codigo: "ABC110",
        precio: 47.900,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Vestido corto",
        categoria: "Categoría 2",
        imagen: "imagen1.jpg",
        codigo: "ABC200",
        precio: 60.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Vestido largo",
        categoria: "Categoría 2",
        imagen: "imagen1.jpg",
        codigo: "ABC201",
        precio: 80.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Vestido encaje",
        categoria: "Categoría 2",
        imagen: "imagen1.jpg",
        codigo: "ABC202",
        precio: 90.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Vestido corto de tiras",
        categoria: "Categoría 2",
        imagen: "imagen1.jpg",
        codigo: "ABC203",
        precio: 67.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Vestido largo tiras",
        categoria: "Categoría 2",
        imagen: "imagen1.jpg",
        codigo: "ABC204",
        precio: 70.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Vestido corto manga larga",
        categoria: "Categoría 2",
        imagen: "imagen1.jpg",
        codigo: "ABC205",
        precio: 56.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Vestido largo manga larga",
        categoria: "Categoría 2",
        imagen: "imagen1.jpg",
        codigo: "ABC206",
        precio: 63.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Vestido corto strapple",
        categoria: "Categoría 2",
        imagen: "imagen1.jpg",
        codigo: "ABC207",
        precio: 50.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Vestido largo strapple",
        categoria: "Categoría 2",
        imagen: "imagen1.jpg",
        codigo: "ABC208",
        precio: 60.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Pantalon blanco",
        categoria: "Categoría 3",
        imagen: "imagen1.jpg",
        codigo: "ABC300",
        precio: 90.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Pantalon negro",
        categoria: "Categoría 3",
        imagen: "imagen1.jpg",
        codigo: "ABC301",
        precio: 90.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Pantalon azul",
        categoria: "Categoría 3",
        imagen: "imagen1.jpg",
        codigo: "ABC302",
        precio: 90.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Pantalon rosado",
        categoria: "Categoría 3",
        imagen: "imagen1.jpg",
        codigo: "ABC303",
        precio: 90.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Pantalon rojo",
        categoria: "Categoría 3",
        imagen: "imagen1.jpg",
        codigo: "ABC304",
        precio: 90.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Pantalon gris",
        categoria: "Categoría 3",
        imagen: "imagen1.jpg",
        codigo: "ABC305",
        precio: 90.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Short jeans",
        categoria: "Categoría 3",
        imagen: "imagen1.jpg",
        codigo: "ABC306",
        precio: 70.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Short negro",
        categoria: "Categoría 3",
        imagen: "imagen1.jpg",
        codigo: "ABC307",
        precio: 70.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Short blanco",
        categoria: "Categoría 3",
        imagen: "imagen1.jpg",
        codigo: "ABC308",
        precio: 70.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Short gris",
        categoria: "Categoría 3",
        imagen: "imagen1.jpg",
        codigo: "ABC309",
        precio: 70.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Short encaje",
        categoria: "Categoría 3",
        imagen: "imagen1.jpg",
        codigo: "ABC310",
        precio: 80.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Short malla",
        categoria: "Categoría 3",
        imagen: "imagen1.jpg",
        codigo: "ABC311",
        precio: 85.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Sudadera blanca",
        categoria: "Categoría 3",
        imagen: "imagen1.jpg",
        codigo: "ABC312",
        precio: 100.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Sudadera negra",
        categoria: "Categoría 3",
        imagen: "imagen1.jpg",
        codigo: "ABC313",
        precio: 100.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Sudadera rojo",
        categoria: "Categoría 3",
        imagen: "imagen1.jpg",
        codigo: "ABC314",
        precio: 100.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Sudadera amarilla",
        categoria: "Categoría 3",
        imagen: "imagen1.jpg",
        codigo: "ABC315",
        precio: 100.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Enterizo largo",
        categoria: "Categoría 3",
        imagen: "imagen1.jpg",
        codigo: "ABC316",
        precio: 120.900,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Enterizo corto",
        categoria: "Categoría 3",
        imagen: "imagen1.jpg",
        codigo: "ABC317",
        precio: 120.900,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Enterizo de jeans",
        categoria: "Categoría 3",
        imagen: "imagen1.jpg",
        codigo: "ABC318",
        precio: 150.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Enterizo encaje",
        categoria: "Categoría 3",
        imagen: "imagen1.jpg",
        codigo: "ABC319",
        precio: 150.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Falda corta",
        categoria: "Categoría 2",
        imagen: "imagen1.jpg",
        codigo: "ABC209",
        precio: 55.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Falda larga",
        categoria: "Categoría 2",
        imagen: "imagen1.jpg",
        codigo: "ABC210",
        precio: 65.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Falda corta de jeans",
        categoria: "Categoría 2",
        imagen: "imagen1.jpg",
        codigo: "ABC211",
        precio: 70.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Falda larga de jeans",
        categoria: "Categoría 2",
        imagen: "imagen1.jpg",
        codigo: "ABC212",
        precio: 80.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Falda corta encaje",
        categoria: "Categoría 2",
        imagen: "imagen1.jpg",
        codigo: "ABC213",
        precio: 85.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Falda larga encaje",
        categoria: "Categoría 2",
        imagen: "imagen1.jpg",
        codigo: "ABC214",
        precio: 85.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Falda corta malla",
        categoria: "Categoría 2",
        imagen: "imagen1.jpg",
        codigo: "ABC215",
        precio: 80.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Falda larga malla",
        categoria: "Categoría 2",
        imagen: "imagen1.jpg",
        codigo: "ABC216",
        precio: 90.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Chaqueta corta de jeans",
        categoria: "Categoría 1",
        imagen: "imagen1.jpg",
        codigo: "ABC111",
        precio: 100.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },

    {
        nombre: "Chaqueta larga de jeans",
        categoria: "Categoría 1",
        imagen: "imagen1.jpg",
        codigo: "ABC112",
        precio: 120.000,
        atributos: {
            atributo1: "Valor 1",
            atributo2: "Valor 2",
            // Añade más atributos según sea necesario
        }
    },
    // Otros productos
];
