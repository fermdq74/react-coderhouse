import Item from "./Item";

const ItemList = ({products, isLoading}) => {

    return (
        <div>
          <h2>Listado de productos</h2>
          
          {isLoading && <p>Cargando...</p>}
          
          {!isLoading && products.length === 0 && <p>No hay productos</p>}
          
          <div className="row">
            {products.map((product) => {
              return (
                <div key={product.id} className="col-md-4">
                  <Item
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    pictureUrl={product.pictureUrl}
                  />
                </div>
              );
            })}
          </div>
        </div>
    );

};

export default ItemList;
