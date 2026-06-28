import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { siteConfig } from "@/portfolio/data/site";
import CursorGlow from "@/portfolio/components/CursorGlow";
import MagneticButton from "@/portfolio/components/MagneticButton";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-28 pb-16">
      <CursorGlow />

      <div className="relative z-20 mx-auto max-w-4xl px-6 lg:px-8">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-white/[0.04] px-4 py-2 text-sm text-text-secondary backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {siteConfig.availabilityBadge}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-4xl font-bold leading-[1.12] tracking-tight text-text-primary sm:text-5xl lg:text-6xl xl:text-[3.5rem]"
        >
          {hero.greeting}{" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
            {hero.headlineGradient}
          </span>{" "}
          {hero.headlineEnd}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary"
        >
          Frontend Developer with{" "}
          <strong className="font-semibold text-text-primary">{hero.introHighlight}</strong>{" "}
          building performant, accessible products at scale. {hero.techLine}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            as="a"
            href={hero.ctas.primary.href}
            className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 shadow-[0_0_28px_rgba(59,130,246,0.35)]"
          >
            {hero.ctas.primary.label} <ArrowRight size={16} />
          </MagneticButton>

          <MagneticButton as="a" href={hero.ctas.secondary.href} variant="secondary" className="rounded-full">
            {hero.ctas.secondary.label}
          </MagneticButton>

          <a
            href={hero.ctas.resume.href}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-2 text-sm font-medium text-text-secondary transition hover:text-text-primary"
          >
            <Download size={16} />
            {hero.ctas.resume.label}
          </a>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-3 text-sm text-text-secondary"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={15} className="text-text-secondary" />
            {siteConfig.locationShort}
          </span>
          <span className="text-border">|</span>
          <span>{hero.footerLine}</span>
        </motion.div>
      </div>
    </section>
  );
}
