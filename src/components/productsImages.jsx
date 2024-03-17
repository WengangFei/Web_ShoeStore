import  { star } from '../assets/icons';

const productsImages = ({ imgURL,name,price }) => {

  return (
   <>
      <img src={imgURL} alt={name} width={250} height={250}/>
      <div className="m-4">
        <div className="flex ">
          <img src={ star } /> <p className="m-2">(4.5)</p>
        </div>
        <p className='font-semibold text-2xl text-purple-500 leading-normal'>{name}</p>
        <p className='font-montserrat text-coral-red leading-normal'>{price}</p>
      </div>
   </>
  )
}

export default productsImages
