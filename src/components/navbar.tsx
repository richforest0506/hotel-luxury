import { FC } from "react"
import logo from '../images/homepage/Main_logo.png'

interface IProps {
  page: string;
}

const NavBar: FC<IProps> = ({page}) => {
  return (
    <>
      <nav className="nav-menu">
        <a href="/"><img src={logo} alt="Luxury Hotels" /></a>
        <ul>
          {page==='home'?(<li className="list-style list-style::after"><a className="a-text-style" href="#">Home</a></li>):(<li className="nav-manu-ul-li"><a href="/">Home</a></li>)}
          {page==='facilities'?(<li className="list-style list-style::after"><a className="a-text-style" href="#">Facilities</a></li>):(<li className="nav-manu-ul-li"><a href="/facilities">Facilities</a></li>)}
          {page==='rooms'?(<li className="list-style list-style::after"><a className="a-text-style" href="#">Rooms</a></li>):(<li className="nav-manu-ul-li"><a href="/rooms">Rooms</a></li>)}
          {page==='contact_us'?(<li className="list-style list-style::after"><a className="a-text-style" href="#">Contact-us</a></li>):(<li className="nav-manu-ul-li"><a href="/contact_us">Contact-us</a></li>)}
        </ul>
      </nav>
    </>
  )
}

export default NavBar;