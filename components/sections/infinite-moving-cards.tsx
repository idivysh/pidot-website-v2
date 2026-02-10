"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="flex flex-col items-center justify-center bg-black overflow-hidden">
      <InfiniteMovingCards items={blogCards} direction="right" speed="slow" />
    </div>
  );
}

const blogCards = [
  {
    title: "World’s First Corporate Simulation Ecosystem",
    subtitle: "",
    quote:
      "Where leadership, decision-making, and AI converge to train the next generation of Thinkers.",
    date: "August 2025",
    image: "/assets/InfiniteCardImages/img1.png",
    link: "/blog/corporate-simulation",
  },
  {
    title: "LLM That Outsmarts ChatGPT in Math at INR 20,000",
    subtitle: "",
    quote:
      "Built by Fermion AI Labs — benchmarked to outperform ChatGPT in mathematical reasoning and logic.",
    date: "November 2025",
    image: "/assets/InfiniteCardImages/img2.png",
    link: "/blog/llm-math",
  },
  {
    title: "The Real World. Rebuilt as a Simulation",
    subtitle: "",
    quote:
      "CSP mirrors the pulse of corporate life — decisions, dilemmas, and real consequence.",
    date: "September 2025",
    image: "/assets/InfiniteCardImages/img3.png",
    link: "/blog/simulation",
  },
  {
    title: "From Campus to Corporate under 30 days",
    subtitle: "",
    quote:
      "CSP’s structured learning path transforms students into industry-ready professionals.",
    date: "September 2025",
    image: "/assets/InfiniteCardImages/img4.png",
    link: "/blog/campus-to-corporate",
  },
  {
    title: "A Community Built of Next-Gen AI Builders",
    subtitle: "",
    quote:
      "Fermion AI Labs is where builders and engineers learn to shape intelligence.",
    date: "July 2025",
    image: "/assets/InfiniteCardImages/img5.png",
    link: "/blog/ai-community",
  },
  {
    title: "AI That Designs Training Itself",
    subtitle: "",
    quote:
      "PI DOT’s adaptive intelligence crafts personalized simulation paths.",
    date: "November 2025",
    image: "/assets/InfiniteCardImages/img6.png",
    link: "/blog/pi-dot-ai",
  },
];
