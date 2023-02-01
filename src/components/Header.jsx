import logo from '../assets/logo.png';

function Header() {
  return (
    <header>
      <nav className="nav--bar">
        <img src={logo} alt="Logo" className="nav--logo" />
        <p className="nav--text">my travel journal.</p>
      </nav>
    </header>
  );
}

export default Header;