import Button from "../shared/Button";
import "./Gallery.scss";

const galleryImageSizes = (i: number) =>
  `/assets/gallery/gallery-${i}.png 310w, /assets/gallery/gallery-${i}@2x.png 620w`;
const Gallery = () => {
  return (
    <div className="gallery">
      {/*  */}
      <div className="gallery__title">
        <h3>Customer Gallery</h3>
      </div>
      <div className="gallery__images">
        {[...Array(4)].map((val, index) => (
          <img
            key={index}
            src={`/assets/gallery/gallery-${index + 1}.png`}
            alt="MTC Gallery"
            srcSet={galleryImageSizes(index + 1)}
          />
        ))}
      </div>
      <div className="gallery__cta">
        <Button type="accent-fill" label="View More" />
      </div>
      {/*  */}
    </div>
  );
};

export default Gallery;
