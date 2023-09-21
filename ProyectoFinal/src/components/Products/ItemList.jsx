import Item from "./Item";

const ItemList = ({products, isLoading}) => {

  if (isLoading) {
    return <p className="text-center">Cargando...</p>;
  }
  return (
    <div className="row">
      <div className="col-md-8 mx-auto text-center">
        {!isLoading && products.length === 0 && <p>No hay productos</p>}
          
        <div className="row justify-content-center">
          {products.map((product) => {
            return (
              <div key={product.id} className="col-md-4">
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
    </div>
  );

};

export default ItemList;
