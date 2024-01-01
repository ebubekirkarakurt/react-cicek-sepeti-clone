import ProductList from '../components/ProductList/ProductList';
import NavBar from '../components/NavBar/NavBar';
import Categories from '../components/Categories/Categories';

export default function HomePage() {
  return (
    <div >
      <NavBar/>

        <Categories/>
        <ProductList/>
      
    </div>
  );
}
