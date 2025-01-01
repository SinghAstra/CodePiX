import { Card } from "@/components/ui/card";
import { Code, GitBranch, Share2, Zap } from "lucide-react";
import React from "react";

const features = [
  {
    title: "Real-Time Execution",
    description:
      "Write and run code instantly in your browser with immediate feedback and results.",
    icon: Zap,
  },
  {
    title: "Multiple Languages",
    description:
      "Support for JavaScript, Python, and more programming languages coming soon.",
    icon: Code,
  },
  {
    title: "Version Control",
    description:
      "Built-in Git-like version control to track your code changes and experiments.",
    icon: GitBranch,
  },
  {
    title: "Easy Sharing",
    description: "Share your code snippets and projects with a simple URL.",
    icon: Share2,
  },
];

export function Features() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 leading-tight tracking-tighter">
            Powerful Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to code, collaborate, and ship your projects
            faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group relative p-6 bg-card/50 backdrop-blur-sm border-gray-800 hover:bg-card/70 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;