const categories = [
  "All",
  "Product",
  "Blog",
  "Press",
];

export default function CategoryTabs({
  activeCategory,
  setActiveCategory,
}: any) {
  return (
    <div className="mb-8">

      {/* Search */}
      <div className="relative mb-6 hidden md:block">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="
            absolute left-4 top-1/2
            h-5 w-5
            -translate-y-1/2
            text-gray-400
          "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m21 21-4.34-4.34"
          />

          <circle cx="11" cy="11" r="8" />
        </svg>

        <input
          type="text"
          placeholder="Search for posts"
          className="
            w-full
            rounded-full
            bg-white
            py-3
            pl-12
            pr-4
            text-base
            text-gray-900
            placeholder-gray-400
            shadow-sm
            outline-none
            transition
            focus:border-2
            focus:border-gray-300
            md:text-sm
          "
        />
      </div>

      {/* Tabs */}
      <div className="relative z-10 flex flex-wrap gap-2">

        {categories.map((category, i) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              flex items-center justify-center
              rounded-full
              px-4 py-2
              text-sm
              font-medium
              shadow-sm
              transition-all
              duration-200

              ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-white text-gray-500 hover:bg-zinc-100"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}