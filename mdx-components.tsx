import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/Callout";
import { Header } from "@/components/Header";
import { Pre } from "@/components/Pre";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Hero } from "@/components/Hero";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Callout,
    Hero,
    pre: Pre,
    wrapper: ({ children }) => (
      <div className="min-h-screen bg-[#F1F3F1] dark:bg-[#0A0D0C] transition-colors">
        <ReadingProgress />
        <Header />
        <div className="prose dark:prose-invert max-w-3xl mx-auto py-16 px-6">
          {children}
        </div>
      </div>
    ),
  };
}