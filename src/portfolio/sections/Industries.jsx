import { motion } from "framer-motion";
import {
  Rocket,
  Cloud,
  TrendingUp,
  Heart,
  ShoppingBag,
  Building2,
  Globe,
} from "lucide-react";
import { industries } from "@/portfolio/data/industries";

const iconMap = {
  Rocket,
  Cloud,
  TrendingUp,
  Heart,
  ShoppingBag,
  Building2,
};

export default function Industries() {
  return (
    <section id="industries" className="relative section-padding px-4 sm:px-6 lg:px-8 bg-noise">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-violet-600/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-mono font-medium text-amber-300 mb-4">
            <Globe className="h-3.5 w-3.5" />
            <span>INDUSTRIES I SERVE</span>
          </div>
          <h2 className="section-heading font-heading text-slate-100">
            Building for{" "}
            <span className="text-gradient-aurora">Every Industry.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400 text-sm sm:text-base">
            I've delivered solutions across diverse industries — understanding the unique
            challenges, compliance requirements, and user expectations in each domain.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, idx) => {
            const Icon = iconMap[industry.icon];
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group glass-card glass-card-hover p-6 rounded-3xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-violet-500/40 transition-colors">
                    {Icon && <Icon className="h-5 w-5 text-violet-400" />}
                  </div>
                  <h3 className="text-base font-bold font-heading text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {industry.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {industry.description}
                </p>

                {/* Relevant Services Pills */}
                <div className="flex flex-wrap gap-2">
                  {industry.services.map((service, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-[11px] font-mono text-slate-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
