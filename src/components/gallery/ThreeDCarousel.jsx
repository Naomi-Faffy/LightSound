import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  const getCardStyle = (position) => {
    const isCurrent = position === 0;
    
    let transform = "";
    let width = 280;
    let height = 360;
    let opacity = 1;
    let zIndex = 10;
    let filter = "brightness(0.7)";
    
    if (position === 0) {
      transform = "translateX(-50%) translateY(-50%) translateZ(0px) rotateY(0deg) scale(1)";
      width = 400;
      height = 480;
      zIndex = 20;
      filter = "brightness(1)";
    } else if (position === -1) {
      transform = "translateX(-50%) translateY(-50%) translateX(-250px) translateZ(-400px) rotateY(25deg) scale(0.75)";
      width = 360;
      height = 440;
      zIndex = 15;
    } else if (position === 1) {
      transform = "translateX(-50%) translateY(-50%) translateX(250px) translateZ(-400px) rotateY(-25deg) scale(0.75)";
      width = 360;
      height = 440;
      zIndex = 15;
    } else if (position === -2) {
      transform = "translateX(-50%) translateY(-50%) translateX(-400px) translateZ(-600px) rotateY(35deg) scale(0.6)";
      width = 320;
      height = 400;
      zIndex = 10;
    } else if (position === 2) {
      transform = "translateX(-50%) translateY(-50%) translateX(400px) translateZ(-600px) rotateY(-35deg) scale(0.6)";
      width = 320;
      height = 400;
      zIndex = 10;
    }
    
    return {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: `${width}px`,
      height: `${height}px`,
      transform,
      transformStyle: "preserve-3d",
      zIndex,
      opacity,
      filter,
      transition: "all 0.6s ease-in-out",
    };
  };

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
      <div style={{ 
        position: "relative", 
        height: "500px", 
        marginBottom: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}>
        <div style={{ 
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: "2000px",
          perspectiveOrigin: "50% 50%"
        }}>
          <div style={{ 
            position: "relative", 
            width: "100%", 
            height: "100%"
          }}>
            {visibleImages.map(({ image, position, index }) => {
              const isCurrent = position === 0;
              const cardStyle = getCardStyle(position);
              
              return (
                <div
                  key={`carousel-${index}`}
                  style={cardStyle}
                >
                  <div style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: isCurrent 
                      ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)" 
                      : "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
                  }}>
                    <img
                      src={image.url}
                      alt={`Gallery image ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        userSelect: "none",
                        pointerEvents: "none"
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{
          position: "absolute",
          right: "2rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 30
        }}>
          <Button
            onClick={handleNext}
            size="icon"
            style={{
              width: "3.5rem",
              height: "3.5rem",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)",
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4), 0 0 20px rgba(59, 130, 246, 0.3)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              color: "white",
              backdropFilter: "blur(10px)"
            }}
            className="hover:scale-110 transition-transform duration-300"
          >
            <ChevronRight className="w-7 h-7" />
          </Button>
        </div>

        <div style={{
          position: "absolute",
          left: "2rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 30
        }}>
          <Button
            onClick={handlePrev}
            size="icon"
            style={{
              width: "3.5rem",
              height: "3.5rem",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)",
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4), 0 0 20px rgba(59, 130, 246, 0.3)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              color: "white",
              backdropFilter: "blur(10px)"
            }}
            className="hover:scale-110 transition-transform duration-300"
          >
            <ChevronLeft className="w-7 h-7" />
          </Button>
        </div>
      </div>

      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "3rem"
      }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleThumbnailPrev}
          disabled={thumbnailStartIndex === 0}
          style={{
            color: "white",
            opacity: thumbnailStartIndex === 0 ? 0.3 : 1,
            cursor: thumbnailStartIndex === 0 ? "not-allowed" : "pointer"
          }}
          className="hover:bg-white/10"
        >
          <ChevronLeft style={{ width: "1.25rem", height: "1.25rem" }} />
        </Button>

        <div style={{ display: "flex", gap: "0.75rem" }}>
          {images
            .slice(thumbnailStartIndex, thumbnailStartIndex + THUMBNAILS_PER_VIEW)
            .map((image, idx) => {
              const actualIndex = thumbnailStartIndex + idx;
              const isActive = actualIndex === currentIndex;

              return (
                <motion.button
                  key={image.id}
                  onClick={() => handleThumbnailClick(actualIndex)}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "0.75rem",
                    flexShrink: 0,
                    width: isActive ? "6rem" : "5rem",
                    height: isActive ? "6rem" : "5rem",
                    border: isActive ? "4px solid white" : "2px solid rgba(255, 255, 255, 0.3)",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    transform: isActive ? "scale(1.1)" : "scale(1)"
                  }}
                  whileHover={{ scale: isActive ? 1.1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={image.thumb}
                    alt={`Thumbnail ${actualIndex + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  {!isActive && (
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(0, 0, 0, 0.5)"
                    }} />
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
          style={{
            color: "white",
            opacity: thumbnailStartIndex >= images.length - THUMBNAILS_PER_VIEW ? 0.3 : 1,
            cursor: thumbnailStartIndex >= images.length - THUMBNAILS_PER_VIEW ? "not-allowed" : "pointer"
          }}
          className="hover:bg-white/10"
        >
          <ChevronRight style={{ width: "1.25rem", height: "1.25rem" }} />
        </Button>
      </div>
    </div>
  );
}
