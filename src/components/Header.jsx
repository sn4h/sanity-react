import {NavLink} from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <NavLink to="/">Home</NavLink>
    </header>
  )
}

export default Header