import { siteConfig } from "@/portfolio/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-8">
        <p className="text-sm text-text-secondary">
          © {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-text-secondary">
          <a href="#projects" className="hover:text-text-primary">
            Work
          </a>
          <a href={siteConfig.social.github} className="hover:text-text-primary">
            GitHub
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-text-primary">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

