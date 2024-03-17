import Button from "../components/button"


const Subscribe = () => {
  return (
    <div className="flex justify-evenly max-container items-center
    max-lg:flex-col gap-10">
      <div>
        <p className="text-4xl font-bold">
          Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
        </p>
      </div>
      <div className="flex border-4 w-auto rounded-full p-3 gap-8">
        <input type='text' placeholder='name@email.com' className="input"/>
        <div>
          <Button label='Sign Up'/>
        </div>
        
      </div>
    </div>
  )
}

export default Subscribe
