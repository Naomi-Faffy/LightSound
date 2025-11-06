import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Instagram, Twitter, Send, ArrowRight, Calendar } from "lucide-react";

export default function Contact() {
  return (
    <div 
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #000000 0%, #0a0e1f 50%, #000000 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "6rem 2rem 4rem",
      }}
    >
      {/* Decorative Glowing Orbs - Using brand colors only */}
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

      <div style={{ 
        position: "absolute", 
        top: "40%", 
        right: "5%", 
        width: "400px", 
        height: "400px", 
        borderRadius: "50%", 
        opacity: 0.1, 
        background: "radial-gradient(circle, #2A4CFF 0%, transparent 70%)", 
        filter: "blur(100px)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      {/* Main Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1 style={{
            fontSize: "4rem",
            fontWeight: "400",
            color: "#fff",
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
          }}>
            Get in Touch
          </h1>
          <p style={{
            fontSize: "1.25rem",
            color: "rgba(255, 255, 255, 0.7)",
            maxWidth: "600px",
            margin: "0 auto",
          }}>
            Let's create an unforgettable event experience together
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(6, minmax(120px, auto))",
          gap: "1.5rem",
          marginBottom: "3rem",
        }}>
          
          {/* Phone Card */}
          <div 
            style={{
              gridColumn: "1 / 5",
              gridRow: "1 / 3",
              background: "rgba(42, 76, 255, 0.08)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2.5rem",
              border: "1px solid rgba(42, 76, 255, 0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.borderColor = "rgba(42, 76, 255, 0.5)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(42, 76, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(42, 76, 255, 0.3)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <Badge 
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "rgba(42, 76, 255, 0.2)",
                color: "#2A4CFF",
                padding: "0.5rem 1rem",
                fontSize: "0.7rem",
                fontWeight: "600",
                letterSpacing: "0.05em",
                border: "1px solid rgba(42, 76, 255, 0.4)",
              }}
            >
              DIRECT LINE
            </Badge>

            <div>
              <div style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "#2A4CFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
                boxShadow: "0 8px 24px rgba(42, 76, 255, 0.3)",
              }}>
                <Phone size={32} color="#FFFFFF" strokeWidth={2} />
              </div>
              
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "400",
                color: "#fff",
                marginBottom: "0.5rem",
              }}>
                Call Us
              </h3>
              <p style={{
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.6)",
                marginBottom: "1.5rem",
              }}>
                Speak directly with our event team
              </p>
            </div>

            <div>
              <p style={{
                fontSize: "1.25rem",
                fontWeight: "500",
                color: "#2A4CFF",
              }}>
                +263 77 263 6157
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div 
            style={{
              gridColumn: "5 / 9",
              gridRow: "1 / 3",
              background: "rgba(42, 76, 255, 0.08)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2.5rem",
              border: "1px solid rgba(42, 76, 255, 0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.borderColor = "rgba(42, 76, 255, 0.5)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(42, 76, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(42, 76, 255, 0.3)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div>
              <div style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "#2A4CFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
                boxShadow: "0 8px 24px rgba(42, 76, 255, 0.3)",
              }}>
                <Mail size={32} color="#FFFFFF" strokeWidth={2} />
              </div>
              
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "400",
                color: "#fff",
                marginBottom: "0.5rem",
              }}>
                Email Us
              </h3>
              <p style={{
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.6)",
                marginBottom: "1.5rem",
              }}>
                Get a response within 24 hours
              </p>
            </div>

            <div>
              <p style={{
                fontSize: "1.1rem",
                fontWeight: "500",
                color: "#2A4CFF",
              }}>
                info@soundlight.zw
              </p>
            </div>
          </div>

          {/* Location Card */}
          <div 
            style={{
              gridColumn: "9 / 13",
              gridRow: "1 / 3",
              background: "rgba(42, 76, 255, 0.08)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2.5rem",
              border: "1px solid rgba(42, 76, 255, 0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.borderColor = "rgba(42, 76, 255, 0.5)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(42, 76, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(42, 76, 255, 0.3)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div>
              <div style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "#2A4CFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
                boxShadow: "0 8px 24px rgba(42, 76, 255, 0.3)",
              }}>
                <MapPin size={32} color="#FFFFFF" strokeWidth={2} />
              </div>
              
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "400",
                color: "#fff",
                marginBottom: "0.5rem",
              }}>
                Visit Us
              </h3>
              <p style={{
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.6)",
                marginBottom: "1.5rem",
              }}>
                Our premier location
              </p>
            </div>

            <div>
              <p style={{
                fontSize: "1.1rem",
                fontWeight: "500",
                color: "#2A4CFF",
              }}>
                Harare, Zimbabwe
              </p>
            </div>
          </div>

          {/* Contact Form Card - Large */}
          <div 
            style={{
              gridColumn: "1 / 9",
              gridRow: "3 / 7",
              background: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "3rem",
              border: "1px solid rgba(42, 76, 255, 0.3)",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
          >
            <div style={{
              position: "absolute",
              top: "-50%",
              right: "-20%",
              width: "60%",
              height: "100%",
              background: "radial-gradient(circle, rgba(42, 76, 255, 0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ marginBottom: "2rem" }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "#2A4CFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  boxShadow: "0 8px 24px rgba(42, 76, 255, 0.3)",
                }}>
                  <Send size={28} color="#FFFFFF" strokeWidth={2} />
                </div>

                <h3 style={{
                  fontSize: "2rem",
                  fontWeight: "400",
                  color: "#fff",
                  marginBottom: "0.75rem",
                }}>
                  Send us a message
                </h3>
                <p style={{
                  fontSize: "1rem",
                  color: "rgba(255, 255, 255, 0.6)",
                }}>
                  Fill out the form below and we'll get back to you shortly
                </p>
              </div>

              <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      style={{
                        width: "100%",
                        padding: "1rem 1.25rem",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "12px",
                        color: "#fff",
                        fontSize: "1rem",
                        outline: "none",
                        transition: "all 0.3s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.08)";
                        e.target.style.borderColor = "rgba(42, 76, 255, 0.4)";
                      }}
                      onBlur={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.05)";
                        e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      style={{
                        width: "100%",
                        padding: "1rem 1.25rem",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "12px",
                        color: "#fff",
                        fontSize: "1rem",
                        outline: "none",
                        transition: "all 0.3s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.08)";
                        e.target.style.borderColor = "rgba(42, 76, 255, 0.4)";
                      }}
                      onBlur={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.05)";
                        e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      }}
                    />
                  </div>
                </div>

                <div>
                  <select
                    required
                    style={{
                      width: "100%",
                      padding: "1rem 1.25rem",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      color: "#fff",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.background = "rgba(255, 255, 255, 0.08)";
                      e.target.style.borderColor = "rgba(42, 76, 255, 0.4)";
                    }}
                    onBlur={(e) => {
                      e.target.style.background = "rgba(255, 255, 255, 0.05)";
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    }}
                  >
                    <option value="" style={{ background: "#1A1A2E", color: "#fff" }}>Event Type</option>
                    <option value="corporate" style={{ background: "#1A1A2E", color: "#fff" }}>Corporate Event</option>
                    <option value="wedding" style={{ background: "#1A1A2E", color: "#fff" }}>Wedding</option>
                    <option value="private" style={{ background: "#1A1A2E", color: "#fff" }}>Private Celebration</option>
                    <option value="social" style={{ background: "#1A1A2E", color: "#fff" }}>Social Event</option>
                  </select>
                </div>

                <div>
                  <textarea
                    placeholder="Tell us about your needs..."
                    rows="5"
                    required
                    style={{
                      width: "100%",
                      padding: "1rem 1.25rem",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      color: "#fff",
                      fontSize: "1rem",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "inherit",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.background = "rgba(255, 255, 255, 0.08)";
                      e.target.style.borderColor = "rgba(42, 76, 255, 0.4)";
                    }}
                    onBlur={(e) => {
                      e.target.style.background = "rgba(255, 255, 255, 0.05)";
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    padding: "1.25rem 2.5rem",
                    background: "#2A4CFF",
                    border: "none",
                    borderRadius: "50px",
                    color: "#FFFFFF",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    transition: "all 0.3s ease",
                    boxShadow: "0 8px 24px rgba(42, 76, 255, 0.3)",
                    width: "fit-content",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(42, 76, 255, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(42, 76, 255, 0.3)";
                  }}
                >
                  <span>Send Message</span>
                  <ArrowRight size={20} strokeWidth={2.5} />
                </button>
              </form>
            </div>
          </div>

          {/* Business Hours Card */}
          <div 
            style={{
              gridColumn: "9 / 13",
              gridRow: "3 / 5",
              background: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2.5rem",
              border: "1px solid rgba(42, 76, 255, 0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.borderColor = "rgba(42, 76, 255, 0.5)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(42, 76, 255, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(42, 76, 255, 0.3)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{
              position: "absolute",
              bottom: "-30%",
              right: "-20%",
              width: "80%",
              height: "80%",
              background: "radial-gradient(circle, rgba(42, 76, 255, 0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "#2A4CFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
                boxShadow: "0 8px 24px rgba(42, 76, 255, 0.3)",
              }}>
                <Clock size={28} color="#FFFFFF" strokeWidth={2} />
              </div>
              
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "400",
                color: "#fff",
                marginBottom: "1rem",
              }}>
                Business Hours
              </h3>
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.95rem" }}>Monday - Friday</span>
                  <span style={{ color: "#2A4CFF", fontSize: "0.95rem", fontWeight: "500" }}>9AM - 7PM</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.95rem" }}>Saturday</span>
                  <span style={{ color: "#2A4CFF", fontSize: "0.95rem", fontWeight: "500" }}>10AM - 6PM</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.95rem" }}>Sunday</span>
                  <span style={{ color: "#2A4CFF", fontSize: "0.95rem", fontWeight: "500" }}>By Appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule a Call CTA */}
          <div 
            style={{
              gridColumn: "9 / 13",
              gridRow: "5 / 7",
              background: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2.5rem",
              border: "1px solid rgba(42, 76, 255, 0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.borderColor = "rgba(42, 76, 255, 0.5)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(42, 76, 255, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(42, 76, 255, 0.3)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{
              position: "absolute",
              top: "-30%",
              left: "-20%",
              width: "80%",
              height: "80%",
              background: "radial-gradient(circle, rgba(42, 76, 255, 0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "400",
                color: "#fff",
                marginBottom: "0.75rem",
              }}>
                Schedule a call
              </h3>
              <p style={{
                fontSize: "0.95rem",
                color: "rgba(255, 255, 255, 0.6)",
                marginBottom: "2rem",
                lineHeight: "1.6",
              }}>
                Book a consultation with our team to discuss your needs in detail
              </p>

              <button
                style={{
                  padding: "1rem 2rem",
                  background: "transparent",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "50px",
                  color: "#fff",
                  fontSize: "0.95rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  transition: "all 0.3s ease",
                  width: "100%",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                }}
              >
                <Calendar size={20} strokeWidth={2} />
                <span>Book a Call</span>
                <ArrowRight size={20} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div style={{
          background: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "24px",
          padding: "2.5rem 3rem",
          border: "1px solid rgba(42, 76, 255, 0.3)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}>
          <div>
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: "400",
              color: "#fff",
              marginBottom: "0.5rem",
            }}>
              Follow us on social media
            </h3>
            <p style={{
              fontSize: "0.95rem",
              color: "rgba(255, 255, 255, 0.6)",
            }}>
              Stay updated with our latest news and offerings
            </p>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            {[
              { Icon: Instagram, color: "#2A4CFF", href: "https://www.instagram.com/soundlight.zw/" },
              { Icon: Twitter, color: "#2A4CFF", href: "https://www.threads.com/@soundlight.zw?xmt=AQF0llt6nKMpZ2_3YwyhVxkbumThNJCT0fvGvYy1V3-iHYE" },
            ].map(({ Icon, color, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${color}20`;
                  e.currentTarget.style.borderColor = `${color}40`;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Icon size={24} color={color} strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}