import { FaStar } from "react-icons/fa6";

const productsImages = ({ data }) => {
  return (
   <div className="">
      <img src={data.imgURL} alt='productImg' width={250} height={250}/>
      <div className="m-4">
        <div className="flex ">
          <FaStar /> <p className="m-2">(4.5)</p>
        </div>
        
        <p>{data.name}</p>
        <p>{data.price}</p>
      </div>
      
   </div>
  )
}

export default productsImages
