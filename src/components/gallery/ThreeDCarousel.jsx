import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThreeDCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);
  const THUMBNAILS_PER_VIEW = 5;

  const getVisibleImages = () => {
    const visible = [];
    const positions = [-2, -1, 0, 1, 2];
    
    positions.forEach((pos) => {
      let index = currentIndex + pos;
      if (index < 0) index = images.length + index;
      if (index >= images.length) index = index - images.length;
      visible.push({ image: images[index], position: pos, index });
    });
    
    return visible;
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handleThumbnailPrev = () => {
    if (thumbnailStartIndex > 0) {
      setThumbnailStartIndex(thumbnailStartIndex - 1);
    }
  };

  const handleThumbnailNext = () => {
    if (thumbnailStartIndex < images.length - THUMBNAILS_PER_VIEW) {
      setThumbnailStartIndex(thumbnailStartIndex + 1);
    }
  };

  useEffect(() => {
    if (currentIndex < thumbnailStartIndex) {
      setThumbnailStartIndex(currentIndex);
    } else if (currentIndex >= thumbnailStartIndex + THUMBNAILS_PER_VIEW) {
      setThumbnailStartIndex(currentIndex - THUMBNAILS_PER_VIEW + 1);
    }
  }, [currentIndex, thumbnailStartIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const visibleImages = getVisibleImages();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative h-[400px] md:h-[500px] mb-8 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ 
            perspective: "2000px",
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence initial={false}>
              {visibleImages.map(({ image, position, index }) => {
                const isCurrent = position === 0;
                
                const getTransform = () => {
                  if (position === 0) {
                    return { 
                      x: "0px", 
                      z: 0, 
                      rotateY: 0, 
                      scale: 1,
                      width: 400,
                      height: 480
                    };
                  } else if (position === -1) {
                    return { 
                      x: "-250px", 
                      z: -400, 
                      rotateY: 25, 
                      scale: 0.75,
                      width: 360,
                      height: 440
                    };
                  } else if (position === 1) {
                    return { 
                      x: "250px", 
                      z: -400, 
                      rotateY: -25, 
                      scale: 0.75,
                      width: 360,
                      height: 440
                    };
                  } else if (position === -2) {
                    return { 
                      x: "-400px", 
                      z: -600, 
                      rotateY: 35, 
                      scale: 0.6,
                      width: 320,
                      height: 400
                    };
                  } else {
                    return { 
                      x: "400px", 
                      z: -600, 
                      rotateY: -35, 
                      scale: 0.6,
                      width: 320,
                      height: 400
                    };
                  }
                };

                const transform = getTransform();

                return (
                  <motion.div
                    key={`${index}-${position}`}
                    initial={{ opacity: 0 }}
                    animate={{
                      x: transform.x,
                      z: transform.z,
                      rotateY: transform.rotateY,
                      scale: transform.scale,
                      opacity: Math.abs(position) <= 2 ? 1 : 0,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{
                      position: "absolute",
                      transformStyle: "preserve-3d",
                      zIndex: isCurrent ? 20 : 10 - Math.abs(position),
                      width: `${transform.width}px`,
                      height: `${transform.height}px`,
                      left: "50%",
                      top: "50%",
                      marginLeft: `-${transform.width / 2}px`,
                      marginTop: `-${transform.height / 2}px`,
                    }}
                  >
                    <div
                      className="w-full h-full rounded-3xl overflow-hidden"
                      style={{
                        boxShadow: isCurrent 
                          ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)" 
                          : "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <img
                        src={image.url}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full object-cover"
                        style={{
                          filter: isCurrent ? "brightness(1)" : "brightness(0.7)",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30">
          <Button
            onClick={handleNext}
            size="icon"
            className="w-14 h-14 rounded-full bg-white/90 hover:bg-white shadow-xl text-slate-800 backdrop-blur-sm"
          >
            <ChevronRight className="w-7 h-7" />
          </Button>
        </div>

        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30">
          <Button
            onClick={handlePrev}
            size="icon"
            className="w-14 h-14 rounded-full bg-white/90 hover:bg-white shadow-xl text-slate-800 backdrop-blur-sm"
          >
            <ChevronLeft className="w-7 h-7" />
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-12">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleThumbnailPrev}
          disabled={thumbnailStartIndex === 0}
          className="text-white hover:bg-white/10 disabled:opacity-30"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex gap-3">
          {images
            .slice(thumbnailStartIndex, thumbnailStartIndex + THUMBNAILS_PER_VIEW)
            .map((image, idx) => {
              const actualIndex = thumbnailStartIndex + idx;
              const isActive = actualIndex === currentIndex;

              return (
                <motion.button
                  key={image.id}
                  onClick={() => handleThumbnailClick(actualIndex)}
                  className={`relative overflow-hidden rounded-xl transition-all duration-300 flex-shrink-0 ${
                    isActive
                      ? "w-24 h-24 ring-4 ring-white scale-110"
                      : "w-20 h-20 ring-2 ring-white/30 hover:ring-white/50"
                  }`}
                  whileHover={{ scale: isActive ? 1.1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={image.thumb}
                    alt={`Thumbnail ${actualIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {!isActive && (
                    <div className="absolute inset-0 bg-black/50" />
                  )}
                </motion.button>
              );
            })}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleThumbnailNext}
          disabled={thumbnailStartIndex >= images.length - THUMBNAILS_PER_VIEW}
          className="text-white hover:bg-white/10 disabled:opacity-30"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
