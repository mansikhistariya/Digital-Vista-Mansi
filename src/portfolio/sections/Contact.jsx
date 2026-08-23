import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Copy,
  Check,
  Globe,
  Clock,
  MessageSquare,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/portfolio/components/Icons";
import { siteConfig } from "@/portfolio/data/site";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    inquiryType: "Full-Time Remote Role",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setErrorMsg("");

  //   if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
  //     setErrorMsg("Please fill out all required fields.");
  //     return;
  //   }

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(formState.email.trim())) {
  //     setErrorMsg("Please enter a valid email address.");
  //     return;
  //   }

  //   setIsSubmitting(true);

  //   // Simulate reliable API response
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setSubmitted(true);
  //     setFormState({
  //       name: "",
  //       email: "",
  //       inquiryType: "Full-Time Remote Role",
  //       message: "",
  //     });
  //   }, 1000);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (
      !formState.name.trim() ||
      !formState.email.trim() ||
      !formState.message.trim()
    ) {
      setErrorMsg("Please fill out all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formState.email.trim())) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          inquiry_type: formState.inquiryType,
          message: formState.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setSubmitted(true);

      setFormState({
        name: "",
        email: "",
        inquiryType: "Full-Time Remote Role",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      setErrorMsg(
        "Unable to send your message right now. Please try again or email me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative section-padding px-4 sm:px-6 lg:px-8 bg-noise">
      {/* Ambient Mesh Glows */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-violet-600/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-mono font-medium text-violet-600 dark:text-violet-300 mb-4">
            <Mail className="h-3.5 w-3.5" />
            <span>{siteConfig.contact.label}</span>
          </div>
          <h2 className="section-heading font-heading text-slate-900 dark:text-slate-100">
            {siteConfig.contact.title} <br />
            <span className="text-gradient-aurora">
              {siteConfig.contact.titleGradient}
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {siteConfig.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Inquiries & Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
              <div className="flex items-center gap-3 text-cyan-600 dark:text-cyan-400">
                <Mail className="h-5 w-5" />
                <h3 className="text-sm font-mono uppercase tracking-wider font-semibold">
                  Direct Contact
                </h3>
              </div>

              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-mono">
                  Primary Email
                </p>
                <div className="mt-2 flex items-center justify-between gap-2 p-3 rounded-2xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                  <span className="text-sm font-mono font-semibold text-slate-800 dark:text-slate-200 truncate">
                    {siteConfig.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="flex items-center gap-1.5 rounded-xl bg-violet-600 hover:bg-violet-700 px-3 py-1.5 text-xs font-semibold text-white transition-colors border border-violet-500/40 shrink-0"
                    data-cursor="Copy"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Timezone Card */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                  <Globe className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{siteConfig.location} (UTC+5:30)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                  <Clock className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                  <span>{siteConfig.availability}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center gap-3">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 transition-colors"
                  data-cursor="GitHub"
                >
                  <GithubIcon className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 transition-colors"
                  data-cursor="LinkedIn"
                >
                  <LinkedinIcon className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Response Time Guarantee Box */}
            <div className="glass-card p-5 rounded-3xl border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono font-semibold">
                <Check className="h-4 w-4" />
                <span>Response Guarantee</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether reviewing for full-time remote engineering roles or discussing contract project scope, I respond to all messages within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-3 text-violet-600 dark:text-violet-400 mb-6">
                <MessageSquare className="h-5 w-5" />
                <h3 className="text-sm font-mono uppercase tracking-wider font-semibold">
                  Send a Direct Message
                </h3>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/30">
                    <Check className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                    Thank you for reaching out. Mansi will review your message and reply within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-violet-600 text-white hover:bg-violet-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                      YOUR NAME *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:border-violet-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                      YOUR EMAIL ADDRESS *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:border-violet-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-type" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                      INQUIRY TYPE
                    </label>
                    <select
                      id="contact-type"
                      value={formState.inquiryType}
                      onChange={(e) =>
                        setFormState({ ...formState, inquiryType: e.target.value })
                      }
                      className="w-full rounded-2xl bg-white dark:bg-[#0c0c14] border border-slate-300 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:border-violet-500 focus:outline-none transition-colors"
                    >
                      {siteConfig.contact.serviceTypes.map((type, idx) => (
                        <option key={idx} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                      PROJECT OR ROLE DETAILS *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="Tell me about your team requirements, technology stack, or project scope..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:border-violet-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 py-3.5 text-sm font-semibold text-white shadow-glow hover:shadow-glow-lg transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
                    data-cursor="Send"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

