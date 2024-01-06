import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { setVisibility } from '../../redux/reducer/sidebarVisibility';
import { RootState } from '../../redux/store/store';
import '../../styles/SideBarMenu.style.css'
import BasketList from '../Basket/BasketList';
import CartIcon from '../NavBar/Icons/CartIcon';


export default function SideBarMenu() {

    const dispatch = useAppDispatch();
    const cartNumber = useAppSelector((state:RootState) => state.cartCounter.value)

    return (
        <div id='sideBar-container'>
            <div className='top-container'>
                <p id="cart-title">Sepetim({cartNumber})</p>
                <button id='close-btn' onClick={() =>{ dispatch(setVisibility(true))}}>
                    <p>X</p>
                </button>
            </div>
            {
                cartNumber === 0 ? 
                    <div className='empty-cart'>
                        <div>
                            <CartIcon color='black'/>
                        </div>
                        <p id='empty-cart-content-title'>Sepetinizde ürün bulunmamaktadır.</p>
                    </div>
                    :
                    <BasketList/>
            }
        </div>
    )
}