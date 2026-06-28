import FadeUp from "@/portfolio/components/FadeUp";
import SectionHeader from "@/portfolio/components/SectionHeader";
import { siteConfig } from "@/portfolio/data/site";

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <SectionHeader
            label="About"
            title="Building products with precision."
            description={about.story}
            descriptionClassName="max-w-3xl"
          />
        </FadeUp>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <FadeUp delay={0.1}>
            <ul className="space-y-2.5">
              {about.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary before:mt-1.5 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent-blue"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>

          <div className="grid grid-cols-2 gap-3">
            {about.stats.map((stat, index) => (
              <FadeUp key={stat.label} delay={0.15 + index * 0.05} className="h-full">
                <div className="glass-card flex h-full flex-col justify-center p-5 transition hover:border-accent-blue/20 hover:shadow-glow">
                  <p className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <FadeUp delay={0.3}>
            <div className="glass-card h-full p-5">
              <h3 className="font-heading text-base font-semibold text-text-primary">Education</h3>
              <p className="mt-2 text-sm font-medium text-text-primary">{about.education.degree}</p>
              <p className="text-sm text-text-secondary">{about.education.school}</p>
              <p className="mt-1 text-sm text-text-secondary">
                {about.education.period} · {about.education.grade}
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.35}>
            <div className="glass-card h-full p-5">
              <h3 className="font-heading text-base font-semibold text-text-primary">Certifications</h3>
              <ul className="mt-2 space-y-1.5">
                {about.certifications.map((certification) => (
                  <li key={certification} className="text-sm leading-relaxed text-text-secondary">
                    — {certification}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
