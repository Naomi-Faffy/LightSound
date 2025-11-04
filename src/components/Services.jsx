import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Music,
  Lightbulb,
  Zap,
  Users,
  Volume2,
  Tv,
  Sparkles
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

      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 py-28 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <Badge className="mb-8 bg-white/5 backdrop-blur-xl text-blue-200 border border-white/20 px-8 py-3 text-sm font-light uppercase tracking-[0.3em] shadow-2xl shadow-blue-500/20">
              <Sparkles className="w-4 h-4 mr-3 inline" />
              Exclusive Luxury Classy Events
            </Badge>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-6xl md:text-8xl font-thin mb-8 text-white leading-tight tracking-tight"
            >
              Sound <span className="font-light italic">Light</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-2xl md:text-4xl text-gray-300 mb-6 font-thin tracking-wide"
            >
              Party & Entertainment Services
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-xl md:text-2xl text-blue-300 mb-14 font-light tracking-widest"
            >
              Corporate <span className="text-white/40">||</span> Private <span className="text-white/40">||</span> Social Events
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {["Pro Lit DJs", "Sound", "Special Effects", "Lighting", "LED Screens"].map((item, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-gray-300 font-light tracking-wider hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-lg shadow-blue-500/10"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button size="lg" className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white border border-white/20 hover:border-white/40 px-10 py-7 text-lg font-light tracking-wider shadow-2xl shadow-blue-500/30 transition-all duration-500">
                Book Your Event
              </Button>
              <Button size="lg" className="bg-transparent backdrop-blur-xl border-2 border-white/20 text-white hover:bg-white/5 hover:border-white/40 px-10 py-7 text-lg font-light tracking-wider shadow-xl shadow-blue-500/20 transition-all duration-500">
                View Portfolio
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-white/20 to-transparent" />
      </div>

      {/* Services Section */}
      <div className="relative max-w-7xl mx-auto px-6 py-32 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge className="mb-8 bg-white/5 backdrop-blur-xl text-blue-300 border border-white/10 px-6 py-2 text-xs font-light uppercase tracking-[0.3em]">
            Our Services
          </Badge>
          <h2 className="text-5xl md:text-6xl font-thin mb-6 text-white tracking-tight">
            What We <span className="italic font-light">Offer</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive event solutions to make your celebration unforgettable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              whileHover={{ y: -8 }}
            >
              <Card className="group h-full bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/30 transition-all duration-700 overflow-hidden shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <CardContent className="relative p-10">
                  {/* Icon with luxury styling */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-blue-700/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />
                    <div className="relative w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                      <service.icon className="w-10 h-10 text-blue-300 group-hover:text-white transition-colors duration-700" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-light text-white mb-5 tracking-wide group-hover:text-blue-200 transition-colors duration-700">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-700">
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
