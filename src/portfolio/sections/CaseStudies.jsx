import FadeUp from "@/portfolio/components/FadeUp";
import SectionHeader from "@/portfolio/components/SectionHeader";
import { caseStudies } from "@/portfolio/data/caseStudies";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <SectionHeader
            variant="label"
            label="Case studies"
            title="Depth behind the pixels"
            description="How I approach complex problems—from architecture to optimization and outcomes."
          />
        </FadeUp>

        <div className="mt-10 space-y-8">
          {caseStudies.map((study, index) => (
            <FadeUp key={study.id} delay={index * 0.1}>
              <article className="glass-card overflow-hidden lg:grid lg:grid-cols-5">
                <div className="border-b border-border p-8 lg:col-span-2 lg:border-r lg:border-b-0">
                  <h3 className="font-heading text-2xl font-semibold text-text-primary">
                    {study.title}
                  </h3>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {study.results.map((result) => (
                      <div key={result.label}>
                        <p className="font-heading text-2xl font-bold text-accent-cyan">{result.value}</p>
                        <p className="mt-1 text-xs text-text-secondary">{result.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6 p-8 lg:col-span-3">
                  <div>
                    <h4 className="text-sm font-medium text-accent-blue">Problem</h4>
                    <p className="mt-2 text-text-secondary">{study.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-accent-blue">Solution</h4>
                    <p className="mt-2 text-text-secondary">{study.solution}</p>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-medium text-text-primary">Architecture</h4>
                      <ul className="mt-3 space-y-2">
                        {study.architecture.map((item) => (
                          <li key={item} className="text-sm text-text-secondary">
                            — {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-text-primary">Optimization</h4>
                      <ul className="mt-3 space-y-2">
                        {study.optimization.map((item) => (
                          <li key={item} className="text-sm text-text-secondary">
                            — {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
