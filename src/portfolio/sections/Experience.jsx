import FadeUp from "@/portfolio/components/FadeUp";
import SectionHeader from "@/portfolio/components/SectionHeader";
import { experiences } from "@/portfolio/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-border">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeUp className="text-center">
          <SectionHeader
            label="Experience"
            title="Selected work history."
            description="Building real-world SaaS products across EHS, AI, fintech, and enterprise domains."
            className="text-center"
            descriptionClassName="mx-auto max-w-xl"
          />
        </FadeUp>

        <div className="relative mt-12">
          <div
            className="absolute top-0 bottom-0 left-4 w-px bg-accent-blue/60 md:left-1/2 md:-translate-x-px"
            aria-hidden
          />

          <div className="space-y-10 md:space-y-12">
            {experiences.map((experience, index) => {
              const isRight = index % 2 === 0;

              return (
                <FadeUp key={`${experience.company}-${experience.period}`} delay={index * 0.1}>
                  <div className="relative grid md:grid-cols-2 md:gap-12">
                    <div
                      className={`pl-10 md:pl-0 ${isRight ? "md:pr-12 md:text-right" : "md:col-start-1 md:row-start-1"}`}
                    >
                      {!isRight && (
                        <div className="md:text-right">
                          <p className="text-sm text-text-secondary">{experience.period}</p>
                          <h3 className="mt-1 font-heading text-xl font-bold text-text-primary">
                            {experience.company}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-accent-blue">{experience.role}</p>
                          <ul className="mt-5 space-y-2.5 text-left md:text-right">
                            {experience.achievements.map((achievement) => (
                              <li key={achievement} className="text-sm leading-relaxed text-text-secondary">
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <span
                      className="absolute top-1 left-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent-blue bg-bg-primary md:left-1/2"
                      aria-hidden
                    />

                    <div className={`pl-10 md:pl-0 ${isRight ? "md:col-start-2 md:pl-12" : ""}`}>
                      {isRight && (
                        <div>
                          <p className="text-sm text-text-secondary">{experience.period}</p>
                          <h3 className="mt-1 font-heading text-xl font-bold text-text-primary">
                            {experience.company}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-accent-blue">{experience.role}</p>
                          <ul className="mt-5 space-y-2.5">
                            {experience.achievements.map((achievement) => (
                              <li key={achievement} className="text-sm leading-relaxed text-text-secondary">
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
