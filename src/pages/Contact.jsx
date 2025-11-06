import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react";

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
            fontSize: "clamp(2.5rem, 8vw, 4rem)",
            fontWeight: "400",
            color: "#fff",
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
          }}>
            Get in Touch
          </h1>
          <p style={{
            fontSize: "clamp(1rem, 3vw, 1.25rem)",
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
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          marginBottom: "3rem",
        }}>
          
          {/* Phone Card */}
          <div 
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2.5rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
              minHeight: "250px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(255, 255, 255, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
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
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
                boxShadow: "0 8px 24px rgba(255, 255, 255, 0.05)",
              }}>
                <Phone size={32} color="#2A4CFF" strokeWidth={2} />
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
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2.5rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
              minHeight: "250px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(255, 255, 255, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div>
              <div style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
                boxShadow: "0 8px 24px rgba(255, 255, 255, 0.05)",
              }}>
                <Mail size={32} color="#2A4CFF" strokeWidth={2} />
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
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2.5rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
              minHeight: "250px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(255, 255, 255, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div>
              <div style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
                boxShadow: "0 8px 24px rgba(255, 255, 255, 0.05)",
              }}>
                <MapPin size={32} color="#2A4CFF" strokeWidth={2} />
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
        </div>

        {/* Contact Form Card - Full Width */}
        <div 
          style={{
            background: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "24px",
            padding: "clamp(2rem, 5vw, 3rem)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
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
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
                boxShadow: "0 8px 24px rgba(255, 255, 255, 0.05)",
              }}>
                <Send size={28} color="#2A4CFF" strokeWidth={2} />
              </div>

              <h3 style={{
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
                fontWeight: "400",
                color: "#fff",
                marginBottom: "0.75rem",
              }}>
                Send us a message
              </h3>
              <p style={{
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                color: "rgba(255, 255, 255, 0.6)",
              }}>
                Fill out the form below and we'll get back to you shortly
              </p>
            </div>

            <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
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
                <input
                  type="text"
                  placeholder="Event Type"
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
      </div>
    </div>
  );
}