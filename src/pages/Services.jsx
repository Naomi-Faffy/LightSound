import { Badge } from "@/components/ui/badge";

export default function Services() {
  const services = [
    {
      title: "Professional DJs",
      description: "Top-tier DJ talent bringing energy and expertise to every event. Our DJs read the crowd and create unforgettable musical journeys tailored to your celebration.",
      collection: "Entertainment",
      imageUrl: "https://images.unsplash.com/photo-1571266028243-d220c6e87a67?w=400",
      gradientFrom: "#2A4CFF",
      gradientTo: "#5B6FE8",
    },
    {
      title: "Sound Engineering",
      description: "Crystal-clear audio with state-of-the-art sound systems. Professional mixing and engineering ensures every word and beat is heard perfectly throughout your venue.",
      collection: "Audio Production",
      imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400",
      gradientFrom: "#5B6FE8",
      gradientTo: "#7C3AED",
    },
    {
      title: "Lighting Design",
      description: "Transform your space with stunning lighting effects. From elegant ambiance to dynamic stage lighting, we create the perfect atmosphere for your event.",
      collection: "Visual Production",
      imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400",
      gradientFrom: "#7C3AED",
      gradientTo: "#A855F7",
    },
    {
      title: "LED Screens",
      description: "High-resolution LED displays for impactful visual presentations. Perfect for corporate events, product launches, and creating immersive visual experiences.",
      collection: "Visual Technology",
      imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?w=400",
      gradientFrom: "#A855F7",
      gradientTo: "#EC4899",
    },
    {
      title: "Special Effects",
      description: "Elevate your event with spectacular special effects. From fog machines to pyrotechnics, we add that extra wow factor to make your celebration truly memorable.",
      collection: "Event Enhancement",
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400",
      gradientFrom: "#EC4899",
      gradientTo: "#F97316",
    },
    {
      title: "Stage Setup",
      description: "Professional stage design and setup for flawless performances. Complete with backdrops, platforms, and technical infrastructure for seamless event execution.",
      collection: "Event Production",
      imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400",
      gradientFrom: "#F97316",
      gradientTo: "#2A4CFF",
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
      {/* Glass morphism overlay effect */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 20% 50%, rgba(42, 76, 255, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)",
        pointerEvents: "none"
      }} />

      {/* Decorative Glowing Orbs */}
      <div style={{ position: "absolute", top: "-15%", left: "-10%", width: "500px", height: "500px", borderRadius: "50%", opacity: 0.4, background: "radial-gradient(circle, #2A4CFF 0%, transparent 70%)", filter: "blur(100px)" }} />
      <div style={{ position: "absolute", bottom: "-15%", right: "-10%", width: "500px", height: "500px", borderRadius: "50%", opacity: 0.3, background: "radial-gradient(circle, #5B6FE8 0%, transparent 70%)", filter: "blur(100px)" }} />

      {/* Main Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem", padding: "0 1rem" }}>
          {services.map((service, index) => (
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
                  borderRadius: "28px",
                  padding: "2px",
                  background: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`,
                  overflow: "visible",
                }}
              >
                {/* Inner Card with Coarse Texture */}
                <div 
                  style={{
                    position: "relative",
                    borderRadius: "26px",
                    padding: "2rem 1.75rem",
                    minHeight: "480px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    background: "linear-gradient(135deg, rgba(10, 14, 31, 0.96) 0%, rgba(26, 41, 66, 0.94) 50%, rgba(10, 14, 31, 0.96) 100%)",
                    backdropFilter: "blur(20px)",
                    overflow: "hidden",
                  }}
                >
                  {/* Heavy Coarse Grain Texture Overlay */}
                  <div 
                    style={{
                      position: "absolute",
                      inset: 0,
                      opacity: 0.25,
                      mixBlendMode: "overlay",
                      pointerEvents: "none",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      backgroundSize: "150px 150px",
                    }}
                  />

                  {/* Service Image Container with Glassmorphism */}
                  <div style={{ 
                    position: "relative", 
                    marginBottom: "1.5rem", 
                    zIndex: 10,
                    width: "200px",
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    {/* Glassmorphism Square Container */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        borderRadius: "24px",
                        background: "linear-gradient(135deg, rgba(42, 76, 255, 0.2) 0%, rgba(91, 111, 232, 0.15) 100%)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                      }}
                    >
                      {/* Coarse Texture on Glass Container */}
                      <div 
                        style={{
                          position: "absolute",
                          inset: 0,
                          opacity: 0.2,
                          mixBlendMode: "overlay",
                          pointerEvents: "none",
                          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain2)'/%3E%3C/svg%3E")`,
                          backgroundSize: "120px 120px",
                        }}
                      />

                      {/* Glow behind image */}
                      <div 
                        className="service-glow"
                        style={{
                          position: "absolute",
                          width: "150px",
                          height: "150px",
                          filter: "blur(50px)",
                          opacity: 0.6,
                          background: `radial-gradient(circle, ${service.gradientFrom}, transparent)`,
                          transition: "opacity 0.7s ease",
                        }}
                      />
                      
                      {/* Service Image */}
                      <img 
                        src={service.imageUrl}
                        alt={service.title}
                        className="service-img"
                        style={{
                          position: "relative",
                          width: "120px",
                          height: "120px",
                          objectFit: "cover",
                          borderRadius: "12px",
                          filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.6))",
                          transition: "transform 0.7s ease",
                          zIndex: 2,
                        }}
                      />
                    </div>
                  </div>

                  {/* Decorative Lines */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem", width: "100%", justifyContent: "center" }}>
                    <div style={{ height: "1px", width: "3.5rem", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.35), transparent)" }} />
                    <div style={{ height: "1px", width: "3.5rem", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.35), transparent)" }} />
                  </div>

                  {/* Title with Gradient */}
                  <h3 
                    className="card-title"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "300",
                      marginBottom: "1rem",
                      letterSpacing: "0.03em",
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
                    <div style={{ height: "1px", width: "3.5rem", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.35), transparent)" }} />
                    <div style={{ height: "1px", width: "3.5rem", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.35), transparent)" }} />
                  </div>

                  {/* Description */}
                  <p 
                    className="card-desc"
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(255, 255, 255, 0.65)",
                      lineHeight: "1.65",
                      fontWeight: "300",
                      marginBottom: "1.75rem",
                      transition: "color 0.7s ease",
                      maxWidth: "90%",
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
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        padding: "0.4rem 1.25rem",
                        fontSize: "0.65rem",
                        fontWeight: "300",
                        textTransform: "uppercase",
                        letterSpacing: "0.18em",
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
                .group:hover .service-glow {
                  opacity: 0.85;
                }
                .group:hover .service-img {
                  transform: scale(1.1) rotate(3deg);
                }
                .group:hover .card-title {
                  transform: scale(1.05);
                }
                .group:hover .card-desc {
                  color: rgba(255, 255, 255, 0.85);
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