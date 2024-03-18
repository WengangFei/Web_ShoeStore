import { shoe8 } from "../assets/images";
import Button from "../components/button";


const SuperQuality = () => {
  return (
    <div className="flex justify-between items-center max-lg:flex-col
    gap-10 w-full max-container">
      <div className="flex-1 w-full p-8">
        <p className="text-6xl ">We Provide you <span className="text-coral-red font-bold capitalize">super</span> quality shoes</p>
        <p className="text-slate-gray m-4">Similar to our goal when we launched our first boot collection, we set out to make the highest quality sneakers with a minimalist Heritage Americana aesthetic to sell at the lowest sustainable markup possible. Featuring leathers from the finest tanneries, buttery soft interior lining, custom dual-density natural rubber outsoles and comfortable shock-absorbing insoles, the Premier represents everything we love about smart, minimalist style and our low markup philosophy.</p>
        <p className="text-slate-gray m-4 text-3xl">Our dedication to detail and excellence ensures your satisfaction.</p>
        <div className="m-10">
          <Button label='View Details' />
        </div>
      
      </div>
      <div className="flex-1 w-full">
        <img src={ shoe8} alt='shoe'/>
      </div>
    </div>
  )
}

export default SuperQuality
