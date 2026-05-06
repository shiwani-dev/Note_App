function Filter({ filter, handleFilter }) {
  const buttonStyle = (type, activeClass, inactiveClass) =>
    `rounded-xl px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 active:scale-95 ${
      filter === type ? activeClass : inactiveClass
    }`;

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
      <button
        onClick={() => handleFilter("all")}
        className={buttonStyle(
          "all",
          "bg-blue-600 text-white shadow-sm shadow-blue-200",
          "bg-white/80 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
        )}
      >
        📋 All
      </button>

      <button
        onClick={() => handleFilter("important")}
        className={buttonStyle(
          "important",
          "bg-green-500 text-white shadow-sm shadow-green-200",
          "bg-white/80 text-slate-600 hover:bg-green-50 hover:text-green-600"
        )}
      >
        ⭐ Important
      </button>

      <button
        onClick={() => handleFilter("notImportant")}
        className={buttonStyle(
          "notImportant",
          "bg-pink-500 text-white shadow-sm shadow-pink-200",
          "bg-white/80 text-slate-600 hover:bg-pink-50 hover:text-pink-600"
        )}
      >
        🌸 Normal
      </button>
    </div>
  );
}

export default Filter;