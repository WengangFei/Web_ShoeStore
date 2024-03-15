import { arrowRight } from '../assets/icons';
import Button from '../components/button';
import { statistics } from '../constants ';

const Hero = () => {
  return (
    <section id='home' className="w-full flex xl:flex-row flex-col 
    justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center
      items-start w-full max-xl:padding-x pt-28">
        <p className='text-xl font-montserrat text-coral-red'>Our summer collection</p>
        <h1 className='mt-5 font-palanquin text-8xl max-sm:text-[75px]
        max-sm:leading-[80] font-bold'>
          <span>New Arrival</span><br />
          <span>Nike</span> Shoes
        </h1>
        <p>Discover More stylish shoes, cloth, and other sports equipments.</p>
        <Button label='Shop now' iconURL={arrowRight}/>
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          { statistics.map((item,index)=>(
            <div key={index}>
              <p>{item.value}</p>
              <p>{item.label}</p>
            </div>
          )) }
        </div>
      </div>
      
    </section>
  )
}

export default Hero
