import { useEffect, useState } from "react";

// Returns the value only after the user stops changing it for `delay` ms.
// Same idea as the debouncing example from Lecture 8, written as a React hook.
const useDebounce = (value, delay = 400) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
