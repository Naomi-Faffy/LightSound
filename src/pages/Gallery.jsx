import React from "react";
import { motion } from "framer-motion";
import ThreeDCarousel from "../components/gallery/ThreeDCarousel";
import "../index.css";

const images = [
  { id: 1, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&q=80" },
  { id: 2, url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&q=80" },
  { id: 3, url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200&q=80" },
  { id: 4, url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=200&q=80" },
  { id: 5, url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=200&q=80" },
  { id: 6, url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=200&q=80" },
  { id: 7, url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&q=80" },
  { id: 8, url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&q=80" },
  { id: 9, url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&q=80" },
  { id: 10, url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&q=80" },
  { id: 11, url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=200&q=80" },
  { id: 12, url: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=200&q=80" },
  { id: 13, url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=200&q=80" },
  { id: 14, url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=200&q=80" },
  { id: 15, url: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=200&q=80" },
  { id: 16, url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&q=80" },
  { id: 17, url: "https://images.unsplash.com/photo-1513735539099-cf6e5d812a47?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1513735539099-cf6e5d812a47?w=200&q=80" },
  { id: 18, url: "https://images.unsplash.com/photo-1542202229-7d93c33f5d07?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1542202229-7d93c33f5d07?w=200&q=80" },
  { id: 19, url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=200&q=80" },
  { id: 20, url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1200&q=80", thumb: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=200&q=80" },
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
