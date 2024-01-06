import { useState } from 'react';
import { useGetCategoriesQuery } from '../../service/useGetCategories';
import '../../styles/Categories.css';
import { useDispatch } from 'react-redux';
import { category } from '../../redux/reducer/selectCategory';
import CategoryIcon from './Icons/CategoryIcon';
import NavCat from '../NavBar/NavCat';
import ProductListTitle from '../ProductList/ProductListTitle';
import ProductList from '../ProductList/ProductList';

export default function Categories() {

  const dispatch = useDispatch();

  const { data } = useGetCategoriesQuery('') || [];

  return (
    <div className="categories">
      <div className="custom-container">
        <NavCat />
        <div className="category-title">
          <CategoryIcon />
          <p>Kategoriler</p>
        </div>
        <a
          id="category-btn"
          onClick={() => {
            dispatch(category('Tüm Kategoriler'));
          }}
        >
          <p>Tüm Kategoriler</p>
        </a>
        {data &&
          data.map((element: any) => {
            return (
              <div className="category">
                <a
                  id="category-btn"
                  onClick={() => {
                    dispatch(category(element.categoryName));
                  }}
                >
                  <p>{element.categoryName}</p>
                </a>
              </div>
            );
          })}
        <ProductListTitle />
      </div>
    </div>
  );
}
