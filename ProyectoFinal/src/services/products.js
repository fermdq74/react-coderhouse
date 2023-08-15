const productsArr = [
    {
        id: 1,
        title: "iPhone 12",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        price: 1000,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_913741-MLM51559386469_092022-O.webp",
        stock: 3
    },
    {
        id: 2,
        title: "iPhone 11",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        price: 800,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_913741-MLM51559386469_092022-O.webp",
        stock: 4
    },
    {
        id: 3,
        title: "iPhone 10",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        price: 500,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_913741-MLM51559386469_092022-O.webp",
        stock: 5
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
        }, 2000); // 2 segundos

    });

}