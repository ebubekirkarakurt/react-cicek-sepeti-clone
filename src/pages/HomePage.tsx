import ProductList from '../components/products/ProductList';
import NavBar from '../components/navbar/NavBar';
import Categories from '../components/categories/Categories';
import Background from '../components/navbar/Background';
import '../styles/global.css'
import Footer from '../components/footer/Footer';

export default function HomePage() {

  return (
    <div>
     <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <NavBar/>
      </div>
      <div style={{paddingTop:90}}>
        <Background />
        <Categories />
        <ProductList />
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}
