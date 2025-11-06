import { Badge } from "@/components/ui/badge";

export default function Services() {
  const crystalServices = [
    {
      title: "Crystal Card 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi tristique a duis congue. Sollicitudin purus sed pellentesque a duis.",
      collection: "NFT Collection 1",
      imageUrl: "https://images.unsplash.com/photo-1650034605038-c12067e5f299?w=400",
      gradientFrom: "#5B6FE8",
      gradientTo: "#4DD4E8",
    },
    {
      title: "Crystal Card 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi tristique a duis congue. Sollicitudin purus sed pellentesque a duis.",
      collection: "NFT Collection 1",
      imageUrl: "https://images.unsplash.com/photo-1650406262076-c3444b5be6f6?w=400",
      gradientFrom: "#E84D9F",
      gradientTo: "#F97316",
    },
    {
      title: "Crystal Card 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi tristique a duis congue. Sollicitudin purus sed pellentesque a duis.",
      collection: "NFT Collection 1",
      imageUrl: "https://images.unsplash.com/photo-1641797508847-146a742dbb88?w=400",
      gradientFrom: "#A855F7",
      gradientTo: "#E84D9F",
    },
    {
      title: "Crystal Card 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi tristique a duis congue. Sollicitudin purus sed pellentesque a duis.",
      collection: "NFT Collection 1",
      imageUrl: "https://images.unsplash.com/photo-1646829305521-0897a32a6cf1?w=400",
      gradientFrom: "#4DD4E8",
      gradientTo: "#5B6FE8",
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
      gradientTo: "#4DD4E8",
    },
  ];

  return (
    <div 
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #000000 0%, #0a1628 25%, #1a2942 50%, #0a1628 75%, #000000 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "5rem 1.5rem",
      }}
    >
      {/* Glass morphism overlay effect - matching gallery */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)",
        pointerEvents: "none"
      }} />

      {/* Decorative Glowing Orbs */}
      <div style={{ position: "absolute", top: "-15%", left: "-10%", width: "500px", height: "500px", borderRadius: "50%", opacity: 0.4, background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)", filter: "blur(100px)" }} />
      <div style={{ position: "absolute", bottom: "-15%", right: "-10%", width: "500px", height: "500px", borderRadius: "50%", opacity: 0.3, background: "radial-gradient(circle, #EC4899 0%, transparent 70%)", filter: "blur(100px)" }} />

      {/* Main Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", padding: "0 1rem" }}>
          {crystalServices.map((service, index) => (
            <div 
              key={index} 
              className="group"
              style={{
                position: "relative",
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-12px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              {/* Card Container with Gradient Border */}
              <div 
                style={{
                  position: "relative",
                  borderRadius: "32px",
                  padding: "2px",
                  background: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`,
                  overflow: "hidden",
                }}
              >
                {/* Inner Card with Coarse Texture */}
                <div 
                  style={{
                    position: "relative",
                    borderRadius: "30px",
                    padding: "2.5rem 2rem",
                    minHeight: "520px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    background: "linear-gradient(135deg, rgba(45, 20, 70, 0.95) 0%, rgba(60, 30, 90, 0.92) 50%, rgba(45, 20, 70, 0.95) 100%)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  {/* Coarse Grain Texture Overlay - High Opacity */}
                  <div 
                    style={{
                      position: "absolute",
                      inset: 0,
                      opacity: 0.15,
                      mixBlendMode: "overlay",
                      pointerEvents: "none",
                      borderRadius: "30px",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      backgroundSize: "200px 200px",
                    }}
                  />

                  {/* Additional Fine Grain Layer */}
                  <div 
                    style={{
                      position: "absolute",
                      inset: 0,
                      opacity: 0.08,
                      pointerEvents: "none",
                      borderRadius: "30px",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='2' result='turbulence'/%3E%3CfeColorMatrix in='turbulence' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.5'/%3E%3C/svg%3E")`,
                    }}
                  />

                  {/* Crystal Image with Glow */}
                  <div style={{ position: "relative", marginBottom: "2rem", zIndex: 10 }}>
                    {/* Glow behind crystal */}
                    <div 
                      className="crystal-glow"
                      style={{
                        position: "absolute",
                        inset: "-20px",
                        filter: "blur(40px)",
                        opacity: 0.7,
                        background: `radial-gradient(circle, ${service.gradientFrom}, transparent)`,
                        transition: "opacity 0.7s ease",
                      }}
                    />
                    
                    {/* Crystal Image */}
                    <img 
                      src={service.imageUrl}
                      alt={`Crystal ${index + 1}`}
                      className="crystal-img"
                      style={{
                        position: "relative",
                        width: "160px",
                        height: "160px",
                        objectFit: "contain",
                        filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
                        transition: "transform 0.7s ease",
                      }}
                    />
                  </div>

                  {/* Decorative Lines */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem", width: "100%", justifyContent: "center" }}>
                    <div style={{ height: "1px", width: "4rem", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)" }} />
                    <div style={{ height: "1px", width: "4rem", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)" }} />
                  </div>

                  {/* Title with Gradient */}
                  <h3 
                    className="card-title"
                    style={{
                      fontSize: "1.875rem",
                      fontWeight: "300",
                      marginBottom: "1.25rem",
                      letterSpacing: "0.05em",
                      background: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      transition: "transform 0.7s ease",
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Decorative Lines */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", width: "100%", justifyContent: "center" }}>
                    <div style={{ height: "1px", width: "4rem", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)" }} />
                    <div style={{ height: "1px", width: "4rem", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)" }} />
                  </div>

                  {/* Description */}
                  <p 
                    className="card-desc"
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255, 255, 255, 0.7)",
                      lineHeight: "1.6",
                      fontWeight: "300",
                      marginBottom: "2rem",
                      transition: "color 0.7s ease",
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Collection Badge */}
                  <div style={{ marginTop: "auto" }}>
                    <Badge 
                      className="card-badge"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        padding: "0.5rem 1.5rem",
                        fontSize: "0.75rem",
                        fontWeight: "300",
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: service.gradientFrom,
                        transition: "border-color 0.7s ease",
                      }}
                    >
                      {service.collection}
                    </Badge>
                  </div>
                </div>
              </div>

              <style jsx>{`
                .group:hover .crystal-glow {
                  opacity: 0.9;
                }
                .group:hover .crystal-img {
                  transform: scale(1.1) rotate(6deg);
                }
                .group:hover .card-title {
                  transform: scale(1.05);
                }
                .group:hover .card-desc {
                  color: rgba(255, 255, 255, 0.9);
                }
                .group:hover .card-badge {
                  border-color: rgba(255, 255, 255, 0.3);
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}