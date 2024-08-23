const items = [
    {
        id: 1,
        nombre: "Remera Praga",
        image: "/img/remeras/remera-01.jpg",
        precio: "$15.000",
        stock: 10,
        categoria: "remeras",
        description: "Remera manga corta blanca",
    },
    {
        id: 2,
        nombre: "Remera Paris",
        image: "/img/remeras/remera-02.jpg",
        precio: "$15.000",
        stock: 10,
        categoria: "remeras",
        description: "Remera manga corta azul",
    },
    {
        id: 3,
        nombre: "Campera Berlin",
        image: "/img/camperas/campera-01.jpg",
        precio: "$20.000",
        stock: 10,
        categoria: "camperas",
        description: "Campera de jeans",
    },
    {
        id: 4,
        nombre: "Campera Roma",
        image: "/img/camperas/campera-02.jpg",
        precio: "$25.000",
        stock: 10,
        categoria: "camperas",
        description: "Campera de hilo celeste",
    },
    {
        id: 5,
        nombre: "Buzo Londres",
        image: "/img/buzos/buzo-01.jpg",
        precio: "$40.000",
        stock: 8,
        categoria: "buzo",
        description: "Buzo negro urbano",
    },
    {
        id: 6,
        nombre: "Buzo Lisboa",
        image: "/img/buzos/buzo-02.jpg",
        precio: "$50.000",
        stock: 8,
        categoria: "buzo",
        description: "Buzo de media estación",
    }
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items);
        }, 3000);
    });
}

export const getOneProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items.find(e => e.id.toString() === id));
        }, 1000);
    });
<<<<<<< HEAD
}
=======
}
>>>>>>> db6bfc4ebc54c904660f09a9150a34df8ec90a05
