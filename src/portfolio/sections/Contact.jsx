import { useCallback, useState } from "react";
import FadeUp from "@/portfolio/components/FadeUp";
import PrimaryButton from "@/portfolio/components/PrimaryButton";
import { IconGithub, IconLinkedin, IconMail, IconMapPin, IconSend } from "@/portfolio/components/icons";
import Input from "@/portfolio/components/Input";
import Textarea from "@/portfolio/components/Textarea";
import { siteConfig } from "@/portfolio/data/site";
import { sendContactEmail } from "@/utils/sendContactEmail";
import { validateContactForm } from "@/utils/validateContact";

const INITIAL_FORM = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");
  const { contact } = siteConfig;

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
    setSubmitError("");
  }, []);

  const handleBlur = useCallback(
    (event) => {
      const { name } = event.target;
      const fieldErrors = validateContactForm(form);
      if (fieldErrors[name]) {
        setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
      }
    },
    [form]
  );

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const fieldErrors = validateContactForm(form);
      if (Object.keys(fieldErrors).length > 0) {
        setErrors(fieldErrors);
        return;
      }

      setStatus("sending");
      setSubmitError("");

      try {
        await sendContactEmail({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        });

        setStatus("sent");
        setForm(INITIAL_FORM);
        setErrors({});
      } catch (error) {
        setStatus("idle");
        setSubmitError(
          error instanceof Error && error.message
            ? error.message
            : "Something went wrong. Please try again or email me directly."
        );
      }
    },
    [form]
  );

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
            noValidate
            className="glass-card overflow-hidden rounded-3xl border border-border p-8 text-left sm:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Input
                label="Your name"
                name="name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
                placeholder="Jane Doe"
                autoComplete="name"
              />
              <Input
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                placeholder="jane@company.com"
                autoComplete="email"
              />
            </div>
            <div className="mt-6">
              <Textarea
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.message}
                placeholder="Tell me a little about the project..."
              />
            </div>

            {submitError ? (
              <p className="mt-4 text-sm text-red-400" role="alert">
                {submitError}
              </p>
            ) : null}

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

              <PrimaryButton
                type="submit"
                className="px-8 py-3.5 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={status === "sending"}
              >
                {status === "sent" ? (
                  "Message sent ✓"
                ) : status === "sending" ? (
                  "Sending..."
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
