import logo from '../Assets/logo.png';

function Navbar() {
    return (
      <div className="Navbar">
        <nav>
          <img src={logo} className="Logo" alt="logo" />
        </nav>
      </div>
    );
  }
  
  export default Navbar;