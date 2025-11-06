import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThreeDCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
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
      handlePrev();
    }
  };

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

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

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
    const isMobile = window.innerWidth <= 768;
    
    let transform = "";
    let width = 280;
    let height = 360;
    let opacity = 1;
    let zIndex = 10;
    let filter = "brightness(0.7)";
    
    if (isMobile) {
      // Mobile: Show cards in a stacked carousel style
      if (position === 0) {
        transform = "translateX(-50%) translateY(-50%) translateZ(100px) scale(1.1)";
        width = Math.min(window.innerWidth * 0.7, 350);
        height = Math.min(window.innerWidth * 0.85, 420);
        zIndex = 30;
        filter = "brightness(1)";
        opacity = 1;
      } else if (position === -1) {
        transform = "translateX(-50%) translateY(-50%) translateX(-60%) translateZ(-50px) scale(0.85)";
        width = Math.min(window.innerWidth * 0.6, 300);
        height = Math.min(window.innerWidth * 0.75, 360);
        zIndex = 20;
        opacity = 0.7;
      } else if (position === 1) {
        transform = "translateX(-50%) translateY(-50%) translateX(60%) translateZ(-50px) scale(0.85)";
        width = Math.min(window.innerWidth * 0.6, 300);
        height = Math.min(window.innerWidth * 0.75, 360);
        zIndex = 20;
        opacity = 0.7;
      } else if (position === -2) {
        transform = "translateX(-50%) translateY(-50%) translateX(-120%) translateZ(-100px) scale(0.7)";
        width = Math.min(window.innerWidth * 0.5, 250);
        height = Math.min(window.innerWidth * 0.65, 300);
        zIndex = 10;
        opacity = 0.4;
      } else if (position === 2) {
        transform = "translateX(-50%) translateY(-50%) translateX(120%) translateZ(-100px) scale(0.7)";
        width = Math.min(window.innerWidth * 0.5, 250);
        height = Math.min(window.innerWidth * 0.65, 300);
        zIndex = 10;
        opacity = 0.4;
      }
    } else {
      // Desktop: Original 3D carousel
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
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
      <div 
        style={{ 
          position: "relative", 
          height: "clamp(400px, 70vh, 550px)", 
          marginBottom: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "visible"
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div style={{ 
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: "1500px",
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

        <div className="carousel-nav-buttons" style={{
          position: "absolute",
          right: "clamp(0.5rem, 3vw, 2rem)",
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
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#2A4CFF",
              transition: "all 0.3s"
            }}
            className="hover:scale-110 hover:border-[#2A4CFF] hover:bg-white/10"
          >
            <ChevronRight className="w-7 h-7" />
          </Button>
        </div>

        <div className="carousel-nav-buttons" style={{
          position: "absolute",
          left: "clamp(0.5rem, 3vw, 2rem)",
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
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#2A4CFF",
              transition: "all 0.3s"
            }}
            className="hover:scale-110 hover:border-[#2A4CFF] hover:bg-white/10"
          >
            <ChevronLeft className="w-7 h-7" />
          </Button>
        </div>
      </div>

      {/* Music Player Style Controller */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "clamp(1.5rem, 4vw, 3rem)",
        padding: "0 1rem"
      }}>
        <div className="music-bar-responsive" style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(0.75rem, 2vw, 2rem)",
          padding: "clamp(1.25rem, 3vw, 1.5rem) clamp(2rem, 4vw, 3rem)",
          borderRadius: "9999px",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          maxWidth: "900px",
          width: "100%",
          flexWrap: "nowrap",
          justifyContent: "center"
        }}>
          {/* Album Art Thumbnail */}
          <div style={{
            position: "relative",
            width: "clamp(50px, 15vw, 70px)",
            height: "clamp(50px, 15vw, 70px)",
            borderRadius: "14px",
            overflow: "hidden",
            flexShrink: 0,
            boxShadow: "0 4px 16px rgba(42, 76, 255, 0.4)",
            border: "2px solid rgba(42, 76, 255, 0.5)"
          }}>
            <img
              src={images[currentIndex].url}
              alt={`Image ${currentIndex + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>

          {/* Song Info */}
          <div style={{
            flex: 1,
            minWidth: "120px",
            display: "flex",
            flexDirection: "column",
            gap: "0.35rem"
          }}>
            <div style={{
              fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
              fontWeight: "700",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              letterSpacing: "0.02em"
            }}>
              <span style={{ color: "#000000" }}>Sound</span>
              <span style={{ color: "#2A4CFF" }}>Light</span>
            </div>
            <div style={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
              fontWeight: "500",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}>
              Photo {currentIndex + 1} of {images.length}
            </div>
          </div>

          {/* Playback Controls */}
          <div className="playback-controls" style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(0.5rem, 2vw, 0.75rem)",
            flexShrink: 0,
            paddingLeft: "clamp(0.5rem, 3vw, 1.5rem)",
            paddingRight: "clamp(0.5rem, 3vw, 1.5rem)"
          }}>
            {/* Previous Button */}
            <Button
              onClick={handlePrev}
              variant="ghost"
              size="icon"
              style={{
                width: "clamp(2.5rem, 8vw, 3rem)",
                height: "clamp(2.5rem, 8vw, 3rem)",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#FFFFFF",
                transition: "all 0.2s"
              }}
              className="hover:bg-white/15 hover:scale-110 hover:border-[#2A4CFF]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
              </svg>
            </Button>

            {/* Next Button */}
            <Button
              onClick={handleNext}
              variant="ghost"
              size="icon"
              style={{
                width: "clamp(2.5rem, 8vw, 3rem)",
                height: "clamp(2.5rem, 8vw, 3rem)",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#FFFFFF",
                transition: "all 0.2s"
              }}
              className="hover:bg-white/15 hover:scale-110 hover:border-[#2A4CFF]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
              </svg>
            </Button>
          </div>

          {/* Additional Controls */}
          <div className="additional-controls" style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(0.5rem, 2vw, 1rem)",
            flexShrink: 0,
            paddingLeft: "clamp(0.5rem, 3vw, 1.5rem)",
            borderLeft: "1px solid rgba(255, 255, 255, 0.2)"
          }}>
            {/* Comments/Info Icon */}
            <Button
              variant="ghost"
              size="icon"
              style={{
                width: "clamp(2.25rem, 7vw, 2.75rem)",
                height: "clamp(2.25rem, 7vw, 2.75rem)",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#FFFFFF",
                transition: "all 0.2s"
              }}
              className="hover:bg-white/15 hover:border-[#2A4CFF] hover:text-[#2A4CFF]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </Button>

            {/* List/Menu Icon */}
            <Button
              variant="ghost"
              size="icon"
              style={{
                width: "clamp(2.25rem, 7vw, 2.75rem)",
                height: "clamp(2.25rem, 7vw, 2.75rem)",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#FFFFFF",
                transition: "all 0.2s"
              }}
              className="hover:bg-white/15 hover:border-[#2A4CFF] hover:text-[#2A4CFF]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </Button>

            {/* Volume/Speaker Icon */}
            <Button
              variant="ghost"
              size="icon"
              style={{
                width: "clamp(2.25rem, 7vw, 2.75rem)",
                height: "clamp(2.25rem, 7vw, 2.75rem)",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#FFFFFF",
                transition: "all 0.2s"
              }}
              className="hover:bg-white/15 hover:border-[#2A4CFF] hover:text-[#2A4CFF]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            </Button>

            {/* Fullscreen/Expand Icon */}
            <Button
              variant="ghost"
              size="icon"
              style={{
                width: "clamp(2.25rem, 7vw, 2.75rem)",
                height: "clamp(2.25rem, 7vw, 2.75rem)",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#FFFFFF",
                transition: "all 0.2s"
              }}
              className="hover:bg-white/15 hover:border-[#2A4CFF] hover:text-[#2A4CFF]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .carousel-nav-buttons {
            display: none !important;
          }
          
          .music-bar-responsive {
            gap: 1.25rem !important;
            padding: 1.75rem 2.5rem !important;
            flex-wrap: nowrap !important;
            min-height: auto !important;
            width: 95% !important;
            max-width: 95% !important;
          }
          
          .additional-controls {
            display: none !important;
          }
          
          .playback-controls {
            padding-left: 0 !important;
            padding-right: 0 !important;
            gap: 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .music-bar-responsive {
            gap: 1rem !important;
            padding: 1.5rem 2rem !important;
            width: 92% !important;
            max-width: 92% !important;
          }
        }
      `}</style>
    </div>
  );
}