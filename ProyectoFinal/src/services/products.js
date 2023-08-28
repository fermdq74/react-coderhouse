const productsArr = [
    {
        id: 1,
        title: "iPhone 12",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        price: 1000,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_913741-MLM51559386469_092022-O.webp",
        stock: 3,
        categoryId: 'tecnologia'
    },
    {
        id: 2,
        title: "iPhone 11",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        price: 800,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_913741-MLM51559386469_092022-O.webp",
        stock: 4,
        categoryId: 'tecnologia'
    },
    {
        id: 3,
        title: "iPhone 10",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        price: 500,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_913741-MLM51559386469_092022-O.webp",
        stock: 5,
        categoryId: 'tecnologia'
    },
    {
        id: 4,
        title: "TV QLED 55",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        price: 500,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_623602-MLA52079115465_102022-O.webp",
        stock: 5,
        categoryId: 'tv_y_audio'
    },
    {
        id: 5,
        title: "TV QLED 65",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        price: 600,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_623602-MLA52079115465_102022-O.webp",
        stock: 15,
        categoryId: 'tv_y_audio'
    },
    {
        id: 6,
        title: "Sillon 2 cuerpos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        price: 600,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_721122-MLA41178368553_032020-O.webp",
        stock: 3,
        categoryId: 'hogar'
    }
];

const categoriesArr = [
    {
        name: 'TV y Audio',
        slug: 'tv_y_audio'
    },
    {
        name: 'Tecnología',
        slug: 'tecnologia'
    },
    {
        name: 'Hogar',
        slug: 'hogar'
    }
];

export const getProducts = () => {

    return new Promise( (resolve, reject) => {

        const operacionExitosa = true;
        
        setTimeout(() => {
            if (operacionExitosa) {
                resolve({ 
                    products: productsArr 
                });
            } else {
                reject({ mensaje: "La operación no fue exitosa" });
            }
        }, 1000); 

    });

}

export const getProductsByCategory = ( category ) => {

    return new Promise( (resolve, reject) => {

        const operacionExitosa = true;
        const products = category ? productsArr.filter( (product) => product.categoryId === category) : productsArr

        setTimeout(() => {
            if (operacionExitosa) {
                resolve({ 
                    products: products 
                });
            } else {
                reject({ mensaje: "La operación no fue exitosa" });
            }
        }, 1000); 
    });

}

export const getItem = ( id ) => {

    return new Promise( (resolve, reject) => {

        const operacionExitosa = true;

        const product = productsArr.filter( (item) => item.id == id);
        
        setTimeout(() => {
            if (operacionExitosa) {
                resolve({ 
                    product: product[0]
                });
            } else {
                reject({ mensaje: "No existe el producto" });
            }
        }, 1000); 
    });

}

export const getCategories = () => {

    return new Promise( (resolve, reject) => {

        const operacionExitosa = true;

        if (operacionExitosa) {
            resolve({ 
                categories: categoriesArr
            });
        } else {
            reject({ mensaje: "La operación no fue exitosa" });
        }

    });

}

export const getCategory = ( id ) => {

    const result = categoriesArr.filter( (category) => category.slug === id)

    return result;

}














