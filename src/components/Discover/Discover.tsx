import Button from "../shared/Button";
import "./Discover.scss";

const Discover = () => {
  return (
    <div className="discover">
      {/* discover image */}
      <div className="discover__image">
        <img
          src="/assets/discover.png"
          alt="Discover MTC"
          srcSet="/assets/discover.png 1000w, /assets/discover@2x.png 2000w"
        />
      </div>
      {/* discover details */}
      <div className="discover__details">
        <div className="details__block">
          <div className="discover__subtitle">
            <p>Quality Craftmanship from build to delivery</p>
          </div>
          <div className="discover__title">
            <h2>Discover the beauty of a handmade kitchen</h2>
          </div>
          <div className="discover__text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget est sit amet sapien venenatis maximus vel in urna. Nam mauris
              arcu, feugiat in finibus vitae, sollicitudin id purus. Ut
              imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.
            </p>
          </div>
          <div className="discover__cta">
            <Button type="accent-fill" label="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
