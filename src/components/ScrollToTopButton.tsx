import { useState, useEffect } from "react";
import { CaretUp } from "phosphor-react";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {showButton && (
        <div className="fixed z-50 bottom-2 right-2">
          <button
            className="z-50 inline-flex items-center p-3 transition-opacity bg-gray-500/80 rounded-full shadow-sm opacity-100  border border-red-300 bg-opacity-90 focus:ring-product-pink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:border-none"
            onClick={handleScrollToTop}
          >
            <CaretUp className="text-red-500" width={36} height={36} />
          </button>
        </div>
      )}
    </>
  );
}

export default ScrollToTopButton;
