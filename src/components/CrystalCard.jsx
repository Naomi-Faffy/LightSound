import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

export default function CrystalCard({ 
  title, 
  description, 
  collection, 
  imageUrl, 
  imageAlt,
  gradientFrom,
  gradientTo,
  index 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="group relative"
    >
      {/* Glassmorphism Card */}
      <div className="relative h-full rounded-3xl overflow-hidden">
        {/* Gradient Border Effect */}
        <div 
          className="absolute inset-0 rounded-3xl p-[2px]"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
          }}
        >
          {/* Inner Card with Glass Effect */}
          <div className="relative h-full w-full rounded-3xl bg-gradient-to-br from-[#1a0a2e]/90 via-[#2d1b4e]/85 to-[#1a0a2e]/90 backdrop-blur-xl p-8 lg:p-10 flex flex-col items-center text-center">
            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none rounded-3xl"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Glow Effect on Hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${gradientFrom}15, transparent 70%)`,
              }}
            />

            {/* Crystal Image */}
            <div className="relative mb-6 lg:mb-8 z-10">
              <div 
                className="absolute inset-0 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(circle, ${gradientFrom}80, transparent)`,
                }}
              />
              <img 
                src={imageUrl}
                alt={imageAlt}
                className="relative w-32 h-32 lg:w-40 lg:h-40 object-contain drop-shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700"
                style={{ width: '160px', height: '160px' }}
              />
            </div>

            {/* Decorative Lines */}
            <div className="flex items-center gap-3 mb-4 w-full justify-center">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>

            {/* Title */}
            <h3 
              className="text-2xl lg:text-3xl font-light mb-4 lg:mb-5 tracking-wide transition-all duration-700 group-hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {title}
            </h3>

            {/* Decorative Lines */}
            <div className="flex items-center gap-3 mb-6 w-full justify-center">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>

            {/* Description */}
            <p className="text-sm lg:text-base text-white/70 leading-relaxed font-light mb-6 lg:mb-8 group-hover:text-white/90 transition-colors duration-700">
              {description}
            </p>

            {/* Collection Badge */}
            <Badge 
              className="bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-2 text-xs font-light uppercase tracking-[0.2em] group-hover:border-white/30 transition-all duration-700"
              style={{
                color: gradientFrom,
              }}
            >
              {collection}
            </Badge>
          </div>
        </div>
      </div>
    </motion.div>
  );
}