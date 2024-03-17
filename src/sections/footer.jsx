import { headerLogo } from "../assets/images"
import FooterLinks from "../components/footerLinks"
import { footerLinks, socialMedia } from "../constants "


const Footer = () => {
  return (
    <div>
      <img src={ headerLogo } alt='footer logo'/>
      <p className="text-2xl m-6">
        Get your wearing and gers at your local Nike store.<br />
        Find your perfect size in there and get more rewards.
      </p>
      <div className="flex justify-start m-6 gap-16">
        { socialMedia.map(item=>(
          <img src={ item.src } alt={item.alt} key={item.alt} width={50} 
          height={50} className="bg-white rounded-full p-2"/>
        )) }
      </div>
      <div>
        <FooterLinks data={ footerLinks }/>
      </div>
      <footer>
        <p className="text-coral-red font-bold m-6">© 2024 Copyright all reserved by Nike.</p>
      </footer>
    </div>
  )
}

export default Footer
