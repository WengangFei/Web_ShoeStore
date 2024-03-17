import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import Button from '../components/button';
console.log(offer)
const SpecialOffers = () => {
  return (
    <div className="flex justify-wrap items-center max-xl:flex-col-reverse max-container gap-10">
      <div className='flex flex-1 flex-col'>
        <p className="text-6xl "><span className="text-coral-red font-bold capitalize">Special</span> Offer</p>
        <p className="text-slate-gray m-4 text-2xl">Similar to our goal when we launched our first boot collection, we set out to make the highest quality sneakers with a minimalist Heritage Americana aesthetic to sell at the lowest sustainable markup possible.</p>
        <p className="text-slate-gray m-4 text-2xl">Our dedication to detail and excellence ensures your satisfaction.</p>
        <div className="m-10 flex gap-5">
          <Button label='Shop Now' iconURL={ arrowRight }/>
          <Button label='Learn More' color='bg-slate-400'/>
        </div>
      </div>
      <div className='flex-1'>
        <img src={ offer } width={773} height={687}
        className='object-contain w-full'/>
      </div>
    </div>
  )
}

export default SpecialOffers 
