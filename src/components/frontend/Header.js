import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="frontend-header" style={{backgroundColor: 'rgb(51 117 182)', padding: '10px 20px'}}>
        <h3>My Blog</h3>
        <ul>
          <li><NavLink to={'/home'}>Home</NavLink></li>
          <li><NavLink to={'/contact-us'}>Contact Us</NavLink></li>
        </ul>
      </header>
  )
}

export default Header;