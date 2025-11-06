import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Music, Lightbulb, Zap, Users } from "lucide-react";

export default function About() {
  return (
    <div 
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #000000 0%, #0a0e1f 50%, #000000 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "2rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Main Content Container */}
      <div style={{ 
        position: "relative", 
        width: "100%", 
        maxWidth: "1200px",
        height: "700px",
      }}>
        
        {/* Top Left - Our Mission */}
        <div 
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            width: "145px",
            height: "260px",
            background: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(20px)",
            borderRadius: "20px",
            padding: "1.5rem",
            border: "1px solid rgba(42, 76, 255, 0.3)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 5,
          }}
        >
          <div>
            <div style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: "#2A4CFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
            }}>
              <Zap size={20} color="#fff" />
            </div>
            
            <h3 style={{
              fontSize: "1.1rem",
              fontWeight: "400",
              color: "#fff",
              lineHeight: "1.2",
              marginBottom: "0.5rem",
            }}>
              Precision<br/>Passion<br/>Excellence
            </h3>
          </div>

          <div>
            <p style={{
              fontSize: "0.75rem",
              color: "rgba(255, 255, 255, 0.9)",
              marginBottom: "0.25rem",
            }}>
              Every Event
            </p>
            <p style={{
              fontSize: "0.65rem",
              color: "rgba(255, 255, 255, 0.5)",
            }}>
              Flawlessly Executed
            </p>
          </div>
        </div>

        {/* Center - Main Card with Logo */}
        <div 
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "445px",
            height: "520px",
            background: "#2A4CFF",
            borderRadius: "28px",
            padding: "2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            overflow: "visible",
            zIndex: 10,
            boxShadow: "0 20px 60px rgba(42, 76, 255, 0.4)",
          }}
        >
          {/* Sound Light branding */}
          <div style={{ 
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}>
            <Music size={16} color="#fff" />
            <span style={{
              fontSize: "0.85rem",
              fontWeight: "600",
              color: "#fff",
              letterSpacing: "0.05em",
            }}>
              Sound Light
            </span>
          </div>

          <h1 style={{
            fontSize: "2.5rem",
            fontWeight: "400",
            color: "#fff",
            marginBottom: "1.5rem",
            lineHeight: "1.1",
          }}>
            Where Sound<br/>Meets Light
          </h1>

          {/* Glowing Cosmic Orb */}
          <div style={{
            width: "280px",
            height: "280px",
            margin: "0 auto",
            borderRadius: "50%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            {/* Outer glow */}
            <div style={{
              position: "absolute",
              inset: "-20px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)",
              animation: "pulse 4s ease-in-out infinite",
            }} />

            {/* Main orb */}
            <div style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 0 60px rgba(42, 76, 255, 0.8), inset 0 0 40px rgba(255, 255, 255, 0.2)",
            }}>
              {/* Cosmic swirl */}
              <div style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: "conic-gradient(from 0deg, transparent 0%, rgba(42, 76, 255, 0.5) 25%, rgba(42, 76, 255, 0.5) 50%, rgba(42, 76, 255, 0.5) 75%, transparent 100%)",
                animation: "rotate 20s linear infinite",
              }} />

              {/* Binary code ring */}
              <svg width="100%" height="100%" viewBox="0 0 280 280" style={{ position: "absolute" }}>
                <defs>
                  <path id="circlePath" d="M 140, 140 m -110, 0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0" />
                </defs>
                <text fill="rgba(255, 255, 255, 0.4)" fontSize="9" fontFamily="monospace" letterSpacing="2">
                  <textPath href="#circlePath">
                    1001 1001010110 010 001 1001 1101 0110 1001
                  </textPath>
                </text>
              </svg>

              {/* Logo */}
              <img 
                src="/gallery-images/logoo.png" 
                alt="Sound Light Logo"
                style={{
                  width: "140px",
                  height: "auto",
                  filter: "brightness(0) invert(1) drop-shadow(0 0 30px rgba(255, 255, 255, 0.9))",
                  position: "relative",
                  zIndex: 2,
                  animation: "float 6s ease-in-out infinite",
                }}
              />

              {/* Sparkles */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    width: "3px",
                    height: "3px",
                    borderRadius: "50%",
                    background: "#fff",
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                    opacity: 0.7,
                    animation: `twinkle ${2 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>

          <style>{`
            @keyframes pulse {
              0%, 100% { opacity: 0.6; transform: scale(1); }
              50% { opacity: 1; transform: scale(1.05); }
            }
            @keyframes rotate {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }
            @keyframes twinkle {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 1; }
            }
          `}</style>
        </div>

        {/* Top Right - Music Icon */}
        <div 
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            width: "145px",
            height: "130px",
            background: "rgba(35, 40, 65, 0.8)",
            backdropFilter: "blur(20px)",
            borderRadius: "20px",
            padding: "1.5rem",
            border: "1px solid rgba(80, 80, 120, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 5,
          }}
        >
          <div style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #2A4CFF, #5B6FE8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Music size={32} color="#fff" />
          </div>
        </div>

        {/* Right - Events Stats */}
        <div 
          style={{
            position: "absolute",
            right: "0",
            top: "150px",
            width: "145px",
            height: "200px",
            background: "rgba(35, 40, 65, 0.8)",
            backdropFilter: "blur(20px)",
            borderRadius: "20px",
            padding: "1.5rem",
            border: "1px solid rgba(80, 80, 120, 0.3)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 5,
          }}
        >
          <h2 style={{
            fontSize: "4rem",
            fontWeight: "300",
            background: "linear-gradient(135deg, #2A4CFF, #5B6FE8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "0.5rem",
            lineHeight: "1",
          }}>
            500+
          </h2>
          
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}>
            <div style={{
              width: "20px",
              height: "1px",
              background: "linear-gradient(to right, transparent, rgba(42, 76, 255, 0.7))",
            }} />
            <p style={{
              fontSize: "0.7rem",
              color: "rgba(255, 255, 255, 0.8)",
            }}>
              events powered
            </p>
            <div style={{
              width: "20px",
              height: "1px",
              background: "linear-gradient(to left, transparent, rgba(42, 76, 255, 0.7))",
            }} />
          </div>
        </div>

        {/* Left - Happy Clients */}
        <div 
          style={{
            position: "absolute",
            left: "0",
            top: "280px",
            width: "145px",
            height: "180px",
            background: "rgba(35, 40, 65, 0.8)",
            backdropFilter: "blur(20px)",
            borderRadius: "20px",
            padding: "1.5rem",
            border: "1px solid rgba(80, 80, 120, 0.3)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 5,
          }}
        >
          <div>
            <h2 style={{
              fontSize: "2.5rem",
              fontWeight: "300",
              background: "linear-gradient(135deg, #2A4CFF, #5B6FE8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "0.5rem",
              lineHeight: "1",
            }}>
              200+
            </h2>
            <p style={{
              fontSize: "0.75rem",
              color: "rgba(255, 255, 255, 0.8)",
              marginBottom: "1rem",
            }}>
              happy clients
            </p>

            <div style={{ display: "flex", gap: "0.25rem" }}>
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #2A4CFF, #5B6FE8)",
                border: "2px solid rgba(35, 40, 65, 0.9)",
              }} />
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #5B6FE8, #7C3AED)",
                border: "2px solid rgba(35, 40, 65, 0.9)",
                marginLeft: "-12px",
              }} />
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                border: "2px solid rgba(35, 40, 65, 0.9)",
                marginLeft: "-12px",
              }} />
            </div>
          </div>
        </div>

        {/* Bottom Left - Professional DJs */}
        <div 
          style={{
            position: "absolute",
            left: "165px",
            bottom: "80px",
            width: "190px",
            height: "160px",
            background: "rgba(35, 40, 65, 0.8)",
            backdropFilter: "blur(20px)",
            borderRadius: "20px",
            padding: "1.5rem",
            border: "1px solid rgba(80, 80, 120, 0.3)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 1,
          }}
        >
          <div style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #2A4CFF, #5B6FE8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Music size={24} color="#fff" />
          </div>

          <div>
            <h3 style={{
              fontSize: "0.95rem",
              fontWeight: "400",
              color: "#fff",
              marginBottom: "0.5rem",
            }}>
              Professional DJs
            </h3>
            <p style={{
              fontSize: "0.7rem",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: "1.4",
            }}>
              Top-tier talent for unforgettable experiences
            </p>
          </div>
        </div>

        {/* Bottom Right - Lighting Design */}
        <div 
          style={{
            position: "absolute",
            right: "165px",
            bottom: "80px",
            width: "190px",
            height: "160px",
            background: "rgba(35, 40, 65, 0.8)",
            backdropFilter: "blur(20px)",
            borderRadius: "20px",
            padding: "1.5rem",
            border: "1px solid rgba(80, 80, 120, 0.3)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 1,
          }}
        >
          <div style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #2A4CFF, #5B6FE8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Lightbulb size={24} color="#fff" />
          </div>

          <div>
            <h3 style={{
              fontSize: "0.95rem",
              fontWeight: "400",
              color: "#fff",
              marginBottom: "0.5rem",
            }}>
              Lighting Design
            </h3>
            <p style={{
              fontSize: "0.7rem",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: "1.4",
            }}>
              Stunning visuals that transform spaces
            </p>
          </div>
        </div>

        {/* Bottom Right - Event Types */}
        <div 
          style={{
            position: "absolute",
            right: "0",
            bottom: "0",
            width: "145px",
            height: "240px",
            background: "rgba(35, 40, 65, 0.8)",
            backdropFilter: "blur(20px)",
            borderRadius: "20px",
            padding: "1.5rem",
            border: "1px solid rgba(80, 80, 120, 0.3)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 5,
          }}
        >
          <div>
            <h3 style={{
              fontSize: "0.9rem",
              fontWeight: "400",
              color: "#fff",
              marginBottom: "0.5rem",
            }}>
              Event Types
            </h3>
            <p style={{
              fontSize: "0.65rem",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: "1.4",
              marginBottom: "1rem",
            }}>
              Corporate, Private & Social Events
            </p>

            <Badge 
              style={{
                background: "linear-gradient(135deg, #2A4CFF, #5B6FE8)",
                color: "#fff",
                padding: "0.4rem 0.8rem",
                fontSize: "0.6rem",
                fontWeight: "500",
                border: "none",
                borderRadius: "12px",
              }}
            >
              Zimbabwe Based
            </Badge>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.5rem",
          }}>
            <div style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #2A4CFF, #5B6FE8)",
            }} />
            <div style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #5B6FE8, #7C3AED)",
            }} />
            <div style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
            }} />
            <div style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3B82F6, #60A5FA)",
            }} />
          </div>
        </div>

        {/* Bottom Left - Contact Button */}
        <div 
          style={{
            position: "absolute",
            left: "0",
            bottom: "0",
            width: "145px",
            height: "140px",
            background: "rgba(35, 40, 65, 0.8)",
            backdropFilter: "blur(20px)",
            borderRadius: "20px",
            padding: "1.5rem",
            border: "1px solid rgba(80, 80, 120, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 5,
          }}
        >
          <Button
            style={{
              background: "linear-gradient(135deg, #2A4CFF, #5B6FE8)",
              color: "#fff",
              padding: "1rem 2rem",
              fontSize: "0.85rem",
              fontWeight: "500",
              border: "none",
              borderRadius: "24px",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(42, 76, 255, 0.4)",
            }}
          >
            <Users size={16} />
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}