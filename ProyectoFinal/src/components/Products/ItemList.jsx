import Item from "./Item";

const ItemList = ({products, isLoading}) => {

  if (isLoading) {
    return <p>Cargando...</p>;
  }
  return (
    <div>     
        {!isLoading && products.length === 0 && <p>No hay productos</p>}
          
        <div className="row">
          {products.map((product) => {
            return (
              <div key={product.id} className="col-md-3">
                <Item
                  id={product.id} 
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  pictureUrl={product.pictureUrl}
                  stock={product.stock}
                />
              </div>
            );
        })}
      </div>
    </div>
  );

};

export default ItemList;
