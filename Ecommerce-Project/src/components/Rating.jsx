const Rating = ({ rate = 0, count = 0 }) => {
  const fullStars = Math.round(rate);

  return (
    <div className="rating" aria-label={`Rated ${rate} out of 5`}>
      <span className="stars">
        {"★".repeat(fullStars)}
        <span className="stars-empty">{"★".repeat(5 - fullStars)}</span>
      </span>
      <span className="rating-text">
        {rate} ({count})
      </span>
    </div>
  );
};

export default Rating;
