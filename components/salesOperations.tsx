"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  IconSettingsAutomation, 
  IconUsers, 
  IconDeviceDesktopAnalytics, 
  IconHeadset, 
  IconRocket, 
  IconRefresh,
} from "@tabler/icons-react";

const SalesOperations = () => {
  const offerings = [
    {
      title: "ITSM Deployment",
      desc: "IT Service Management (ITSM) deployment and optimization.",
      icon: <IconSettingsAutomation size={28} />,
    },
    {
      title: "ITOM & Monitoring",
      desc: "IT Operations Management (ITOM) and monitoring solutions.",
      icon: <IconDeviceDesktopAnalytics size={28} />,
    },
    {
      title: "HR Service Delivery",
      desc: "HRSD for improved employee experience and internal operations.",
      icon: <IconUsers size={28} />,
    },
    {
      title: "CSM Solutions",
      desc: "Customer Service Management (CSM) solutions for better engagement.",
      icon: <IconHeadset size={28} />,
    },
    {
      title: "Platform Upgrades",
      desc: "Workflow automation, integrations, and platform upgrades.",
      icon: <IconRefresh size={28} />,
    },
    {
      title: "Continuous Support",
      desc: "Ongoing performance optimization and continuous support.",
      icon: <IconRocket size={28} />,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50/50 relative overflow-hidden">
      {/* Background Decorative Tech Circle */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 border-40 border-[#3d52a1]/5 rounded-full" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 backdrop-blur animate-in fade-in slide-in-from-bottom-6 duration-700 mb-4 block">
                Service Now Capabilities
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold md:leading-13 text-slate-900 ">
                Intelligent Digital Workflows <br />
                <span className="text-[#7191e6] ">for Enterprise Operations</span>
              </h2>
              <p className="mt-8 max-w-xl text-lg text-slate-600 animate-in fade-in duration-700 delay-100 slide-in-from-bottom-8">
                MVANTIX helps organizations simplify complex operations through <span className="text-[#3d52a1] font-bold underline decoration-[#7191e6] decoration-4 underline-offset-4">ServiceNow-powered</span> digital workflows.
              </p>
            </motion.div>
          </div>

          {/* Techy PNG Section with Animated Running Border */}
          <div className="relative w-[300px] h-[300px] shrink-0 hidden lg:flex items-center justify-center">
            
            {/* Spinning Tech Ring (Running Border) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full border-t-2 border-b-2 border-dashed border-[#7191e6]/40 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[85%] h-[85%] border-l-2 border-r-2 border-solid border-[#3d52a1]/20 rounded-full"
            />
            
            {/* Soft Glow Effect */}
            <div className="absolute w-48 h-48 bg-[#7191e6]/10 blur-3xl rounded-full" />

            {/* The PNG Image */}
            <div className="relative w-48 h-48">
              <Image 
                src="/images/sales1.png" 
                alt="Workflows Tech" 
                fill 
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Offerings Grid - Keep Original */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-2xl hover:shadow-[#3d52a1]/10 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#7191e6]/5 rounded-bl-[5rem] group-hover:bg-[#7191e6]/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="mb-6  text-[#3d52a1] group-hover:text-[#7191e6] group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-[#3d52a1] uppercase tracking-wider mb-4">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Operational Results Bar - Keep Original */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col lg:flex-row items-center justify-between gap-10 p-1 bg-white rounded-[3rem] border border-gray-100 shadow-xl overflow-hidden"
        >
          <div className="bg-[#3d52a1] text-white px-10 py-8 rounded-[2.8rem] flex-1 w-full">
            <h4 className="text-2xl font-semibold uppercase tracking-tighter mb-2">Operational Results</h4>
            <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Efficiency through automation</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 px-10 py-6 flex-2">
            {[
              "Faster resolution times",
              "Improved operational visibility",
              "Seamless workflow efficiency"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#7191e6]" />
                <span className="text-xs font-semibold text-[#3d52a1] uppercase tracking-tighter">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SalesOperations;