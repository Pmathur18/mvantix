"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    title: "Month 1:",
    heading: `The MVANTIX Intelligence Lab (The "Forge")`,
    desc: `During the first month, talent undergoes rigorous, free training within an AI driven learning engine. Instead of just learning tools, they develop the high level cognitive habits required for modern enterprise environments.`,
    points: [
      "Machine Thinking Mindset: Developing an AI native approach to problem solving and automation.",
      "Cognitive Fluency: Enhancing analytical reasoning and structured decision making.",
      "Communication Mastery: Training in professional articulation and stakeholder presence.",
      "Project Execution Discipline: Mastering workflow ownership and accountability.",
    ],
    img: "/images/about2.jpg",
  },
  {
    title: "Month 2:",
    heading: `Talent in Action (The "Test Drive")`,
    desc: `In the second month, MVANTIX offers Free Deployment. This allows your teams to work alongside the talent inside your actual workflows at zero risk. You don't have to guess if they are a fit; you observe it firsthand:`,
    points: [
      "Performance: Can they actually deliver the work?",
      "Ownership: Do they take initiative or wait for instructions?",
      "Culture Fit: Do they integrate seamlessly with your existing team?",
      "Speed & Communication: How quickly do they adapt and how clearly do they report progress?",
    ],
    img: "/images/about3.jpg",
  },
  {
    title: "Month 3 Onward:",
    heading: `The MVANTIX Partnership (The "Scale")`,
    desc: `Once performance is proven, the engagement shifts to a formal partnership that is paid only if you approve.`,
    points: [
      "Flexible Models: Hire full time, contract, or scale up with dedicated 'Talent Pods'.",
      "Performance-Driven: A relationship built on trust and results.",
    ],
    img: "/images/about4.jpg",
  },
];

const AboutJourney = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="bg-gray-50 py-12 md:py-24 px-4 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-semibold md:leading-13 text-[#7191e6] text-center mb-16">
        The Mvantix <span className="text-black"> Journey </span>
      </h2>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* scroll lines - logic same rakha hai */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300 md:hidden" />
        <motion.div
          style={{ height }}
          className="absolute left-4 top-0 w-1 bg-[#3d52a1] origin-top md:hidden"
        />

        <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-300 -translate-x-1/2" />
        <motion.div
          style={{ height }}
          className="absolute left-1/2 top-0 hidden md:block w-1 bg-[#3d52a1] -translate-x-1/2 origin-top"
        />

        {steps.map((step, i) => (
          <div key={i} className="mb-24 last:mb-0 relative w-full">
            {/* Dots */}
            <div className="md:hidden absolute left-0 top-3 w-6 h-6 bg-[#7191e6] rounded-full border-4 border-white z-20" />
            <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-[#7191e6] rounded-full -translate-x-1/2 border-4 border-white z-20" />

            {/* mobile layout - Images ko thoda "Mast" kiya */}
            <div className="md:hidden pl-14">
              <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-6">
                <h3 className="font-bold text-[#3d52a1] mb-1">{step.title}</h3>
                <h4 className="font-bold text-gray-900 mb-3">{step.heading}</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{step.desc}</p>
                
                {step.points && (
                  <ul className="list-disc pl-5 text-gray-600 text-xs space-y-2 mb-5">
                    {step.points.map((p, idx) => <li key={idx}>{p}</li>)}
                  </ul>
                )}

                <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video">
                  <Image src={step.img} alt="" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>

            {/* desktop layout - Balanced & Attractive */}
            <div className="hidden md:flex items-center justify-between w-full gap-12">
              {i % 2 === 0 ? (
                <>
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="w-[42%] bg-white border border-gray-100 shadow-xl rounded-[2rem] p-8 hover:shadow-2xl transition-all"
                  >
                    <h3 className="font-black text-[#3d52a1] text-xs uppercase tracking-widest mb-2">{step.title}</h3>
                    <h4 className="font-bold text-2xl text-gray-900 mb-4">{step.heading}</h4>
                    <p className="text-gray-600 text-sm font-medium mb-4 leading-relaxed">{step.desc}</p>
                    <ul className="list-disc pl-5 text-gray-500 font-medium text-xs space-y-2">
                      {step.points?.map((p, idx) => <li key={idx}>{p}</li>)}
                    </ul>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="w-[38%] relative group"
                  >
                    <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
                      <Image src={step.img} alt="" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-[#3d52a1]/10 group-hover:bg-transparent transition-colors" />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-[#7191e6]/20 rounded-[2rem]" />
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="w-[38%] relative group"
                  >
                    <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
                      <Image src={step.img} alt="" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-[#3d52a1]/10 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full border-2 border-[#7191e6]/20 rounded-[2rem]" />
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="w-[42%] bg-white border border-gray-100 shadow-xl rounded-[2rem] p-8 hover:shadow-2xl transition-all"
                  >
                    <h3 className="font-black text-[#3d52a1] text-xs uppercase tracking-widest mb-2">{step.title}</h3>
                    <h4 className="font-bold text-2xl text-gray-900 mb-4">{step.heading}</h4>
                    <p className="text-gray-600 text-sm font-medium mb-4 leading-relaxed">{step.desc}</p>
                    <ul className="list-disc pl-5 text-gray-500 font-medium text-xs space-y-2">
                      {step.points?.map((p, idx) => <li key={idx}>{p}</li>)}
                    </ul>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutJourney;