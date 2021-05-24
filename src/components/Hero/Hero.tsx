import Button from "../shared/Button";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      {/* background image */}
      <img
        src="/assets/hero.png"
        alt="MTC_Hero_Image"
        srcSet="/assets/hero.png 2000w, /assets/hero@2x.png 4000w"
        sizes="(max-width: 1920) 2000px, 4000px"
        className="hero__background"
      />

      {/* Details */}
      <div className="hero__details">
        <div className="details__small">
          Design and order your new kitchen online today
        </div>
        <div className="details__large">
          Bespoke &amp; made to measure handmade kitchen design
        </div>
        <Button type="accent-fill" label="Order Now" />
      </div>

      {/* Background Slider Buttons */}
      <div className="hero__sliderBtn">
        <span className="sliderBtn active" />
        <span className="sliderBtn" />
        <span className="sliderBtn" />
      </div>
    </div>
  );
};

export default Hero;
