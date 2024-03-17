import { star } from "../assets/icons";


const Customers = ({ imgURL, customerName, rating, feedback})=>{

    return(
        <div className="shadow-md mt-16 p-8">
            <img src={ imgURL } alt={customerName} width={150} height={150} className="rounded-full m-8"/>
            <p className="text-2xl text-slate-gray my-8">
                { feedback }
            </p>
            <p className="text-2xl font-bold">
                {customerName}
            </p>
            <div className="flex">
                <img src={ star }/>
                <div className="m-2">({rating})</div>
            </div>
            {/* <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/> */}
        </div>
       
    )
}

export default Customers;