import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Music,
  Lightbulb,
  Zap,
  Users,
  Volume2,
  Tv
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Music,
      title: "Pro Lit DJs",
      description: "Professional DJs with extensive music libraries and crowd-reading expertise to keep your guests dancing all night long"
    },
    {
      icon: Volume2,
      title: "Premium Sound Systems",
      description: "Crystal-clear audio with state-of-the-art speakers and sound equipment for perfect acoustics at any venue"
    },
    {
      icon: Lightbulb,
      title: "Dynamic Lighting",
      description: "Stunning lighting effects including intelligent lights, uplighting, and custom color schemes to transform any space"
    },
    {
      icon: Zap,
      title: "Special Effects",
      description: "Spectacular effects including fog machines, confetti cannons, sparklers, and CO2 jets for unforgettable moments"
    },
    {
      icon: Tv,
      title: "LED Screens",
      description: "High-resolution LED displays for presentations, live feeds, custom graphics, and immersive visual experiences"
    },
    {
      icon: Users,
      title: "Event Coordination",
      description: "Professional event management ensuring seamless execution from setup to teardown for stress-free celebrations"
    }
  ];

  return (
    <div className="min-h-screen bg-[#000000] relative overflow-hidden flex items-center py-16 md:py-20">
      {/* Luxury Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2A4CFF]/20 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#2A4CFF]/15 rounded-full filter blur-[140px] animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/2 w-[550px] h-[550px] bg-[#2A4CFF]/10 rounded-full filter blur-[130px] animate-pulse delay-2000" />
      </div>

      {/* Services Section */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#F5F5F5] mb-4 tracking-wide">
            Our Premium Services
          </h2>
          <Badge className="bg-white/5 backdrop-blur-xl text-[#2A4CFF] border border-white/10 px-6 py-2 text-xs font-light uppercase tracking-[0.3em]">
            Excellence in Every Detail
          </Badge>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              whileHover={{ y: -8 }}
            >
              <Card className="group h-full bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-[#2A4CFF]/60 transition-all duration-700 overflow-hidden shadow-2xl shadow-[#2A4CFF]/10 hover:shadow-[#2A4CFF]/40 rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2A4CFF]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <CardContent className="relative p-6 lg:p-8 flex flex-col items-center text-center h-full">
                  {/* Icon with luxury styling */}
                  <div className="relative mb-5 lg:mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2A4CFF]/30 to-[#2A4CFF]/50 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />
                    <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg">
                      <service.icon className="w-10 h-10 lg:w-12 lg:h-12 text-[#2A4CFF] group-hover:text-[#F5F5F5] transition-colors duration-700" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-light text-[#F5F5F5] mb-3 lg:mb-4 tracking-wide group-hover:text-[#2A4CFF] transition-colors duration-700">
                    {service.title}
                  </h3>
                  <p className="text-sm lg:text-base text-[#F5F5F5]/70 leading-relaxed font-light group-hover:text-[#F5F5F5]/90 transition-colors duration-700">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
