import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Music, Lightbulb, Zap, Users, Award, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <div 
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #000000 0%, #0a0e1f 50%, #000000 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Decorative Glowing Orbs */}
      <div style={{ 
        position: "absolute", 
        top: "-10%", 
        left: "-5%", 
        width: "500px", 
        height: "500px", 
        borderRadius: "50%", 
        opacity: 0.15, 
        background: "radial-gradient(circle, #2A4CFF 0%, transparent 70%)", 
        filter: "blur(100px)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div style={{ 
        position: "absolute", 
        bottom: "-15%", 
        right: "-8%", 
        width: "500px", 
        height: "500px", 
        borderRadius: "50%", 
        opacity: 0.15, 
        background: "radial-gradient(circle, #2A4CFF 0%, transparent 70%)", 
        filter: "blur(100px)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      {/* Main Content Container */}
      <div style={{ 
        position: "relative", 
        width: "100%", 
        maxWidth: "1200px",
        zIndex: 1
      }}>
        
        {/* Header Section */}
        <div style={{
          textAlign: "center",
          marginBottom: "4rem"
        }}>
          <h1 style={{
            fontSize: "clamp(2.5rem, 8vw, 4rem)",
            fontWeight: "400",
            color: "#fff",
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
          }}>
            About <span style={{ color: "#2A4CFF" }}>Sound Light</span>
          </h1>
          <p style={{
            fontSize: "clamp(1rem, 3vw, 1.25rem)",
            color: "rgba(255, 255, 255, 0.7)",
            maxWidth: "700px",
            margin: "0 auto",
          }}>
            Transforming events with cutting-edge audio-visual excellence
          </p>
        </div>

        {/* Main Content Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          marginBottom: "3rem"
        }}>
          
          {/* Mission Card */}
          <div style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "24px",
            padding: "2.5rem",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.borderColor = "rgba(42, 76, 255, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
          }}>
            <div style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "rgba(42, 76, 255, 0.2)",
              border: "1px solid rgba(42, 76, 255, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem",
            }}>
              <Target size={32} color="#2A4CFF" strokeWidth={2} />
            </div>
            
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#fff",
              marginBottom: "1rem",
            }}>
              Our Mission
            </h3>
            
            <p style={{
              fontSize: "1rem",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: "1.6",
            }}>
              To deliver world-class sound and lighting solutions that elevate every event into an unforgettable experience.
            </p>
          </div>

          {/* Vision Card */}
          <div style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "24px",
            padding: "2.5rem",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.borderColor = "rgba(42, 76, 255, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
          }}>
            <div style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "rgba(42, 76, 255, 0.2)",
              border: "1px solid rgba(42, 76, 255, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem",
            }}>
              <Lightbulb size={32} color="#2A4CFF" strokeWidth={2} />
            </div>
            
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#fff",
              marginBottom: "1rem",
            }}>
              Our Vision
            </h3>
            
            <p style={{
              fontSize: "1rem",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: "1.6",
            }}>
              To be Zimbabwe's leading provider of premium audio-visual services, setting the standard for excellence in event production.
            </p>
          </div>

          {/* Values Card */}
          <div style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "24px",
            padding: "2.5rem",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.borderColor = "rgba(42, 76, 255, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
          }}>
            <div style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "rgba(42, 76, 255, 0.2)",
              border: "1px solid rgba(42, 76, 255, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem",
            }}>
              <Heart size={32} color="#2A4CFF" strokeWidth={2} />
            </div>
            
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#fff",
              marginBottom: "1rem",
            }}>
              Our Values
            </h3>
            
            <p style={{
              fontSize: "1rem",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: "1.6",
            }}>
              Excellence, innovation, and customer satisfaction drive everything we do. We're passionate about creating magic.
            </p>
          </div>
        </div>

        {/* Feature Highlights */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          marginBottom: "3rem"
        }}>
          
          {[
            { icon: Music, title: "Premium Equipment", desc: "State-of-the-art sound and lighting gear" },
            { icon: Users, title: "Expert Team", desc: "Skilled professionals with years of experience" },
            { icon: Award, title: "Proven Track Record", desc: "Hundreds of successful events delivered" },
            { icon: Zap, title: "Quick Setup", desc: "Efficient installation and breakdown" }
          ].map((item, index) => (
            <div key={index} style={{
              background: "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "20px",
              padding: "2rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.borderColor = "rgba(42, 76, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
            }}>
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "rgba(42, 76, 255, 0.15)",
                border: "1px solid rgba(42, 76, 255, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}>
                <item.icon size={28} color="#2A4CFF" strokeWidth={2} />
              </div>
              
              <h4 style={{
                fontSize: "1.1rem",
                fontWeight: "600",
                color: "#fff",
                marginBottom: "0.5rem",
              }}>
                {item.title}
              </h4>
              
              <p style={{
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.6)",
                lineHeight: "1.5",
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Company Info Section */}
        <div style={{
          background: "rgba(42, 76, 255, 0.1)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "24px",
          padding: "clamp(2rem, 5vw, 3rem)",
          border: "1px solid rgba(42, 76, 255, 0.3)",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            fontWeight: "600",
            color: "#fff",
            marginBottom: "1.5rem",
          }}>
            Why Choose Sound Light?
          </h2>
          
          <p style={{
            fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
            color: "rgba(255, 255, 255, 0.8)",
            lineHeight: "1.8",
            maxWidth: "800px",
            margin: "0 auto 2rem",
          }}>
            We combine cutting-edge technology with creative expertise to transform your vision into reality. 
            From intimate gatherings to large-scale productions, our team ensures every detail is perfect. 
            With premium equipment, professional service, and a passion for excellence, we make your events shine.
          </p>

          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            flexWrap: "wrap",
            marginTop: "2rem"
          }}>
            <div>
              <div style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: "700",
                color: "#2A4CFF",
                marginBottom: "0.5rem"
              }}>500+</div>
              <div style={{
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.7)"
              }}>Events Completed</div>
            </div>
            
            <div>
              <div style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: "700",
                color: "#2A4CFF",
                marginBottom: "0.5rem"
              }}>10+</div>
              <div style={{
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.7)"
              }}>Years Experience</div>
            </div>
            
            <div>
              <div style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: "700",
                color: "#2A4CFF",
                marginBottom: "0.5rem"
              }}>100%</div>
              <div style={{
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.7)"
              }}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}