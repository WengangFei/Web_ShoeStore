

function FooterLinks({ data }) {

   
  return (
    <div className="flex gap-10 m-6">
        {data.map(item=>(
            <div key={item.title} className="text-xl">
                <p className="text-3xl font-bold">{ item.title}</p>
                <p>{ item.links.map((item,index)=>(
                    <div key={index} className="text-slate-gray my-2">
                        <a  href={item.link}>{item.name}</a>
                    </div>
                    
                ))}</p>
            </div>
        ))}
    </div>

  )
}

export default FooterLinks
