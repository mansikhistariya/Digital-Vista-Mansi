import { useCallback, useState } from "react";
import FadeUp from "@/portfolio/components/FadeUp";
import PrimaryButton from "@/portfolio/components/PrimaryButton";
import { IconGithub, IconLinkedin, IconMail, IconMapPin, IconSend } from "@/portfolio/components/icons";
import Input from "@/portfolio/components/Input";
import Textarea from "@/portfolio/components/Textarea";
import { siteConfig } from "@/portfolio/data/site";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const { contact } = siteConfig;

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    setSent(true);
  }, []);

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <FadeUp>
          <p className="text-xs font-medium tracking-[0.25em] text-text-secondary">
            — {contact.label} —
          </p>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            {contact.title}{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-500 to-violet-600 bg-clip-text text-transparent">
              {contact.titleGradient}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-text-secondary">
            {contact.description}
          </p>
        </FadeUp>

        <FadeUp delay={0.15} className="mt-10">
          <form
            onSubmit={handleSubmit}
            className="glass-card overflow-hidden rounded-3xl border border-border p-8 text-left sm:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Input label="Your name" name="name" required placeholder="Jane Doe" />
              <Input label="Email" name="email" type="email" required placeholder="jane@company.com" />
            </div>
            <div className="mt-6">
              <Textarea
                label="Message"
                name="message"
                required
                placeholder="Tell me a little about the project..."
              />
            </div>

            <div className="mt-6 flex flex-col gap-5 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-5 text-sm text-text-secondary">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 hover:text-text-primary"
                >
                  <IconMail size={16} />
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-text-primary"
                >
                  <IconGithub size={16} />
                  GitHub
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-text-primary"
                >
                  <IconLinkedin size={16} />
                  LinkedIn
                </a>
              </div>

              <PrimaryButton type="submit" className="px-8 py-3.5">
                {sent ? (
                  "Message sent ✓"
                ) : (
                  <>
                    Send message <IconSend size={16} />
                  </>
                )}
              </PrimaryButton>
            </div>
          </form>
        </FadeUp>

        <FadeUp delay={0.25}>
          <p className="mt-8 inline-flex items-center gap-2 text-sm text-text-secondary">
            <IconMapPin size={15} />
            {siteConfig.location} • Available worldwide (remote)
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
