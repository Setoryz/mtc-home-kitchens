import { motion } from "framer-motion";
import Button from "../shared/Button";
import { headerVariants } from "../utils/motionVariants";
import "./Header.scss";

const Header = () => {
  return (
    <motion.div
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className="header__container"
    >
      <input className="header__menuBtn" type="checkbox" id="menu-btn" />
      <header className="header__small">
        <div className="header__logo__smallScreen">
          <img src="/assets/logo.svg" alt="MTK Logo" />
        </div>
        <label className="header__menuIcon" htmlFor="menu-btn">
          <span className="menu__icon"></span>
        </label>
      </header>

      <header className="header">
        {/* social media icons */}
        <div className="header__left">
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
          <nav className="header__navLinks">
            <a href="/">Shop</a>
            <a href="/">Plan My Kitchen</a>
          </nav>
        </div>

        {/* logo */}
        <div className="header__logo">
          <img src="/assets/logo.svg" alt="MTK Logo" />
        </div>

        <div className="header__right">
          {/* right nav */}
          <nav className="header__navLinks">
            <a href="/">About</a>
            <a href="/">Gallery</a>
          </nav>
          <Button type="outline" label="My Order" icon="fal fa-shopping-cart" />
        </div>
      </header>
    </motion.div>
  );
};

export default Header;
