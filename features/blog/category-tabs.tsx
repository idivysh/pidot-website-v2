"use client";

interface CategoryTabsProps {
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
}

const categories = [
  "All",
  "Placements",
  "Workshops",
  "Hackathons",
  "Industry Connect",
];

export function CategoryTabs({
  activeCategory,
  setActiveCategory,
}: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`rounded-xl px-5 py-2 text-sm transition-all
            ${
              activeCategory === category
                ? "bg-[#f69507] text-white"
                : "bg-zinc-900 text-zinc-400"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}