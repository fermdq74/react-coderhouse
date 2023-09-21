# Zebra Store

Zebra Store es un proyecto desarrollado en React como trabajo final del curso de React JS de [CoderHouse](https://coderhouse.com). El mismo consiste en una tienda online que permite buscar productos por categorías, agregarlos a un carro de compras y generar órdenes de compra.

## Table of Contents

- [Requisitos](#requisitos)
- [Configuración del Proyecto](#configuración-del-proyecto)
- [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Variables de entorno](#variables-de-entorno)
- [Licencia](#licencia)

## Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/) (se recomienda Yarn)

## Configuración del Proyecto

1. Clona el repositorio o descarga el código fuente.

   ```bash
   git clone https://github.com/fermdq74/react-coderhouse.git
2. Navega al directorio del proyecto.
   ```bash
   cd ProyectoFinal
3. Instala las dependencias del proyecto:

   Si usas npm:

       npm install

Si usas Yarn:

    yarm

## Ejecución del Proyecto
Para ejecutar el proyecto en modo de desarrollo, utiliza el siguiente comando:
Si usas npm:

    npm run dev

Si usas Yarn:

    yarn dev

Esto iniciará el servidor de desarrollo en [http://localhost:5173](http://localhost:3000/). La página se recargará automáticamente cuando realices cambios en el código fuente.

## Estructura del Proyecto/Componentes
La estructura de archivos y directorios del proyecto se verás así:

ProyectoFinal/
├───public
└───src
    │   App.css
    │   App.jsx
    │   index.css
    │   main.jsx
    │   utils.js
    │
    ├───assets
    │       logo.png
    │       react.svg
    │
    ├───components
    │   ├───Cart
    │   │       Cart.jsx
    │   │       CartWidget.jsx
    │   │       Checkout.jsx
    │   │       style.css
    │   │
    │   ├───Link
    │   │       Link.jsx
    │   │
    │   ├───Nav
    │   │       NavBar.jsx
    │   │       style.scss
    │   │
    │   └───Products
    │           Item.jsx
    │           ItemCount.jsx
    │           ItemDetail.jsx
    │           ItemDetailContainer.jsx
    │           ItemList.jsx
    │           ItemListContainer.jsx
    │           style.scss
    │
    ├───context
    │       CartContext.js
    │       CartProvider.jsx
    │
    ├───pages
    │       CartDetail.jsx
    │       Checkout.jsx
    │       Home.jsx
    │       ItemDetail.jsx
    │       ItemList.jsx
    │       NotFound.jsx
    │
    └───services
            cart.js
            products.js
   ── package.json
   ── README.md
└── ...

## Variables de entorno
-  `VITE_API_KEY`: la API key de Firebase.
-  `VITE_AUTH_DOMAIN`: el dominio de autenticación de Firebase.
-  `VITE_PROJECT_ID`: el ID del proyecto de Firebase.
-  `VITE_STORAGE_BUCKET`: el bucket de almacenamiento de Firebase.
-  `VITE_MESSAGING_SENDER_ID`: el ID del sender de Firebase.
-  `VITE_APP_ID`: el ID de la aplicación de Firebase.
