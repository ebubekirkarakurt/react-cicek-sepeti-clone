import Rater from 'react-rater';
import { useGetProductsQuery } from '../service/useGetAllProducts';
import '../styles/ProductList/ProductList.style.css';
import 'react-rater/lib/react-rater.css';

export default function ProductList() {
  const { data } = useGetProductsQuery('') || [];

  return (
    <div>
      <div className="main">
        {data &&
          data.map((element: any) => {
            return (
              <div className="container" key={element.id}>
                <img
                  id="product-image"
                  src={
                    element.image
                      ? `${element.image}`
                      : require('../assets/logo.png')
                  }
                  alt={`${element.name}`}
                />
                <div className="category-container">
                  <p id="category-name"> {element.category} </p>

                  <Rater total={5} rating={element.star} interactive={false} />
                </div>

                <p id="product-name"> {element.name} </p>
                <p id="price"> {element.fixedPrice}₺ </p>

                <div className="btn">
                  <button id="addToCartBtn">Sepete Ekle</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
