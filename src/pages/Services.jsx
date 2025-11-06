import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

function CrystalCard({ 
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

export default function Services() {
  const crystalServices = [
    {
      title: "Crystal Card 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi tristique a duis congue. Sollicitudin purus sed pellentesque a duis.",
      collection: "NFT Collection 1",
      imageUrl: "https://images.unsplash.com/photo-1650034605038-c12067e5f299?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxjcnlzdGFsJTIwZ2VtJTIwYmx1ZSUyMDNEJTIwZ2VvbWV0cmljfGVufDB8Mnx8Ymx1ZXwxNzYyNDI0MTcyfDA&ixlib=rb-4.1.0&q=85",
      imageAlt: "Blue crystal cluster - Daniele Levis Pelusi on Unsplash",
      gradientFrom: "#4F46E5",
      gradientTo: "#06B6D4",
    },
    {
      title: "Crystal Card 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi tristique a duis congue. Sollicitudin purus sed pellentesque a duis.",
      collection: "NFT Collection 1",
      imageUrl: "https://images.unsplash.com/photo-1650406262076-c3444b5be6f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxjcnlzdGFsJTIwZ2VtJTIwcHVycGxlJTIwM0QlMjBnZW9tZXRyaWN8ZW58MHwyfHxwdXJwbGV8MTc2MjQyNDE3Mnww&ixlib=rb-4.1.0&q=85",
      imageAlt: "Pink crystal cluster - engin akyurt on Unsplash",
      gradientFrom: "#EC4899",
      gradientTo: "#F97316",
    },
    {
      title: "Crystal Card 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi tristique a duis congue. Sollicitudin purus sed pellentesque a duis.",
      collection: "NFT Collection 1",
      imageUrl: "https://images.unsplash.com/photo-1641797508847-146a742dbb88?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxjcnlzdGFsJTIwZ2VtJTIwcHVycGxlJTIwM0QlMjBnZW9tZXRyaWN8ZW58MHwyfHxwdXJwbGV8MTc2MjQyNDE3Mnww&ixlib=rb-4.1.0&q=85",
      imageAlt: "Purple crystal cluster - Dynamic Wang on Unsplash",
      gradientFrom: "#A855F7",
      gradientTo: "#EC4899",
    },
    {
      title: "Crystal Card 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi tristique a duis congue. Sollicitudin purus sed pellentesque a duis.",
      collection: "NFT Collection 1",
      imageUrl: "https://images.unsplash.com/photo-1646829305521-0897a32a6cf1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxjcnlzdGFsJTIwZ2VtJTIwdGVhbCUyMDNEJTIwZ2VvbWV0cmljfGVufDB8Mnx8dGVhbHwxNzYyNDI0MTcyfDA&ixlib=rb-4.1.0&q=85",
      imageAlt: "Teal crystal cluster - Rick Rothenberg on Unsplash",
      gradientFrom: "#06B6D4",
      gradientTo: "#3B82F6",
    },
    {
      title: "Crystal Card 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi tristique a duis congue. Sollicitudin purus sed pellentesque a duis.",
      collection: "NFT Collection 1",
      imageUrl: "https://images.unsplash.com/photo-1548504769-900b70ed122e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxjcnlzdGFsJTIwZ2VtJTIwb3JhbmdlJTIwM0QlMjBnZW9tZXRyaWN8ZW58MHwyfHxvcmFuZ2V8MTc2MjQyNDE3Mnww&ixlib=rb-4.1.0&q=85",
      imageAlt: "Orange crystal cluster - from nio on Unsplash",
      gradientFrom: "#F97316",
      gradientTo: "#FBBF24",
    },
    {
      title: "Crystal Card 6",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi tristique a duis congue. Sollicitudin purus sed pellentesque a duis.",
      collection: "NFT Collection 1",
      imageUrl: "https://images.unsplash.com/photo-1662201966782-395ada85ec09?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxjcnlzdGFsJTIwZ2VtJTIwZ3JlZW4lMjAzRCUyMGdlb21ldHJpY3xlbnwwfDJ8fGdyZWVufDE3NjI0MjQxNzJ8MA&ixlib=rb-4.1.0&q=85",
      imageAlt: "Green crystal cluster - Deep on Unsplash",
      gradientFrom: "#10B981",
      gradientTo: "#06B6D4",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center py-20 md:py-24 lg:py-32" 
      style={{
        background: 'linear-gradient(135deg, #0f0428 0%, #1a0a2e 25%, #2d1b4e 50%, #1a0a2e 75%, #0f0428 100%)',
      }}
    >
      {/* Decorative Glowing Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Top Left Orb */}
        <div 
          className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-40 animate-pulse"
          style={{
            background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)',
            filter: 'blur(80px)',
            animationDuration: '4s',
          }}
        />
        
        {/* Top Right Orb */}
        <div 
          className="absolute top-[10%] right-[-5%] w-[350px] h-[350px] rounded-full opacity-30 animate-pulse"
          style={{
            background: 'radial-gradient(circle, #EC4899 0%, transparent 70%)',
            filter: 'blur(70px)',
            animationDuration: '5s',
            animationDelay: '1s',
          }}
        />

        {/* Bottom Center Orb */}
        <div 
          className="absolute bottom-[-10%] left-[40%] w-[450px] h-[450px] rounded-full opacity-35 animate-pulse"
          style={{
            background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)',
            filter: 'blur(90px)',
            animationDuration: '6s',
            animationDelay: '2s',
          }}
        />
      </div>

      {/* Services Section */}
      <div className="relative w-full max-w-[1600px] mx-auto px-6 lg:px-10 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">
            Crystal Collection
          </h2>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto">
            Discover our exclusive collection of premium NFT crystals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
          {crystalServices.map((service, index) => (
            <CrystalCard
              key={index}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}