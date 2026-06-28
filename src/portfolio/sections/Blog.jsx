import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "@/portfolio/components/FadeUp";
import Badge from "@/portfolio/components/Badge";
import SectionHeader from "@/portfolio/components/SectionHeader";
import { blogPosts } from "@/portfolio/data/blog";

export default function Blog() {
  return (
    <section id="blog" className="section-padding border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <SectionHeader
            variant="label"
            label="Writing"
            title="Insights & notes"
            description="Thoughts on frontend craft, systems, and shipping quality at speed."
          />
        </FadeUp>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <FadeUp key={post.slug} delay={index * 0.08}>
              <motion.a
                href="#"
                className="group glass-card block h-full p-6"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <Badge>{post.tag}</Badge>
                <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary transition group-hover:text-accent-blue">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-text-secondary">
                  <span>
                    {post.date} · {post.readTime}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-text-secondary transition group-hover:text-accent-blue"
                  />
                </div>
              </motion.a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
