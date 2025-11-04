import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThreeDCarousel from "./ThreeDCarousel";

// Gallery images - using your uploaded event images
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Photo Gallery
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Explore our collection of stunning landscapes
          </p>
        </motion.div>

        <ThreeDCarousel images={images} />
      </div>
    </div>
  );
}
