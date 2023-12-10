'use client'
import React, { useState, useEffect } from "react";
import ScrollTopArrow from "@public/assets/icons/Arrows";

const GotoTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className="group fixed cursor-pointer rounded-md md:hover:bg-white border-2 border-orange-500  overflow-hidden bg-[#ffffff9a] z-[999] w-10 text-center h-10 leading-10 right-[15px] bottom-[50px] max-md:bottom-[28px]"
        onClick={scrollTop}
        style={{
          display: showScroll ? "block" : "none",
        }}
      >
        <ScrollTopArrow className='group-hover:first:opacity-0 group-hover:first:invisible group-hover:first:top-0  absolute -translate-y-[60%] transition-[0.5s] mx-auto my-0 top-2/4 inset-x-0 last:opacity-0 last:invisible group-hover:last:opacity-100 group-hover:last:visible group-hover:last:top-2/4'/>
        {/* <ScrollTopArrow className='!opacity-[100%] !visible group-hover:first:opacity-0 group-hover:first:invisible group-hover:first:top-0 absolute -translate-y-[70%] transition-[0.5s] mx-auto my-0 top-2/4 inset-x-0 last:opacity-0 last:invisible last:top-[60%] group-hover:last:opacity-100 group-hover:last:visible'/> */}

      </div>
    </>
  );
};

export default GotoTop;
