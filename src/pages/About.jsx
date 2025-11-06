import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, GitBranch, SearchCheck, Zap, Eye, Target, Layers } from "lucide-react";

export default function About() {
  return (
    <div 
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 25%, #2d1b4e 50%, #1a1f3a 75%, #0a0e27 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "4rem 2rem",
      }}
    >
      {/* Animated gradient overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 30% 40%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
        pointerEvents: "none",
        animation: "pulse 8s ease-in-out infinite",
      }} />

      {/* Main Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1400px", margin: "0 auto" }}>
        {/* Bento Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(8, minmax(100px, auto))",
          gap: "1rem",
        }}>
          
          {/* Top Left - Effortless Prompt Perfection */}
          <div 
            style={{
              gridColumn: "1 / 4",
              gridRow: "1 / 3",
              background: "rgba(30, 35, 60, 0.6)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2rem",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.2)";
            }}
          >
            {/* Subtle glow effect */}
            <div style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background: "radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
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
                fontSize: "1.75rem",
                fontWeight: "300",
                color: "#fff",
                marginBottom: "1rem",
                lineHeight: "1.2",
              }}>
                Effortless<br/>Prompt<br/>Perfection
              </h3>
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{
                fontSize: "0.95rem",
                color: "rgba(255, 255, 255, 0.8)",
                marginBottom: "0.5rem",
                fontWeight: "500",
              }}>
                14 days trial
              </p>
              <p style={{
                fontSize: "0.8rem",
                color: "rgba(255, 255, 255, 0.5)",
              }}>
                after - $5/month
              </p>
            </div>
          </div>

          {/* Center - Main Hero Card with Glowing Orb */}
          <div 
            style={{
              gridColumn: "4 / 10",
              gridRow: "1 / 6",
              background: "linear-gradient(135deg, rgba(124, 58, 237, 0.9) 0%, rgba(168, 85, 247, 0.8) 100%)",
              borderRadius: "32px",
              padding: "3rem 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Animated background pattern */}
            <div style={{
              position: "absolute",
              inset: 0,
              opacity: 0.05,
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
              {/* PromptPal branding */}
              <div style={{ 
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
              }}>
                <Sparkles size={24} color="#fff" style={{ opacity: 0.9 }} />
                <span style={{
                  fontSize: "1.1rem",
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
                width: "320px",
                height: "320px",
                margin: "2rem auto",
                borderRadius: "50%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                {/* Outer glow rings */}
                <div style={{
                  position: "absolute",
                  inset: "-20px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
                  animation: "pulse 4s ease-in-out infinite",
                }} />
                
                <div style={{
                  position: "absolute",
                  inset: "-10px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 60%)",
                  animation: "pulse 3s ease-in-out infinite 0.5s",
                }} />

                {/* Main orb container */}
                <div style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%)",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 0 60px rgba(168, 85, 247, 0.6), inset 0 0 40px rgba(255, 255, 255, 0.1)",
                }}>
                  {/* Cosmic swirl effect */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "conic-gradient(from 0deg, transparent 0%, rgba(249, 115, 22, 0.3) 25%, rgba(168, 85, 247, 0.3) 50%, rgba(59, 130, 246, 0.3) 75%, transparent 100%)",
                    animation: "rotate 20s linear infinite",
                  }} />

                  {/* Binary code ring */}
                  <div style={{
                    position: "absolute",
                    inset: "10px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <svg width="100%" height="100%" viewBox="0 0 300 300" style={{ position: "absolute" }}>
                      <defs>
                        <path id="circlePath" d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0" />
                      </defs>
                      <text fill="rgba(255, 255, 255, 0.3)" fontSize="10" fontFamily="monospace" letterSpacing="2">
                        <textPath href="#circlePath">
                          1001 1001010110 010 001 1001 1101 0110 1001 010 1101 0110 1001
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  {/* Logo in center */}
                  <img 
                    src="/gallery-images/logoo.png" 
                    alt="SoundLight Logo"
                    style={{
                      width: "160px",
                      height: "auto",
                      filter: "brightness(0) invert(1) drop-shadow(0 0 40px rgba(255, 255, 255, 0.8))",
                      position: "relative",
                      zIndex: 2,
                      animation: "float 6s ease-in-out infinite",
                    }}
                  />

                  {/* Inner sparkle particles */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        position: "absolute",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "#fff",
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`,
                        opacity: 0.6,
                        animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Add keyframe animations */}
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
                50% { transform: translateY(-10px); }
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
              gridColumn: "10 / 13",
              gridRow: "1 / 2",
              background: "rgba(30, 35, 60, 0.6)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2rem",
              border: "1px solid rgba(249, 115, 22, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = "rgba(249, 115, 22, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(249, 115, 22, 0.2)";
            }}
          >
            <div style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at center, rgba(249, 115, 22, 0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            
            <div style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #F97316, #FB923C)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
              boxShadow: "0 8px 24px rgba(249, 115, 22, 0.4)",
            }}>
              <Sparkles size={36} color="#fff" />
            </div>
          </div>

          {/* Middle Right - 25M Stats */}
          <div 
            style={{
              gridColumn: "10 / 13",
              gridRow: "2 / 5",
              background: "rgba(30, 35, 60, 0.6)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2rem",
              border: "1px solid rgba(168, 85, 247, 0.2)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.2)";
            }}
          >
            <div style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at center, rgba(168, 85, 247, 0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <h2 style={{
              fontSize: "5rem",
              fontWeight: "300",
              background: "linear-gradient(135deg, #A855F7, #EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1rem",
              position: "relative",
              zIndex: 1,
              lineHeight: "1",
            }}>
              25M
            </h2>
            
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              position: "relative",
              zIndex: 1,
            }}>
              <div style={{
                width: "32px",
                height: "2px",
                background: "linear-gradient(to right, transparent, rgba(168, 85, 247, 0.6))",
              }} />
              <p style={{
                fontSize: "0.95rem",
                color: "rgba(255, 255, 255, 0.8)",
                fontWeight: "400",
              }}>
                created prompts
              </p>
              <div style={{
                width: "32px",
                height: "2px",
                background: "linear-gradient(to left, transparent, rgba(168, 85, 247, 0.6))",
              }} />
            </div>
          </div>

          {/* Bottom Left - 12K Happy Users */}
          <div 
            style={{
              gridColumn: "1 / 4",
              gridRow: "3 / 6",
              background: "rgba(30, 35, 60, 0.6)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2rem",
              border: "1px solid rgba(249, 115, 22, 0.2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = "rgba(249, 115, 22, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(249, 115, 22, 0.2)";
            }}
          >
            <div style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at bottom left, rgba(249, 115, 22, 0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{
                fontSize: "3.5rem",
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
                fontSize: "0.95rem",
                color: "rgba(255, 255, 255, 0.8)",
                marginBottom: "2rem",
                fontWeight: "400",
              }}>
                happy users
              </p>

              <div style={{ display: "flex", gap: "0.5rem" }}>
                <div style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #F97316, #FB923C)",
                  border: "3px solid rgba(30, 35, 60, 0.8)",
                  boxShadow: "0 4px 12px rgba(249, 115, 22, 0.3)",
                }} />
                <div style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #EC4899, #F472B6)",
                  border: "3px solid rgba(30, 35, 60, 0.8)",
                  marginLeft: "-16px",
                  boxShadow: "0 4px 12px rgba(236, 72, 153, 0.3)",
                }} />
                <div style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  border: "3px solid rgba(30, 35, 60, 0.8)",
                  marginLeft: "-16px",
                  boxShadow: "0 4px 12px rgba(124, 58, 237, 0.3)",
                }} />
              </div>
            </div>
          </div>

          {/* Center Bottom Left - Branching Paths */}
          <div 
            style={{
              gridColumn: "4 / 7",
              gridRow: "6 / 8",
              background: "rgba(30, 35, 60, 0.6)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2rem",
              border: "1px solid rgba(249, 115, 22, 0.2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = "rgba(249, 115, 22, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(249, 115, 22, 0.2)";
            }}
          >
            <div style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at top left, rgba(249, 115, 22, 0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <div style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #F97316, #FB923C)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
              boxShadow: "0 8px 24px rgba(249, 115, 22, 0.3)",
            }}>
              <GitBranch size={32} color="#fff" />
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "400",
                color: "#fff",
                marginBottom: "0.75rem",
              }}>
                Branching paths
              </h3>
              <p style={{
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: "1.6",
              }}>
                Explore multiple prompt directions with branching.
              </p>
            </div>
          </div>

          {/* Center Bottom Right - Keyword Enhancer */}
          <div 
            style={{
              gridColumn: "7 / 10",
              gridRow: "6 / 8",
              background: "rgba(30, 35, 60, 0.6)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2rem",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.2)";
            }}
          >
            <div style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at top right, rgba(124, 58, 237, 0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <div style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
              boxShadow: "0 8px 24px rgba(124, 58, 237, 0.3)",
            }}>
              <SearchCheck size={32} color="#fff" />
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "400",
                color: "#fff",
                marginBottom: "0.75rem",
              }}>
                Keyword enhancer
              </h3>
              <p style={{
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: "1.6",
              }}>
                Boost your prompt precision with keywords.
              </p>
            </div>
          </div>

          {/* Bottom Right - Prompt Templates */}
          <div 
            style={{
              gridColumn: "10 / 13",
              gridRow: "5 / 8",
              background: "rgba(30, 35, 60, 0.6)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2rem",
              border: "1px solid rgba(168, 85, 247, 0.2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.2)";
            }}
          >
            <div style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{
                fontSize: "1.35rem",
                fontWeight: "400",
                color: "#fff",
                marginBottom: "0.75rem",
              }}>
                Prompt templates
              </h3>
              <p style={{
                fontSize: "0.85rem",
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
              position: "relative",
              zIndex: 1,
            }}>
              {[
                { icon: <Zap size={18} />, bg: "linear-gradient(135deg, #7C3AED, #A855F7)" },
                { icon: <Eye size={18} />, bg: "linear-gradient(135deg, #F97316, #FB923C)" },
                { icon: <Target size={18} />, bg: "linear-gradient(135deg, #EC4899, #F472B6)" },
                { icon: <Layers size={18} />, bg: "linear-gradient(135deg, #3B82F6, #60A5FA)" },
              ].map((item, i) => (
                <div 
                  key={i}
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: item.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom - Generate Button */}
          <div 
            style={{
              gridColumn: "1 / 4",
              gridRow: "6 / 8",
              background: "rgba(30, 35, 60, 0.6)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2rem",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.2)";
            }}
          >
            <div style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at center, rgba(124, 58, 237, 0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <Button
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                color: "#fff",
                padding: "1.5rem 3.5rem",
                fontSize: "1.1rem",
                fontWeight: "500",
                border: "none",
                borderRadius: "32px",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                cursor: "pointer",
                position: "relative",
                zIndex: 1,
                boxShadow: "0 8px 24px rgba(124, 58, 237, 0.4)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(124, 58, 237, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(124, 58, 237, 0.4)";
              }}
            >
              <Sparkles size={22} />
              Generate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}