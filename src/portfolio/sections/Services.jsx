import { motion } from "framer-motion";
import {
  Rocket,
  Monitor,
  Server,
  Cloud,
  Wrench,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { services } from "@/portfolio/data/services";

const iconMap = {
  Rocket,
  Monitor,
  Server,
  Cloud,
  Wrench,
  Users,
};

export default function Services() {
  return (
    <section id="services" className="relative section-padding px-4 sm:px-6 lg:px-8 bg-noise">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-600/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono font-medium text-cyan-600 dark:text-cyan-300 mb-4">
            <Wrench className="h-3.5 w-3.5" />
            <span>WHAT I DELIVER</span>
          </div>
          <h2 className="section-heading font-heading text-slate-900 dark:text-slate-100">
            Full-Stack Software{" "}
            <span className="text-gradient-aurora">Services.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From frontend development to cloud deployment — I build and support web applications for remote teams and contract clients.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group glass-card glass-card-hover p-6 sm:p-8 rounded-3xl flex flex-col"
              >
                {/* Icon Badge */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} mb-5`}
                >
                  {Icon && <Icon className="h-6 w-6 text-white" />}
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-slate-100 mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature List */}
                <div className="mt-auto space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
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
            href="#process"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-6 py-4 text-sm font-medium text-slate-200 hover:bg-white/10 hover:border-violet-500/40 transition-all"
          >
            <span>See My Process</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
