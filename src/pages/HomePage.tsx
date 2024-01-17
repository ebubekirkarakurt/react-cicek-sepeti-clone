import ProductList from '../components/ProductList/ProductList';
import NavBar from '../components/NavBar/NavBar';
import Categories from '../components/Categories/Categories';
import Background from '../components/NavBar/Background';
import '../styles/global.css'

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
    </div>
  );
}
