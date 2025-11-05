import React from "react";
import { motion } from "framer-motion";
import ThreeDCarousel from "../components/gallery/ThreeDCarousel";

const images = [
  { id: 1, url: "/gallery-images/event1.jpg", thumb: "/gallery-images/event1.jpg" },
  { id: 2, url: "/gallery-images/event2.jpg", thumb: "/gallery-images/event2.jpg" },
  { id: 3, url: "/gallery-images/event3.jpg", thumb: "/gallery-images/event3.jpg" },
  { id: 4, url: "/gallery-images/event4.jpg", thumb: "/gallery-images/event4.jpg" },
  { id: 5, url: "/gallery-images/event5.jpg", thumb: "/gallery-images/event5.jpg" },
  { id: 6, url: "/gallery-images/event6.jpg", thumb: "/gallery-images/event6.jpg" },
  { id: 7, url: "/gallery-images/event7.jpg", thumb: "/gallery-images/event7.jpg" },
  { id: 8, url: "/gallery-images/event8.jpg", thumb: "/gallery-images/event8.jpg" },
  { id: 9, url: "/gallery-images/event9.jpg", thumb: "/gallery-images/event9.jpg" },
  { id: 10, url: "/gallery-images/event10.jpg", thumb: "/gallery-images/event10.jpg" },
  { id: 11, url: "/gallery-images/event11.jpg", thumb: "/gallery-images/event11.jpg" },
  { id: 12, url: "/gallery-images/event12.jpg", thumb: "/gallery-images/event12.jpg" },
  { id: 13, url: "/gallery-images/event13.jpg", thumb: "/gallery-images/event13.jpg" },
  { id: 14, url: "/gallery-images/event14.jpg", thumb: "/gallery-images/event14.jpg" },
  { id: 15, url: "/gallery-images/event15.jpg", thumb: "/gallery-images/event15.jpg" },
  { id: 16, url: "/gallery-images/event16.jpg", thumb: "/gallery-images/event16.jpg" },
  { id: 17, url: "/gallery-images/event17.jpg", thumb: "/gallery-images/event17.jpg" },
  { id: 18, url: "/gallery-images/event18.jpg", thumb: "/gallery-images/event18.jpg" },
  { id: 19, url: "/gallery-images/event19.jpg", thumb: "/gallery-images/event19.jpg" },
  { id: 20, url: "/gallery-images/event20.jpg", thumb: "/gallery-images/event20.jpg" },
];

export default function Gallery() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #000000 0%, #0a1628 25%, #1a2942 50%, #0a1628 75%, #000000 100%)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Glass morphism overlay effect */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)",
        pointerEvents: "none"
      }} />

      <div style={{ 
        position: "relative", 
        zIndex: 1,
        padding: "3rem 1.5rem"
      }}>

        <ThreeDCarousel images={images} />
      </div>
    </div>
  );
}
