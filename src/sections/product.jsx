import ProductsImages from "../components/productsImages";
import { products } from "../constants ";


const Product = () => {
  return (
    <div className="text-montserrat ">
      <p className="text-3xl">Our <span className="text-coral-red">Popular</span> Products</p>
      <p className="text-slate-gray">Experience top-notch quality and style our sought-after selection.</p>
      <p className="text-slate-gray">Discover a world comfort design and value.</p>
     {/* product images */}
      <div className="flex justify-center items-center gap-6 my-4">
        { products.map((item,index) =>(
          <div key={index}>
            <ProductsImages data={item}/>
          </div>
          
        ))}
      </div>
    </div>
  )
}

export default Product
