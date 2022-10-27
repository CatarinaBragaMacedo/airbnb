import logo from '../Assets/logo.png';

function Navbar() {
    return (
      <>
        <nav>
          <img src={logo} className="nav--logo" alt="logo" />
        </nav>
      </>
    );
  }
  
  export default Navbar;