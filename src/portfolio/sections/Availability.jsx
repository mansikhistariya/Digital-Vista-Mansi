import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Users,
  Rocket,
  Handshake,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";

const engagementTypes = [
  {
    icon: Briefcase,
    title: "Freelance Projects",
    description: "Defined-scope projects with clear deliverables and timelines.",
    availability: "Available",
    color: "text-cyan-400",
    borderColor: "border-cyan-500/20",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: Code2,
    title: "Contract Development",
    description: "Monthly retainer or fixed-term contracts for ongoing development.",
    availability: "Available",
    color: "text-violet-400",
    borderColor: "border-violet-500/20",
    bgColor: "bg-violet-500/10",
  },
  {
    icon: Users,
    title: "Team Augmentation",
    description: "Integrate into your existing team as a dedicated developer.",
    availability: "Available",
    color: "text-blue-400",
    borderColor: "border-blue-500/20",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Rocket,
    title: "Startup Collaboration",
    description: "Co-build your product as a technical partner from day one.",
    availability: "Selective",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Handshake,
    title: "Full-Time Remote",
    description: "Full-time remote positions with the right team and mission.",
    availability: "Open",
    color: "text-amber-400",
    borderColor: "border-amber-500/20",
    bgColor: "bg-amber-500/10",
  },
];

export default function Availability() {
  return (
    <section id="availability" className="relative section-padding px-4 sm:px-6 lg:px-8 bg-noise">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[400px] bg-cyan-600/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono font-medium text-cyan-300 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>OPEN TO WORK</span>
          </div>
          <h2 className="section-heading font-heading text-slate-100">
            Let's Work{" "}
            <span className="text-gradient-aurora">Together.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400 text-sm sm:text-base">
            I'm currently available for freelance projects, contract development, team
            augmentation, and full-time remote roles. Here's how we can collaborate.
          </p>
        </div>

        {/* Engagement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {engagementTypes.map((type, idx) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group glass-card glass-card-hover p-6 rounded-3xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${type.bgColor} border ${type.borderColor}`}>
                    <Icon className={`h-5 w-5 ${type.color}`} />
                  </div>
                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <CheckCircle className="h-3 w-3" />
                    {type.availability}
                  </span>
                </div>

                <h3 className="text-base font-bold font-heading text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
                  {type.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {type.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-8 py-4 text-sm font-semibold text-white shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="/mnc.resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-6 py-4 text-sm font-medium text-slate-200 hover:bg-white/10 hover:border-violet-500/40 transition-all"
          >
            <span>Download Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
