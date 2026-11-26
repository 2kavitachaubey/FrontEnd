// Skeleton cards shown while products are loading
const Loader = ({ count = 8 }) => {
  return (
    <div className="product-grid">
      {Array.from({ length: count }).map((_, idx) => (
        <div className="product-card skeleton" key={idx}>
          <div className="skeleton-img"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line short"></div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
