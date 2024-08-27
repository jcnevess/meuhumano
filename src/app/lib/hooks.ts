import { RefObject, useEffect } from "react";

/**
 * Custom hook to handle clicks outside search box
 * @param ref Element which will be observed for clicks outside
 * @param callback Function to be called on click outside
 */
export function useClickOutside(
  ref: RefObject<HTMLElement | undefined>,
  callback: () => void
) {
  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
}
