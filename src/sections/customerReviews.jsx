import Customers from "../components/customers"
import { reviews } from "../constants "


const customerReviews = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div>
        <p className="text-6xl font-palanquin font-bold">Our <span className="text-coral-red">Customers</span> Reviews.</p>
        <p className="text-slate-gray text-3xl mt-10">Hear genuine stores from our satisfied customers about their
          exceptional experience with us.
        </p>
        <div className="mt-20">
          { reviews.map((item,index)=>(
            <Customers key={ index } { ...item }/>
          )) }
        </div>
       
        
      </div>
    </div>
  )
}

export default customerReviews
