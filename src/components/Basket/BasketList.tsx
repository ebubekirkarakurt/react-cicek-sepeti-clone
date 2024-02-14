import { useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store/store';
import '../../styles/Basket.style.css';

export default function BasketList() {
  const cartList = useAppSelector(
    (state: RootState) => state.cartCounter.cartList,
  );

  function totalPrice(): number {
    let value = 0;
    cartList.map((element: any) => {
      element.map((p: any) => {
        value += p.price;
      });
    });
    return value;
  }

  return (
    <div className="basket-list">
      {cartList.map((nestedArray: any, index: number) => (
        <div key={index}>
          {nestedArray.map((element: any, nestedIndex: number) => (
            <div key={nestedIndex} className="card">
              <div className="top-container">
                <img
                  id="card-img"
                  src={
                    element.img
                      ? `${element.img}`
                      : require('../../assets/logo.png')
                  }
                  alt={`${element.name}`}
                />
                <div className="content-div">
                  <p id="product-name-title">{element.name}</p>
                  <div id="end-of-card">
                    <p id="product-price">{element.price}₺</p>
                    <p>1 adet</p>
                    <p>Ç</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="basket-detail">
            <div id="total-price">
              <p style={{ fontSize: 22, color: 'black', paddingLeft: 10 }}>
                Toplam Fiyat:
              </p>
              <p style={{ fontSize: 22, color: 'green', paddingLeft: 10 }}>
                {totalPrice()}₺
              </p>
            </div>
            <div className="order-div">
              <button id="go-to-cart">Sepeti Görüntüle</button>
              <button id="order-btn">Ödeme Yap</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
