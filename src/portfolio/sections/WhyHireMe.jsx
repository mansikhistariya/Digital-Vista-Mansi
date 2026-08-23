import { motion } from "framer-motion";
import {
  Zap,
  Layers,
  Cloud,
  TrendingUp,
  MessageSquare,
  Shield,
  Award,
} from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "End-to-End Delivery",
    stat: "Full Stack",
    description:
      "I handle frontend, backend, database, and deployment — you get one developer who delivers the complete product, not fragmented handoffs between specialists.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Production-Ready Code",
    stat: "95+ Lighthouse",
    description:
      "Every application I build meets performance benchmarks with clean architecture, TypeScript safety, and optimized bundles that score 95+ on Lighthouse.",
    color: "from-violet-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    stat: "AWS Certified",
    description:
      "I deploy on AWS with proper server configuration, SSL, monitoring, and CI/CD. Your application goes live with enterprise-grade infrastructure.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    stat: "5+ Domains",
    description:
      "Built systems across EHS, fintech, AI, sports tech, and franchise management. I design architectures that scale as your business grows.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    stat: "24hr Response",
    description:
      "Regular updates, sprint demos, and transparent progress reports. You'll always know exactly where your project stands and what's coming next.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Shield,
    title: "Long-Term Partner",
    stat: "Ongoing Support",
    description:
      "I don't disappear after launch. I offer maintenance plans, feature development, and long-term support to keep your application growing.",
    color: "from-pink-500 to-rose-500",
  },
];

export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="relative section-padding px-4 sm:px-6 lg:px-8 bg-noise">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-violet-600/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-300 mb-4">
            <Award className="h-3.5 w-3.5" />
            <span>WHY WORK WITH ME</span>
          </div>
          <h2 className="section-heading font-heading text-slate-900 dark:text-slate-100">
            What Sets Me{" "}
            <span className="text-gradient-aurora">Apart.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            I build software with clear architecture, responsive design, and production reliability. Here's why engineering teams and founders partner with me.
          </p>
        </div>

        {/* 3×2 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group glass-card glass-card-hover p-6 sm:p-8 rounded-3xl"
              >
                {/* Icon + Stat */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${reason.color}`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xs font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-violet-600 to-pink-500 dark:from-cyan-400 dark:to-violet-400">
                    {reason.stat}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-base font-bold font-heading text-slate-900 dark:text-slate-100 mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
