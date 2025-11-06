import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, GitBranch, SearchCheck, Zap } from "lucide-react";

export default function About() {
  return (
    <div 
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 25%, #2d1b4e 50%, #1a1f3a 75%, #0a0e27 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "3rem 2rem",
      }}
    >
      {/* Main Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1400px", margin: "0 auto" }}>
        {/* Bento Grid with Absolute Positioning */}
        <div style={{ 
          position: "relative",
          width: "100%",
          height: "1000px",
        }}>
          
          {/* Top Left - Effortless Prompt Perfection */}
          <div 
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              width: "290px",
              height: "420px",
              background: "rgba(40, 45, 70, 0.7)",
              backdropFilter: "blur(20px)",
              borderRadius: "28px",
              padding: "2.5rem",
              border: "1px solid rgba(124, 58, 237, 0.15)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "visible",
              transition: "all 0.3s ease",
              zIndex: 3,
            }}
          >
            <div>
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
                boxShadow: "0 8px 24px rgba(124, 58, 237, 0.3)",
              }}>
                <Sparkles size={28} color="#fff" />
              </div>
              
              <h3 style={{
                fontSize: "2rem",
                fontWeight: "300",
                color: "#fff",
                marginBottom: "1rem",
                lineHeight: "1.15",
              }}>
                Effortless<br/>Prompt<br/>Perfection
              </h3>
            </div>

            <div>
              <p style={{
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.9)",
                marginBottom: "0.5rem",
                fontWeight: "500",
              }}>
                14 days trial
              </p>
              <p style={{
                fontSize: "0.875rem",
                color: "rgba(255, 255, 255, 0.5)",
              }}>
                after - $5/month
              </p>
            </div>
          </div>

          {/* Center - Main Hero Card with Glowing Orb */}
          <div 
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "550px",
              height: "750px",
              background: "linear-gradient(135deg, rgba(124, 58, 237, 0.95) 0%, rgba(168, 85, 247, 0.85) 100%)",
              borderRadius: "32px",
              padding: "3rem 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              textAlign: "center",
              overflow: "visible",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              zIndex: 10,
            }}
          >
            <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
              {/* PromptPal branding */}
              <div style={{ 
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
              }}>
                <Sparkles size={22} color="#fff" style={{ opacity: 0.9 }} />
                <span style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#fff",
                  letterSpacing: "0.05em",
                }}>
                  PromptPal
                </span>
              </div>

              <h1 style={{
                fontSize: "3.5rem",
                fontWeight: "400",
                color: "#fff",
                marginBottom: "2rem",
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
              }}>
                Your AI Prompt<br/>Companion
              </h1>

              {/* Glowing Cosmic Orb with Logo */}
              <div style={{
                width: "380px",
                height: "380px",
                margin: "0 auto",
                borderRadius: "50%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                {/* Outer glow rings */}
                <div style={{
                  position: "absolute",
                  inset: "-30px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
                  animation: "pulse 4s ease-in-out infinite",
                }} />
                
                <div style={{
                  position: "absolute",
                  inset: "-15px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 60%)",
                  animation: "pulse 3s ease-in-out infinite 0.5s",
                }} />

                {/* Main orb container */}
                <div style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.25) 0%, rgba(0, 0, 0, 0.5) 100%)",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 0 80px rgba(168, 85, 247, 0.7), inset 0 0 60px rgba(255, 255, 255, 0.15)",
                }}>
                  {/* Cosmic swirl effect */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "conic-gradient(from 0deg, transparent 0%, rgba(249, 115, 22, 0.4) 25%, rgba(168, 85, 247, 0.4) 50%, rgba(59, 130, 246, 0.4) 75%, transparent 100%)",
                    animation: "rotate 20s linear infinite",
                  }} />

                  {/* Binary code ring */}
                  <div style={{
                    position: "absolute",
                    inset: "15px",
                    borderRadius: "50%",
                  }}>
                    <svg width="100%" height="100%" viewBox="0 0 350 350" style={{ position: "absolute" }}>
                      <defs>
                        <path id="circlePath" d="M 175, 175 m -140, 0 a 140,140 0 1,1 280,0 a 140,140 0 1,1 -280,0" />
                      </defs>
                      <text fill="rgba(255, 255, 255, 0.35)" fontSize="11" fontFamily="monospace" letterSpacing="2.5">
                        <textPath href="#circlePath">
                          1001 1001010110 010 001 1001 1101 0110 1001 010 1101
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  {/* Logo in center */}
                  <img 
                    src="/gallery-images/logoo.png" 
                    alt="SoundLight Logo"
                    style={{
                      width: "180px",
                      height: "auto",
                      filter: "brightness(0) invert(1) drop-shadow(0 0 50px rgba(255, 255, 255, 0.9))",
                      position: "relative",
                      zIndex: 2,
                      animation: "float 6s ease-in-out infinite",
                    }}
                  />

                  {/* Inner sparkle particles */}
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        position: "absolute",
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "#fff",
                        top: `${15 + Math.random() * 70}%`,
                        left: `${15 + Math.random() * 70}%`,
                        opacity: 0.7,
                        animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>
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
                50% { transform: translateY(-12px); }
              }
              @keyframes twinkle {
                0%, 100% { opacity: 0.3; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.5); }
              }
            `}</style>
          </div>

          {/* Top Right - Sparkles Icon */}
          <div 
            style={{
              position: "absolute",
              right: "0",
              top: "0",
              width: "290px",
              height: "190px",
              background: "rgba(40, 45, 70, 0.7)",
              backdropFilter: "blur(20px)",
              borderRadius: "28px",
              padding: "2.5rem",
              border: "1px solid rgba(249, 115, 22, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "visible",
              transition: "all 0.3s ease",
              zIndex: 3,
            }}
          >
            <div style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #F97316, #FB923C)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 10px 30px rgba(249, 115, 22, 0.4)",
            }}>
              <Sparkles size={40} color="#fff" />
            </div>
          </div>

          {/* Middle Right - 25M Stats */}
          <div 
            style={{
              position: "absolute",
              right: "0",
              top: "210px",
              width: "290px",
              height: "300px",
              background: "rgba(40, 45, 70, 0.7)",
              backdropFilter: "blur(20px)",
              borderRadius: "28px",
              padding: "2.5rem",
              border: "1px solid rgba(168, 85, 247, 0.15)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              overflow: "visible",
              transition: "all 0.3s ease",
              zIndex: 3,
            }}
          >
            <h2 style={{
              fontSize: "6rem",
              fontWeight: "300",
              background: "linear-gradient(135deg, #A855F7, #EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1.5rem",
              lineHeight: "1",
            }}>
              25M
            </h2>
            
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}>
              <div style={{
                width: "40px",
                height: "2px",
                background: "linear-gradient(to right, transparent, rgba(168, 85, 247, 0.7))",
              }} />
              <p style={{
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.85)",
                fontWeight: "400",
              }}>
                created prompts
              </p>
              <div style={{
                width: "40px",
                height: "2px",
                background: "linear-gradient(to left, transparent, rgba(168, 85, 247, 0.7))",
              }} />
            </div>
          </div>

          {/* Bottom Left - 12K Happy Users */}
          <div 
            style={{
              position: "absolute",
              left: "0",
              top: "440px",
              width: "290px",
              height: "270px",
              background: "rgba(40, 45, 70, 0.7)",
              backdropFilter: "blur(20px)",
              borderRadius: "28px",
              padding: "2.5rem",
              border: "1px solid rgba(249, 115, 22, 0.15)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "visible",
              transition: "all 0.3s ease",
              zIndex: 3,
            }}
          >
            <div>
              <h2 style={{
                fontSize: "4rem",
                fontWeight: "300",
                background: "linear-gradient(135deg, #F97316, #FB923C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "0.75rem",
                lineHeight: "1",
              }}>
                12K
              </h2>
              <p style={{
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.85)",
                marginBottom: "2rem",
                fontWeight: "400",
              }}>
                happy users
              </p>

              <div style={{ display: "flex", gap: "0.5rem" }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #F97316, #FB923C)",
                  border: "3px solid rgba(40, 45, 70, 0.9)",
                  boxShadow: "0 4px 12px rgba(249, 115, 22, 0.3)",
                }} />
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #EC4899, #F472B6)",
                  border: "3px solid rgba(40, 45, 70, 0.9)",
                  marginLeft: "-18px",
                  boxShadow: "0 4px 12px rgba(236, 72, 153, 0.3)",
                }} />
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  border: "3px solid rgba(40, 45, 70, 0.9)",
                  marginLeft: "-18px",
                  boxShadow: "0 4px 12px rgba(124, 58, 237, 0.3)",
                }} />
              </div>
            </div>
          </div>

          {/* Left Bottom - Branching Paths (BEHIND orb) */}
          <div 
            style={{
              position: "absolute",
              left: "310px",
              top: "630px",
              width: "270px",
              height: "230px",
              background: "rgba(40, 45, 70, 0.7)",
              backdropFilter: "blur(20px)",
              borderRadius: "28px",
              padding: "2.5rem",
              border: "1px solid rgba(249, 115, 22, 0.15)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "visible",
              transition: "all 0.3s ease",
              zIndex: 1,
            }}
          >
            <div style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #F97316, #FB923C)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px rgba(249, 115, 22, 0.3)",
            }}>
              <GitBranch size={32} color="#fff" />
            </div>

            <div>
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "400",
                color: "#fff",
                marginBottom: "0.75rem",
              }}>
                Branching paths
              </h3>
              <p style={{
                fontSize: "0.95rem",
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: "1.5",
              }}>
                Explore multiple prompt directions with branching.
              </p>
            </div>
          </div>

          {/* Right Bottom - Keyword Enhancer (BEHIND orb) */}
          <div 
            style={{
              position: "absolute",
              right: "310px",
              top: "630px",
              width: "270px",
              height: "230px",
              background: "rgba(40, 45, 70, 0.7)",
              backdropFilter: "blur(20px)",
              borderRadius: "28px",
              padding: "2.5rem",
              border: "1px solid rgba(124, 58, 237, 0.15)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "visible",
              transition: "all 0.3s ease",
              zIndex: 1,
            }}
          >
            <div style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px rgba(124, 58, 237, 0.3)",
            }}>
              <SearchCheck size={32} color="#fff" />
            </div>

            <div>
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "400",
                color: "#fff",
                marginBottom: "0.75rem",
              }}>
                Keyword enhancer
              </h3>
              <p style={{
                fontSize: "0.95rem",
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: "1.5",
              }}>
                Boost your prompt precision with keywords.
              </p>
            </div>
          </div>

          {/* Bottom Right - Prompt Templates */}
          <div 
            style={{
              position: "absolute",
              right: "0",
              bottom: "0",
              width: "290px",
              height: "360px",
              background: "rgba(40, 45, 70, 0.7)",
              backdropFilter: "blur(20px)",
              borderRadius: "28px",
              padding: "2.5rem",
              border: "1px solid rgba(168, 85, 247, 0.15)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "visible",
              transition: "all 0.3s ease",
              zIndex: 3,
            }}
          >
            <div>
              <h3 style={{
                fontSize: "1.35rem",
                fontWeight: "400",
                color: "#fff",
                marginBottom: "0.75rem",
              }}>
                Prompt templates
              </h3>
              <p style={{
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: "1.6",
                marginBottom: "1.5rem",
              }}>
                Use pre-made templates to jumpstart creativity.
              </p>

              <Badge 
                style={{
                  background: "linear-gradient(135deg, #F97316, #FB923C)",
                  color: "#fff",
                  padding: "0.6rem 1.25rem",
                  fontSize: "0.75rem",
                  fontWeight: "500",
                  border: "none",
                  borderRadius: "20px",
                  boxShadow: "0 4px 12px rgba(249, 115, 22, 0.3)",
                }}
              >
                14 days trial
              </Badge>
            </div>

            <div style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
            }}>
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                boxShadow: "0 4px 12px rgba(124, 58, 237, 0.3)",
              }}>
                <Zap size={24} />
              </div>
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #F97316, #FB923C)",
                boxShadow: "0 4px 12px rgba(249, 115, 22, 0.3)",
              }} />
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #EC4899, #F472B6)",
                boxShadow: "0 4px 12px rgba(236, 72, 153, 0.3)",
              }} />
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #3B82F6, #60A5FA)",
                boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
              }} />
            </div>
          </div>

          {/* Bottom Left - Generate Button */}
          <div 
            style={{
              position: "absolute",
              left: "0",
              bottom: "0",
              width: "290px",
              height: "230px",
              background: "rgba(40, 45, 70, 0.7)",
              backdropFilter: "blur(20px)",
              borderRadius: "28px",
              padding: "2.5rem",
              border: "1px solid rgba(124, 58, 237, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "visible",
              transition: "all 0.3s ease",
              zIndex: 3,
            }}
          >
            <Button
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                color: "#fff",
                padding: "1.75rem 4rem",
                fontSize: "1.15rem",
                fontWeight: "500",
                border: "none",
                borderRadius: "40px",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(124, 58, 237, 0.4)",
                transition: "all 0.3s ease",
              }}
            >
              <Sparkles size={24} />
              Generate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}