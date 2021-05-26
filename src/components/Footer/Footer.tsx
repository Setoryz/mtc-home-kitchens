import FacebookIcon from "../../assets/svg/FacebookIcon";
import InstagramIcon from "../../assets/svg/InstagramIcon";
import TwitterIcon from "../../assets/svg/TwitterIcon";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      {/* Logo */}
      <div className="footer__bg">
        <img
          src="/assets/footer.png"
          alt="MTC Home Kitchens"
          //   srcSet="/assets/footer.png 2000w, /assets/footer.png 4000w "
        />
      </div>

      <div className="footer__details">
        <div className="footer__logo">
          <hr />
          <img src="/assets/logo.svg" alt="MTK Logo" />
          <hr />
        </div>

        <div className="footer__nav">
          {footerLinks.map(({ title, links }) => (
            <div key={title} className="nav__column">
              <div className="footer__title">
                <h4>{title}</h4>
              </div>
              <div className="footer__links">
                {links.map((link) => (
                  <div key={link}>
                    <a href="/">{link}</a>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="nav__column">
            <div className="footer__title">
              <h4>Follow</h4>
            </div>
            <div className="footer__social">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>

        <div className="footer__copyright">
          <p>Copyright Online MTC Home Kitchens 2021 - All rights reserved.</p>
          <p>Responsive website design, Development & Hosting by mtc.</p>
        </div>

        <hr />
      </div>
    </div>
  );
};

export default Footer;

const footerLinks = [
  {
    title: "About",
    links: ["Shop", "Plan My Kitchen", "About Us", "Gallery"],
  },
  {
    title: "Service",
    links: ["FAQ", "Contact", "How to Buy", "Downloads"],
  },
  {
    title: "Info",
    links: ["Delivery", "Term", "Privacy"],
  },
];
