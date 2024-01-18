import React from 'react'
import '../../styles/Footer.style.css'


export default function Footer() {
  return (
    <footer>
        <div className='footer-main'>
            <div className="footer-main-info">
                <div className='footer-logo'>
                    <img id='logo' src="../../assets/logo.png" alt="logo"/>
                </div>
                <div className='footer-socials'>
                    <img id='logo' src="../../assets/logo.png" alt="facebook"/>
                    <img id='logo' src="../../assets/logo.png" alt="twitter"/>
                    <img id='logo' src="../../assets/logo.png" alt="instagram"/>
                    <img id='logo' src="../../assets/logo.png" alt="youtube"/>
                </div>
            </div>
            <div className="footer-info-text">
                <p>ÇiçekBahçem.com olarak kişisel verilerinizin gizliliğini <br/>  önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında oluşturduğumuz aydınlatma metnine buradan ulaşabilirsiniz.</p>
            </div>
        </div>
    </footer>
  )
}