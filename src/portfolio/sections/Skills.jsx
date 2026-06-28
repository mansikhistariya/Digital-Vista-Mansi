import { motion } from "framer-motion";
import FadeUp from "@/portfolio/components/FadeUp";
import SectionHeader from "@/portfolio/components/SectionHeader";
import StackMarquee from "@/portfolio/components/StackMarquee";
import { skillCategories } from "@/portfolio/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-padding border-t border-border bg-bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <SectionHeader
            label="Skills"
            title="Stack & craft"
            description="Technologies I use to ship resilient, beautiful product interfaces."
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <StackMarquee />
        </FadeUp>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <FadeUp key={category.id} delay={0.1 + categoryIndex * 0.05}>
              <motion.div
                className="glass-card h-full p-6"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-heading text-lg font-semibold text-text-primary">{category.title}</h3>
                <ul className="mt-4 space-y-4">
                  {category.items.map((skill) => (
                    <li key={skill.name}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-text-primary">{skill.name}</span>
                        <span className="text-text-secondary">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
