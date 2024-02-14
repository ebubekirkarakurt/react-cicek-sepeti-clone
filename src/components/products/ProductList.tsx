import Rater from 'react-rater';
import { useGetProductsQuery } from '../../service/useGetAllProducts';
import '../../styles/ProductList.style.css';
import 'react-rater/lib/react-rater.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store/store';
import { addCart, cartList } from '../../redux/reducer/cartCounter';

export default function ProductList() {
  const { data } = useGetProductsQuery('') || [];

  const categoryName = useAppSelector(
    (state: RootState) => state.selectCategory.value,
  );

  const dispatch = useAppDispatch();

  function addToListForCart(img: string, name: string, price: number) {
    const newItem = [{ img, name, price }];
    return newItem;
  }

  return (
    <div>
      <div className="main">
        {data &&
          data.map((element: any) => {
            if (categoryName === element.category) {
              return (
                <div className="container" key={element.id}>
                  <img
                    id="product-image"
                    src={
                      element.image
                        ? `${element.image}`
                        : require('../../assets/logo.png')
                    }
                    alt="product-img"
                  />
                  <div className="category-container">
                    <p id="category-name"> {element.category} </p>

                    <Rater
                      total={5}
                      rating={element.star}
                      interactive={false}
                    />
                  </div>

                  <p id="product-name"> {element.name} </p>
                  <p id="price"> {element.fixedPrice}₺ </p>

                  <div
                    className="btn"
                    onClick={() => {
                      dispatch(addCart());
                      dispatch(
                        cartList(
                          addToListForCart(
                            element.image,
                            element.name,
                            element.price,
                          ),
                        ),
                      );
                    }}
                  >
                    <button id="addToCartBtn">Sepete Ekle</button>
                  </div>
                </div>
              );
            } else if (categoryName === 'Tüm Kategoriler') {
              return (
                <div className="container" key={element.id}>
                  <img
                    id="product-image"
                    src={
                      element.image
                        ? `${element.image}`
                        : require('../../assets/logo.png')
                    }
                    alt="product-img"
                  />
                  <div className="category-container">
                    <p id="category-name"> {element.category} </p>

                    <Rater
                      total={5}
                      rating={element.star}
                      interactive={false}
                    />
                  </div>

                  <p id="product-name"> {element.name} </p>
                  <p id="price"> {element.fixedPrice}₺ </p>

                  <div className="btn">
                    <button
                      id="addToCartBtn"
                      onClick={() => {
                        dispatch(addCart());
                        dispatch(
                          cartList(
                            addToListForCart(
                              element.image,
                              element.name,
                              element.price,
                            ),
                          ),
                        );
                      }}
                    >
                      Sepete Ekle
                    </button>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
      </div>
      <div className="product-footer-line"></div>
    </div>
  );
}
