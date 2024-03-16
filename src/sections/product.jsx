import ProductsImages from "../components/productsImages";
import { products } from "../constants ";


const Product = () => {
  return (
    <div className="text-montserrat  max-container">
      <p className="text-4xl mb-8 font-bold">Our <span className="text-coral-red">Popular</span> Products</p>
      <p className="text-slate-gray">Experience top-notch quality and style our sought-after selection.</p>
      <p className="text-slate-gray">Discover a world comfort design and value.</p>
     {/* product images */}
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        { products.map((item,index) =>(
          <div key={index}>
            <ProductsImages  {...item}/>
          </div>
          
        ))}
      </div>
    </div>
  )
}

export default Product
