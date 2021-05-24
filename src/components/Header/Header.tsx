import "./Header.scss";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header">
        {/* social media icons */}
        <div className="header__social">
          <a href="/" className="social__instagram">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/" className="social__instagram">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/" className="social__instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        {/* left nav */}
        <div className="header__navLinks">
          <a href="/">Shop</a>
          <a href="/">Plan My Kitchen</a>
        </div>
        {/* logo */}
        <div className="header__logo">
          <img src="/assets/logo.svg" alt="MTK Logo" />
        </div>
        {/* right nav */}
        <div className="header__navLinks">
          <a href="/">About</a>
          <a href="/">Gallery</a>
        </div>
        {/* order button */}
        <button className="header__btn">
          My Order
          <i className="fal fa-shopping-cart"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;