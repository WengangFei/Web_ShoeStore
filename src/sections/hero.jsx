import { arrowRight } from '../assets/icons';
import Button from '../components/button';
import { shoes, statistics } from '../constants ';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/shoeCard';
import { useState } from 'react';


const Hero = () => {

  const[bigShoeImg,setBigShoeImg] = useState(bigShoe1);

  return (
    <section id='home' className="w-full flex xl:flex-row flex-col 
    justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center
      items-start w-full max-xl:padding-x pt-28">
        <p className='text-xl font-montserrat text-coral-red'>Our summer collection</p>
        <h1 className='font-palanquin text-8xl max-sm:text-[75px]
        lg:leading-[2] font-bold'>
          <span className='text-8xl font-dosis'>New Arrival</span><br />
          <span className='text-fuchsia-600/70'>Nike</span> <span className='text-8xl'>Shoes</span>
        </h1>
        <p className='rounded-lg p-3 shadow-2xl my-4'>
          Discover More stylish shoes, cloth, and other sports equipments.
        </p>
        <Button label='Shop now' iconURL={arrowRight} className='mt-3'/>
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          { statistics.map((item,index)=>(
            <div key={index}>
              <p className='text-coral-red text-4xl font-bold'>{item.value}</p>
              <p className='leading-7 text-slate-gray'>{item.label}</p>
            </div>
          )) }
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen
      max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={ bigShoeImg } alt='shoe1' width={610} height={550} className='object-contain z-10 relative'/>
        <div className='flex sm:gap-6 gp-4 absolute -bottom-[15%] sm:left-[10%] max-sm:px-6'>
          { shoes.map((shoe,index)=>(
            <div key={index}>
              <ShoeCard 
                imgURL={ shoe } 
                changeBigShoeImg={ setBigShoeImg }
                bigShoeImg={ bigShoeImg }
              />
            </div>
          )) }
        </div>
      </div>
      
    </section>
  )
}

export default Hero
