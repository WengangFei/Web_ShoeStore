import  { star } from '../assets/icons';

const productsImages = ({ imgURL,name,price }) => {

  return (
   <>
      <img src={imgURL} alt={name} width={250} height={250}/>
      <div className="m-4">
        <div className="flex ">
          <img src={ star } /> <p className="m-2">(4.5)</p>
        </div>
        
        <p>{name}</p>
        <p>{price}</p>
      </div>
      
   </>
  )
}

export default productsImages
