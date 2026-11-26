const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="empty-state">
      <h2>Something went wrong</h2>
      <p>{message}</p>
      {onRetry && (
        <button className="btn" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
