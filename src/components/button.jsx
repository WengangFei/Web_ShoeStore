

const Button = ({ label,iconURL,color,textColor }) => {


  return (
    <button className={`flex justify-center items-center gap-2 px-7
    py-4 border font-montserrat text-lg leading-none 
    ${ color ? color : 'bg-coral-red' }
    rounded-full ${ textColor ? textColor : 'text-white' } drop-shadow-4xl`}>
        { label } 
       
        { iconURL ? <img src={ iconURL } alt='arrow right icon' 
        className="mi-2 rounded-full w-5 h-5"/> : ''}
        
    </button>
  )
}

export default Button
