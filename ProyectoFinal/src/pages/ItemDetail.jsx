import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/Products/ItemDetailContainer";

const ItemDetail = () => {
  
  const { id } = useParams();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <ItemDetailContainer id={ id } />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
