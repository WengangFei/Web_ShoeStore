import ServiceCard from '../components/serviceCard';
import { services } from '../constants ';

const Service = () => {
  return (
    <div className='flex justify-center gap-9'>
      { services.map(item =>(
        <div key={item.imgURL} className='shadow-2xl rounded-3xl'>
          <ServiceCard {...item}/>
        </div>
        
      )) }
      
    </div>
  )
}

export default Service
