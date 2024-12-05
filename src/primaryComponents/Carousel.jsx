import React, { useState } from "react";
import { motion } from "framer-motion";

const Carousel = ({lang}) => {

    let imagesarr = [];

    if(lang=="English"){
        imagesarr = [
            "src/assets/englishImages/wp10.jpg",
            "src/assets/englishImages/wp15.jpg"
        ]
    }
    else if(lang=="Tamil"){
        imagesarr = [
            "src/assets/tamilImages/wp (2).jpg",
            "src/assets/tamilImages/wp32.jpg"
        ]
    }
    else{
        imagesarr = [
            "src/assets/hindiImages/wp5.jpg",
            "src/assets/hindiImages/wp13.jpg"
        ]
    }
  
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [click,setClick] = useState("right");

  const animatefields ={
    "left":{"initial":{opacity:0 , x:-100} , "exit":{opacity:0 , x:100}},
    "right":{"initial":{opacity:0 , x:100} , "exit":{opacity:0 , x:-100}}
  }

  function nextSlide(){
    setCurrentIndex((currentIndex+1)%imagesarr.length);
    setClick("right");
  };

  function prevSlide(){
    setCurrentIndex((currentIndex-1+imagesarr.length)%imagesarr.length);
    setClick("left");
  };

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      <div className="relative">
        <motion.img
          key={currentIndex}
          src={imagesarr[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          initial={animatefields[click]["initial"]}
          animate={{ opacity: 1, x: 0 }}
          exit={animatefields[click]["exit"]}
          transition={{ duration: 0.5 }}
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-950 text-white p-2 rounded-full hover:bg-blue-900"
      >
        ◄
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-950 text-white p-2 rounded-full hover:bg-blue-900"
      >
        ►
      </button>

      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {imagesarr.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
