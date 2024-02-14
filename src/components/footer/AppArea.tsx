import React from 'react'
import '../../styles/Footer.style.css'


export default function AppArea() {
  return (
    <div className='app-area-main' >
        <img id='phone-img' src={require("../../assets/footer-phone.png")} alt="footer-phone" />
        <div>
        <div className='qr-container' >
            <img  id='qr-img' src={require("../../assets/qr-code.png")} alt="qr-code"/>
            <div>
              <p><strong>Çiçek Bahçem Mobil Uygulamayı İndirin</strong></p>
              <p> Mobil Uygulamayı QR Kod ile İndirin.</p>
            </div>
            
        </div>
          <div>
                <img id='getdownloadimg' src={require("../../assets/getplaystore.png")} alt="play-store"/>
                <img  id='getdownloadimg' src={require("../../assets/getappstore.png")} alt="app-store"/>
            </div>
        </div>
    </div>
  )
}