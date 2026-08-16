import { motion } from "framer-motion";
import { Check, X, ArrowUpRight, Sparkles, Shield } from "lucide-react";
import { maintenancePlans } from "@/portfolio/data/maintenance";

export default function MaintenancePlans() {
  return (
    <section id="maintenance" className="relative section-padding px-4 sm:px-6 lg:px-8 bg-noise">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-600/8 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-violet-600/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-medium text-emerald-300 mb-4">
            <Shield className="h-3.5 w-3.5" />
            <span>ONGOING SUPPORT</span>
          </div>
          <h2 className="section-heading font-heading text-slate-100">
            Maintenance{" "}
            <span className="text-gradient-aurora">Plans.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400 text-sm sm:text-base">
            Keep your application running at peak performance with ongoing support,
            bug fixes, feature development, and proactive optimization.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {maintenancePlans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative glass-card rounded-3xl p-6 sm:p-8 flex flex-col ${
                plan.popular
                  ? "border-violet-500/40 shadow-[0_0_60px_-15px_rgba(139,92,246,0.3)]"
                  : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-1.5 text-xs font-bold text-white shadow-glow">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold font-heading text-slate-100 mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-400">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                    {plan.price}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Included Features */}
              <div className="space-y-3 mb-6 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 opacity-50">
                    <X className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-500">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`group flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 text-white shadow-glow hover:shadow-glow-lg"
                    : "border border-white/15 bg-white/[0.05] text-slate-200 hover:bg-white/10 hover:border-violet-500/40"
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-xs text-slate-500 font-mono"
        >
          All plans are customizable to your specific needs. Let's discuss what works best for your project.
        </motion.p>
      </div>
    </section>
  );
}
