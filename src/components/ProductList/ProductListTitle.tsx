import { useAppSelector } from "../../hooks/hooks"
import { RootState } from "../../redux/store/store"
import ProductListIcon from "./Icons/ProductListIcon"

export default function ProductListTitle() {
    const selectedCategory = useAppSelector((state: RootState) => state.selectCategory.value)
  return (
    <div style={{display:'flex', flexDirection:'row', alignItems:'center', paddingLeft:15}}>
        <ProductListIcon/>
        <p style={{fontSize:20, paddingLeft:10, fontWeight:300, color:'#707070'}}>{selectedCategory}</p>
    </div>
  )
}