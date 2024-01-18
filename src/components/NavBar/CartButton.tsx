import { useState } from 'react';
import '../../styles/CartButton.css';
import '../../styles/SideBarMenu.style.css';
import SideBarMenu from '../sidebar/SideBarMenu';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setVisibility } from '../../redux/reducer/sidebarVisibility';
import { RootState } from '../../redux/store/store';
import CartIcon from './Icons/CartIcon';

export default function CartButton() {

  const [visibile, setVisibile] = useState(true)

  const dispatch = useAppDispatch();
  
  const visibility = useAppSelector((state: RootState) => state.sideBarVisibility.visibility)
  const cartCounter = useAppSelector((state: RootState) => state.cartCounter.value)

  return (

    <div className="cart-container" >
      {
        visibility ? 
         <button id="btn" onClick={() => {
            setVisibile(false)
            dispatch(setVisibility(visibile))
        }}>
          <CartIcon color='white'/>
          <p>Sepetim</p>
          <div id="cart-counter">
              <p style={{ margin: 8 }}>{cartCounter}</p>
          </div>
        </button> 
          : 
          <div>
            <div className='shadow-bg'></div>
            <SideBarMenu/>
          </div>
      }
    </div>
  );
}
