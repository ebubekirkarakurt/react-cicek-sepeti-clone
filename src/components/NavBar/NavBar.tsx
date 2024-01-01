import { useState } from 'react'
import '../../styles/Navbar.style.css'
import '../../styles/Backgorund.css'
import Background from './Background'
import OrderIcon from './Icons/OrderIcon'
import CartButton from './CartButton'
import LogOutIcon from './Icons/LogOutIcon'
import SearchIcon from './Icons/SearchIcon'


export default function NavBar() {
  const [value, setValue] = useState('')

  return (
   <div>
     <div className='navbar'>
      <div className="image">
        <img id='logo' src={require("../../assets/logo.png")} alt="logo"/>
      </div>
      <div className="search-bar">
        <SearchIcon/>
        <input
          id='input'
          type='text'
          placeholder='Ürün Ara..'
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </div>
      <div className="buttons">
          <div id='navbar-option'>
              <OrderIcon/>
              <p>Siparişlerim</p>
          </div>
          <div id='navbar-option'>
              <LogOutIcon/>
              <p>Çıkış yap</p>
          </div>
          <div id='cart'>
              <CartButton/>
          </div>
      </div>
    </div>
    <Background/>
   </div>
  )
}