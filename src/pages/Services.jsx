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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Luxury Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-800/15 rounded-full filter blur-[140px] animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/2 w-[550px] h-[550px] bg-blue-500/10 rounded-full filter blur-[130px] animate-pulse delay-2000" />
      </div>

      {/* Services Section */}
      <div className="relative max-w-[1600px] mx-auto px-8 py-24 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-wide">
            Our Premium Services
          </h2>
          <Badge className="bg-white/5 backdrop-blur-xl text-blue-300 border border-white/10 px-8 py-3 text-sm font-light uppercase tracking-[0.3em]">
            Excellence in Every Detail
          </Badge>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              whileHover={{ y: -8 }}
            >
              <Card className="group h-full bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-blue-400/40 transition-all duration-700 overflow-hidden shadow-2xl shadow-blue-500/10 hover:shadow-blue-400/40 rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <CardContent className="relative p-12 flex flex-col items-center text-center min-h-[420px]">
                  {/* Icon with luxury styling */}
                  <div className="relative mb-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-blue-700/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
                    <div className="relative w-28 h-28 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg">
                      <service.icon className="w-14 h-14 text-blue-300 group-hover:text-white transition-colors duration-700" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-3xl font-light text-white mb-6 tracking-wide group-hover:text-blue-200 transition-colors duration-700">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light text-lg group-hover:text-gray-300 transition-colors duration-700">
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
