
const ServiceCard = ({ imgURL, label, subtext}) => {

  return (
    <div className="px-10 py-16 flex-1 w-full">
      <div className="w-12 h-12 flex justify-center items-center bg-coral-red rounded-full mx-4">
        <img src={ imgURL } width={50} height={50} alt='service icon' className="m-6"/>
      </div>
      <p className="text-3xl font-bold m-4">{ label }</p>
      <p className="text-2xl text-slate-500 m-4 ">{ subtext }</p>
    </div>
  )
}

export default ServiceCard
