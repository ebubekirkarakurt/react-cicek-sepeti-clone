import React from 'react';
import '../../styles/Footer.style.css';
import FooterCopyRight from './FooterCopyright';
import FooterDescription from './FooterDescription';
import AppArea from './AppArea';

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <AppArea />
        <div className="footer-main-info">
          <div>
            <img id="logo" src={require('../../assets/logo.png')} alt="logo" />
            <div className="footer-socials">
              <a>
                <img
                  id="socaial-logo"
                  src={require('../../assets/facebooklogo.png')}
                  alt="facebook"
                />
              </a>
              <a>
                <img
                  id="socaial-logo"
                  src={require('../../assets/twitterlogo.png')}
                  alt="twitter"
                />
              </a>
              <a>
                <img
                  id="socaial-logo"
                  src={require('../../assets/instagramlogo.webp')}
                  alt="instagram"
                />
              </a>
              <a>
                <img
                  id="socaial-logo"
                  src={require('../../assets/youtubelogo.png')}
                  alt="youtube"
                />
              </a>
            </div>
            <div className="footer-info-text">
              ÇiçekBahçem.com olarak kişisel verilerinizin gizliliğini {<br />}{' '}
              önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması {<br />}{' '}
              Kanunu kapsamında oluşturduğumuz aydınlatma metnine {<br />}{' '}
              buradan ulaşabilirsiniz.{' '}
            </div>
          </div>
          <div className="row">
            <h4 id="footer-link-title">Faydali bilgiler</h4>
            <a href=" " id="link-btn">
              Çiçek Bakımı
            </a>
            <a href=" " id="link-btn">
              Çiçek Eşliğinde Notlar
            </a>
            <a href=" " id="link-btn">
              Çiçek Anlamları
            </a>
            <a href=" " id="link-btn">
              Özel Günler
            </a>
            <a href=" " id="link-btn">
              Mevsimlere Göre Çiçekler
            </a>
            <a href=" " id="link-btn">
              Site Haritası
            </a>
          </div>
          <div className="row">
            <h4 id="footer-link-title">Kurumsal</h4>
            <a href=" " id="link-btn">
              Hakkımızda
            </a>
            <a href=" " id="link-btn">
              Kariyer
            </a>
            <a href=" " id="link-btn">
              ÇiçekBahçem’de Satış Yap
            </a>
            <a href=" " id="link-btn">
              Kurumsal Müşterilerimiz
            </a>
            <a href=" " id="link-btn">
              Reklamlarımız
            </a>
            <a href=" " id="link-btn">
              Basında Biz
            </a>
            <a href=" " id="link-btn">
              Kampanyalar
            </a>
            <a href=" " id="link-btn">
              Vizyonumuz
            </a>
          </div>
          <div className="row">
            <div id="footer-link">
              <h4 id="footer-link-title">İletişim</h4>
              <a href=" " id="link-btn">
                Bize Ulaşın
              </a>
              <a href=" " id="link-btn">
                Sıkça Sorulan Sorular
              </a>
            </div>
          </div>
          <div className="row">
            <div id="footer-link">
              <h4 id="footer-link-title">Gizlilik sözleşmesi</h4>
              <a href=" " id="link-btn">
                Mesafeli Satış Sözleşmesi
              </a>
              <a href=" " id="link-btn">
                Bilgi Toplumu Hizmetleri
              </a>
              <a href=" " id="link-btn">
                Gizlilik Sözleşmesi
              </a>
              <a href=" " id="link-btn">
                Ödeme Seçenekleri
              </a>
              <a href=" " id="link-btn">
                Hesap Bilgileri
              </a>
            </div>
          </div>
        </div>
        <FooterDescription />
        <FooterCopyRight />
      </div>
    </footer>
  );
}
