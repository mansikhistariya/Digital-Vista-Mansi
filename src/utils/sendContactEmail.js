import { siteConfig } from "@/portfolio/data/site";

function isSubmitSuccess(value) {
  return value === true || value === "true";
}

export async function sendContactEmail({ name, email, message }) {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.email)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _replyto: email,
      _subject: `Portfolio message from ${name}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok || !isSubmitSuccess(data?.success)) {
    throw new Error(data?.message ?? "Failed to send message");
  }
}
