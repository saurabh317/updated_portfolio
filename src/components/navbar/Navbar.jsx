import "./navbar.css";
import { AiOutlineHome, AiOutlineUserAdd, } from 'react-icons/ai';
import { BiBook, BiMessageSquareDots } from 'react-icons/bi';
import { GiSupersonicArrow } from 'react-icons/gi';

const Navbar = () => {

  return (
    <nav>
      <a href="#home"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUserAdd/></a>
      <a href="#skills"><BiBook/></a>
      <a href="#portfolio"><GiSupersonicArrow/></a>
      <a href="#contact"><BiMessageSquareDots/></a>
    </nav>
  )
}


export default Navbar;