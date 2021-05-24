import Button from "../shared/Button";
import ReviewNavButton from "../../assets/svg/ReviewNavButton";
import "./Reviews.scss";

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="reviews__btnPrev">
        <ReviewNavButton />
      </div>
      <div className="review__details">
        <div className="review__subtitle">
          <p>What Our Customers Say</p>
        </div>
        <div className="review__title">
          <h3>Over 35 years experience designing handmade kitchens</h3>
        </div>
        <div className="review__text">
          <p>
            Since my first contact I have received a very high level of customer
            service and advice with my kitchen plans. Ben responded very quickly
            to all of my emails and delivery of the kitchen was as planned.
          </p>
        </div>
        <div className="review__author">
          <p>Jane, Dundee</p>
        </div>
        <Button type="accent-fill" label="Frequently Asked Questions" />
      </div>
      <div className="reviews__btnNext">
        <ReviewNavButton />
      </div>
    </div>
  );
};

export default Reviews;
