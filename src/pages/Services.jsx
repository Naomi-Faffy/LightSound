import { Badge } from "@/components/ui/badge";

export default function Services() {
  const crystalServices = [
    {
      title: "Crystal Card 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi tristique a duis congue. Sollicitudin purus sed pellentesque a duis.",
      collection: "NFT Collection 1",
      imageUrl: "https://images.unsplash.com/photo-1650034605038-c12067e5f299?w=400",
      gradientFrom: "#4F46E5",
      gradientTo: "#06B6D4",
    },
    {
      title: "Crystal Card 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi tristique a duis congue. Sollicitudin purus sed pellentesque a duis.",
      collection: "NFT Collection 1",
      imageUrl: "https://images.unsplash.com/photo-1650406262076-c3444b5be6f6?w=400",
      gradientFrom: "#EC4899",
      gradientTo: "#F97316",
    },
    {
      title: "Crystal Card 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi tristique a duis congue. Sollicitudin purus sed pellentesque a duis.",
      collection: "NFT Collection 1",
      imageUrl: "https://images.unsplash.com/photo-1641797508847-146a742dbb88?w=400",
      gradientFrom: "#A855F7",
      gradientTo: "#EC4899",
    },
    {
      title: "Crystal Card 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi tristique a duis congue. Sollicitudin purus sed pellentesque a duis.",
      collection: "NFT Collection 1",
      imageUrl: "https://images.unsplash.com/photo-1646829305521-0897a32a6cf1?w=400",
      gradientFrom: "#06B6D4",
      gradientTo: "#3B82F6",
    },
    {
      title: "Crystal Card 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi tristique a duis congue. Sollicitudin purus sed pellentesque a duis.",
      collection: "NFT Collection 1",
      imageUrl: "https://images.unsplash.com/photo-1548504769-900b70ed122e?w=400",
      gradientFrom: "#F97316",
      gradientTo: "#FBBF24",
    },
    {
      title: "Crystal Card 6",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi tristique a duis congue. Sollicitudin purus sed pellentesque a duis.",
      collection: "NFT Collection 1",
      imageUrl: "https://images.unsplash.com/photo-1662201966782-395ada85ec09?w=400",
      gradientFrom: "#10B981",
      gradientTo: "#06B6D4",
    },
  ];

  return (
    <div 
      className="min-h-screen relative overflow-hidden flex items-center justify-center py-20 px-4"
      style={{
        background: 'linear-gradient(135deg, #0a0118 0%, #1a0a2e 25%, #2d1b4e 50%, #1a0a2e 75%, #0a0118 100%)',
      }}
    >
      {/* Decorative Glowing Orbs - Background */}
      <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-50" 
        style={{
          background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      
      <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-40" 
        style={{
          background: 'radial-gradient(circle, #EC4899 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {crystalServices.map((service, index) => (
            <div 
              key={index} 
              className="group relative transition-transform duration-500 hover:-translate-y-3"
            >
              {/* Card Container with Gradient Border */}
              <div 
                className="relative rounded-[32px] p-[2px] overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`,
                }}
              >
                {/* Inner Card */}
                <div 
                  className="relative rounded-[30px] p-8 lg:p-10 flex flex-col items-center text-center min-h-[500px]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(26, 10, 46, 0.95) 0%, rgba(45, 27, 78, 0.9) 50%, rgba(26, 10, 46, 0.95) 100%)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  {/* Subtle Noise Texture */}
                  <div 
                    className="absolute inset-0 opacity-[0.02] pointer-events-none rounded-[30px]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                  />

                  {/* Hover Glow Effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[30px]"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${service.gradientFrom}20, transparent 70%)`,
                    }}
                  />

                  {/* Crystal Image with Glow */}
                  <div className="relative mb-8 z-10">
                    {/* Glow behind crystal */}
                    <div 
                      className="absolute inset-0 blur-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-700"
                      style={{
                        background: `radial-gradient(circle, ${service.gradientFrom}, transparent)`,
                        transform: 'scale(1.2)',
                      }}
                    />
                    
                    {/* Crystal Image */}
                    <img 
                      src={service.imageUrl}
                      alt={`Crystal ${index + 1}`}
                      className="relative w-40 h-40 object-contain drop-shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700"
                    />
                  </div>

                  {/* Decorative Lines */}
                  <div className="flex items-center gap-3 mb-5 w-full justify-center">
                    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </div>

                  {/* Title with Gradient */}
                  <h3 
                    className="text-3xl font-light mb-5 tracking-wide transition-transform duration-700 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Decorative Lines */}
                  <div className="flex items-center gap-3 mb-6 w-full justify-center">
                    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white/70 leading-relaxed font-light mb-8 group-hover:text-white/90 transition-colors duration-700">
                    {service.description}
                  </p>

                  {/* Collection Badge */}
                  <div className="mt-auto">
                    <Badge 
                      className="bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-2 text-xs font-light uppercase tracking-widest group-hover:border-white/30 transition-all duration-700"
                      style={{
                        color: service.gradientFrom,
                      }}
                    >
                      {service.collection}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}