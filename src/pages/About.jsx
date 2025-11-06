import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, GitBranch, SearchCheck, Zap } from "lucide-react";

export default function About() {
  return (
    <div 
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #000000 0%, #0a1628 25%, #1a2942 50%, #0a1628 75%, #000000 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "4rem 1.5rem",
      }}
    >
      {/* Glass morphism overlay effect */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)",
        pointerEvents: "none"
      }} />

      {/* Main Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1400px", margin: "0 auto" }}>
        {/* Bento Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(6, minmax(120px, auto))",
          gap: "1.5rem",
        }}>
          
          {/* Top Left - Effortless Prompt Perfection */}
          <div 
            style={{
              gridColumn: "1 / 4",
              gridRow: "1 / 3",
              background: "linear-gradient(135deg, rgba(40, 45, 70, 0.95) 0%, rgba(50, 55, 85, 0.92) 100%)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Grain texture */}
            <div style={{
              position: "absolute",
              inset: 0,
              opacity: 0.15,
              mixBlendMode: "overlay",
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n1'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n1)'/%3E%3C/svg%3E")`,
            }} />
            
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
              }}>
                <Sparkles size={24} color="#fff" />
              </div>
              
              <h3 style={{
                fontSize: "1.75rem",
                fontWeight: "300",
                color: "#fff",
                marginBottom: "1rem",
                lineHeight: "1.2",
              }}>
                Effortless Prompt Perfection
              </h3>
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{
                fontSize: "0.875rem",
                color: "rgba(255, 255, 255, 0.7)",
                marginBottom: "0.5rem",
              }}>
                14 days trial
              </p>
              <p style={{
                fontSize: "0.75rem",
                color: "rgba(255, 255, 255, 0.5)",
              }}>
                after - $5/month
              </p>
            </div>
          </div>

          {/* Center Top - Main Hero Card */}
          <div 
            style={{
              gridColumn: "4 / 10",
              gridRow: "1 / 4",
              background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",
              borderRadius: "28px",
              padding: "3rem 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Grain texture */}
            <div style={{
              position: "absolute",
              inset: 0,
              opacity: 0.1,
              mixBlendMode: "overlay",
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n2)'/%3E%3C/svg%3E")`,
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <img 
                  src="/gallery-images/logoo.png" 
                  alt="SoundLight Mediatainment"
                  style={{
                    width: "120px",
                    height: "auto",
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </div>

              <h1 style={{
                fontSize: "3rem",
                fontWeight: "400",
                color: "#fff",
                marginBottom: "1rem",
                lineHeight: "1.1",
              }}>
                Your AI Prompt Companion
              </h1>

              {/* Circular Logo Container */}
              <div style={{
                width: "280px",
                height: "280px",
                margin: "2rem auto",
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%)",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Binary code ring */}
                <div style={{
                  position: "absolute",
                  inset: "-10px",
                  borderRadius: "50%",
                  fontSize: "0.5rem",
                  color: "rgba(255, 255, 255, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: "rotate(-15deg)",
                  fontFamily: "monospace",
                  letterSpacing: "0.1em",
                }}>
                  1001 1001010110 010 001 1001
                </div>

                <img 
                  src="/gallery-images/logoo.png" 
                  alt="SoundLight Logo"
                  style={{
                    width: "180px",
                    height: "auto",
                    filter: "brightness(0) invert(1) drop-shadow(0 0 30px rgba(255, 255, 255, 0.5))",
                    position: "relative",
                    zIndex: 2,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Top Right - Sparkles Icon */}
          <div 
            style={{
              gridColumn: "10 / 13",
              gridRow: "1 / 2",
              background: "linear-gradient(135deg, rgba(40, 45, 70, 0.95) 0%, rgba(50, 55, 85, 0.92) 100%)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute",
              inset: 0,
              opacity: 0.15,
              mixBlendMode: "overlay",
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n3)'/%3E%3C/svg%3E")`,
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
            }}>
              <Sparkles size={32} color="#fff" />
            </div>
          </div>

          {/* Middle Right - 25M Stats */}
          <div 
            style={{
              gridColumn: "10 / 13",
              gridRow: "2 / 4",
              background: "linear-gradient(135deg, rgba(40, 45, 70, 0.95) 0%, rgba(50, 55, 85, 0.92) 100%)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute",
              inset: 0,
              opacity: 0.15,
              mixBlendMode: "overlay",
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n4'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n4)'/%3E%3C/svg%3E")`,
            }} />

            <h2 style={{
              fontSize: "4rem",
              fontWeight: "300",
              background: "linear-gradient(135deg, #A855F7, #EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "0.5rem",
              position: "relative",
              zIndex: 1,
            }}>
              25M
            </h2>
            
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              position: "relative",
              zIndex: 1,
            }}>
              <div style={{
                width: "24px",
                height: "2px",
                background: "linear-gradient(to right, transparent, rgba(168, 85, 247, 0.5))",
              }} />
              <p style={{
                fontSize: "0.875rem",
                color: "rgba(255, 255, 255, 0.7)",
              }}>
                created prompts
              </p>
              <div style={{
                width: "24px",
                height: "2px",
                background: "linear-gradient(to left, transparent, rgba(168, 85, 247, 0.5))",
              }} />
            </div>
          </div>

          {/* Bottom Left - 12K Happy Users */}
          <div 
            style={{
              gridColumn: "1 / 4",
              gridRow: "3 / 5",
              background: "linear-gradient(135deg, rgba(40, 45, 70, 0.95) 0%, rgba(50, 55, 85, 0.92) 100%)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute",
              inset: 0,
              opacity: 0.15,
              mixBlendMode: "overlay",
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n5'%3E%3CfeTurbulance type='fractalNoise' baseFrequency='1.2' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n5)'/%3E%3C/svg%3E")`,
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{
                fontSize: "3rem",
                fontWeight: "300",
                background: "linear-gradient(135deg, #F97316, #FB923C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "0.5rem",
              }}>
                12K
              </h2>
              <p style={{
                fontSize: "0.875rem",
                color: "rgba(255, 255, 255, 0.7)",
                marginBottom: "1.5rem",
              }}>
                happy users
              </p>

              <div style={{ display: "flex", gap: "0.5rem" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #F97316, #FB923C)",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                }} />
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #EC4899, #F472B6)",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  marginLeft: "-12px",
                }} />
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  marginLeft: "-12px",
                }} />
              </div>
            </div>
          </div>

          {/* Center Bottom Left - Branching Paths */}
          <div 
            style={{
              gridColumn: "4 / 7",
              gridRow: "4 / 6",
              background: "linear-gradient(135deg, rgba(40, 45, 70, 0.95) 0%, rgba(50, 55, 85, 0.92) 100%)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute",
              inset: 0,
              opacity: 0.15,
              mixBlendMode: "overlay",
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n6'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n6)'/%3E%3C/svg%3E")`,
            }} />

            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #F97316, #FB923C)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
            }}>
              <GitBranch size={28} color="#fff" />
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "300",
                color: "#fff",
                marginBottom: "0.75rem",
              }}>
                Branching paths
              </h3>
              <p style={{
                fontSize: "0.875rem",
                color: "rgba(255, 255, 255, 0.6)",
                lineHeight: "1.5",
              }}>
                Explore multiple prompt directions with branching.
              </p>
            </div>
          </div>

          {/* Center Bottom Right - Keyword Enhancer */}
          <div 
            style={{
              gridColumn: "7 / 10",
              gridRow: "4 / 6",
              background: "linear-gradient(135deg, rgba(40, 45, 70, 0.95) 0%, rgba(50, 55, 85, 0.92) 100%)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute",
              inset: 0,
              opacity: 0.15,
              mixBlendMode: "overlay",
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n7'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n7)'/%3E%3C/svg%3E")`,
            }} />

            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
            }}>
              <SearchCheck size={28} color="#fff" />
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "300",
                color: "#fff",
                marginBottom: "0.75rem",
              }}>
                Keyword enhancer
              </h3>
              <p style={{
                fontSize: "0.875rem",
                color: "rgba(255, 255, 255, 0.6)",
                lineHeight: "1.5",
              }}>
                Boost your prompt precision with keywords.
              </p>
            </div>
          </div>

          {/* Bottom Right - Prompt Templates */}
          <div 
            style={{
              gridColumn: "10 / 13",
              gridRow: "4 / 6",
              background: "linear-gradient(135deg, rgba(40, 45, 70, 0.95) 0%, rgba(50, 55, 85, 0.92) 100%)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute",
              inset: 0,
              opacity: 0.15,
              mixBlendMode: "overlay",
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n8'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n8)'/%3E%3C/svg%3E")`,
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{
                fontSize: "1.25rem",
                fontWeight: "300",
                color: "#fff",
                marginBottom: "0.5rem",
              }}>
                Prompt templates
              </h3>
              <p style={{
                fontSize: "0.8rem",
                color: "rgba(255, 255, 255, 0.6)",
                lineHeight: "1.5",
                marginBottom: "1.5rem",
              }}>
                Use pre-made templates to jumpstart creativity.
              </p>

              <Badge 
                style={{
                  background: "linear-gradient(135deg, #F97316, #FB923C)",
                  color: "#fff",
                  padding: "0.5rem 1rem",
                  fontSize: "0.75rem",
                  fontWeight: "400",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "20px",
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
              {["Rewrite", "PDF", "JPG", "PNG"].map((label, i) => (
                <div 
                  key={i}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: i === 0 ? "linear-gradient(135deg, #7C3AED, #A855F7)" : 
                                i === 1 ? "linear-gradient(135deg, #F97316, #FB923C)" :
                                "linear-gradient(135deg, #EC4899, #F472B6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.65rem",
                    color: "#fff",
                    fontWeight: "500",
                  }}
                >
                  {i === 0 && <Zap size={20} />}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom - Generate Button */}
          <div 
            style={{
              gridColumn: "1 / 4",
              gridRow: "5 / 7",
              background: "linear-gradient(135deg, rgba(40, 45, 70, 0.95) 0%, rgba(50, 55, 85, 0.92) 100%)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute",
              inset: 0,
              opacity: 0.15,
              mixBlendMode: "overlay",
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n9'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n9)'/%3E%3C/svg%3E")`,
            }} />

            <Button
              style={{
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                color: "#fff",
                padding: "1.25rem 3rem",
                fontSize: "1rem",
                fontWeight: "400",
                border: "none",
                borderRadius: "28px",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                cursor: "pointer",
                position: "relative",
                zIndex: 1,
              }}
            >
              <Sparkles size={20} />
              Generate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}