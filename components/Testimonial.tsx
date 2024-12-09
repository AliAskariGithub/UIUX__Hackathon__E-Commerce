"use client";
import React, { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { FcOk } from "react-icons/fc";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      feedback:
        "“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    },
    {
      id: 2,
      name: "Alex K.",
      rating: 5,
      feedback:
        "“Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
    },
    {
      id: 3,
      name: "Farah M.",
      rating: 5,
      feedback:
        "“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    },
    {
      id: 4,
      name: "James L.",
      rating: 5,
      feedback:
        "“As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
    },
    {
      id: 5,
      name: "Mooen P.",
      rating: 5,
      feedback:
        "“As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate number of items to show per screen size
  const getItemsPerView = () => {
    if (window.innerWidth >= 1024) return 3; // Desktop
    if (window.innerWidth >= 768) return 2; // Tablet
    return 1; // Mobile
  };

  const itemsPerView = getItemsPerView();

  const handleNext = () => {
    if (currentIndex + itemsPerView < testimonials.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center p-6 mx-auto mb-10">
      <div className="flex items-center justify-between w-full pb-8">
        <h1 className="mb-4 text-2xl md:text-4xl text-left text-black font-extrabold">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex items-center justify-center gap-5">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <IoIosArrowRoundBack size={30} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + itemsPerView >= testimonials.length}
            className={`${
              currentIndex + itemsPerView >= testimonials.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <IoIosArrowRoundForward size={30} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex / itemsPerView) * 100}%)`,
            width: `${(testimonials.length / itemsPerView) * 100}%`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-full flex justify-center items-start flex-col md:w-1/2 lg:w-1/3 px-4 py-2 h-[250px] rounded bg-white text-left space-y-3"
            >
              <p className="text-2xl text-yellow-500">
                {"★ ".repeat(testimonial.rating).trim()}
              </p>
              <b className="flex items-center justify-center text-2xl gap-3">
                {testimonial.name} <FcOk size={20} />
              </b>
              <p className="max-w-xs text-sm text-black/60">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
