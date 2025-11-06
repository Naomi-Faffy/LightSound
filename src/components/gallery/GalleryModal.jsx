import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GalleryModal({ images, selectedIndex, onClose, onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(selectedIndex);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const THUMBNAILS_PER_VIEW = 5;
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  useEffect(() => {
    setCurrentIndex(selectedIndex);
    const newStartIndex = Math.max(0, Math.min(selectedIndex - Math.floor(THUMBNAILS_PER_VIEW / 2), images.length - THUMBNAILS_PER_VIEW));
    setThumbnailStartIndex(newStartIndex);
  }, [selectedIndex, images.length]);

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(newIndex);
    onNavigate(newIndex);
    updateThumbnailView(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    onNavigate(newIndex);
    updateThumbnailView(newIndex);
  };

  const updateThumbnailView = (index) => {
    if (index < thumbnailStartIndex) {
      setThumbnailStartIndex(index);
    } else if (index >= thumbnailStartIndex + THUMBNAILS_PER_VIEW) {
      setThumbnailStartIndex(index - THUMBNAILS_PER_VIEW + 1);
    }
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    onNavigate(index);
    updateThumbnailView(index);
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
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="w-full max-w-6xl flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        <div className="relative">
          <div 
            className="relative"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Desktop/Tablet: Show single large image */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="hidden md:block relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={images[currentIndex].url}
                alt={`Gallery image ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Mobile: Show carousel with visible adjacent images */}
            <div className="md:hidden relative h-[60vh] flex items-center justify-center overflow-visible">
              <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "1000px" }}>
                {[-1, 0, 1].map((offset) => {
                  const index = (currentIndex + offset + images.length) % images.length;
                  const isCenter = offset === 0;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: isCenter ? 1 : 0.4,
                        scale: isCenter ? 1 : 0.75,
                        x: `${offset * 85}%`,
                        zIndex: isCenter ? 20 : 10,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute rounded-2xl overflow-hidden shadow-2xl"
                      style={{
                        width: "85%",
                        height: "90%",
                        pointerEvents: isCenter ? "auto" : "none",
                      }}
                    >
                      <img
                        src={images[index].url}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <div className="text-white text-sm font-medium">
              {currentIndex + 1} / {images.length}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="hidden md:flex relative items-center justify-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleThumbnailPrev}
            disabled={thumbnailStartIndex === 0}
            className="text-white hover:bg-white/10 disabled:opacity-30"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex gap-3 overflow-hidden">
            {images
              .slice(thumbnailStartIndex, thumbnailStartIndex + THUMBNAILS_PER_VIEW)
              .map((image, idx) => {
                const actualIndex = thumbnailStartIndex + idx;
                return (
                  <motion.button
                    key={image.id}
                    onClick={() => handleThumbnailClick(actualIndex)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 ${
                      currentIndex === actualIndex
                        ? "ring-4 ring-white scale-110"
                        : "ring-2 ring-white/30 hover:ring-white/50"
                    }`}
                    whileHover={{ scale: currentIndex === actualIndex ? 1.1 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={image.thumb}
                      alt={`Thumbnail ${actualIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {currentIndex !== actualIndex && (
                      <div className="absolute inset-0 bg-black/40" />
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
    </motion.div>
  );
}
