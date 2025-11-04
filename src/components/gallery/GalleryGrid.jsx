import React from "react";
import { motion } from "framer-motion";

export default function GalleryGrid({ images, onImageClick }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group"
          onClick={() => onImageClick(index)}
        >
          <img
            src={image.url}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </motion.div>
      ))}
    </div>
  );
}
