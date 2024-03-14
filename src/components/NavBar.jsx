import { headerLogo } from '../assets/images/index';
import { hamburger } from '../assets/icons/';
import { navLinks } from '../constants ';




const NavBar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href=''>
          <img alt='logo' src={ headerLogo } width={130} height={29}/>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-sm:hidden'>
          {navLinks.map(ele=>(
              <li key={ele.label}>
                <a href={ele.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                  {ele.label}
                </a>
              </li>
            )
          )}
        </ul>
        <div className='hidden max-sm:block'>
          <img src={hamburger} alt='hamburger' width={20} height={20}/>
        </div>
      </nav>
      
    </header>
  )
}

export default NavBar
