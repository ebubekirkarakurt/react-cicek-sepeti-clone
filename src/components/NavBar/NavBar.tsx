import { useState } from 'react';
import '../../styles/Navbar.style.css';
import '../../styles/Backgorund.css';
import '../../styles/SideBarMenu.style.css'
import CartButton from './CartButton';
import SearchIcon from './Icons/SearchIcon';

export default function NavBar() {

  const [value, setValue] = useState('');

  return (
    <div>
      <div className="navbar">
        <div className="image">
          <img id="logo" src={require('../../assets/logo.png')} alt="logo" />
        </div>
        <div className="search-bar">
          <div id='searchicon' >
            <SearchIcon />
          </div>
          <input
            id="input"
            type="text"
            placeholder="Ürün Ara.."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </div>
        <div className="buttons">
          <div id="cart">
            <CartButton />
          </div>
        </div>
      </div>
    </div>
  );
}
