import { motion } from "framer-motion";
import CrystalCard from "@/components/CrystalCard";

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