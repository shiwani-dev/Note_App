function Filter({ filter, setFilter }) {
  return (
    <div className="flex justify-center gap-3 mb-5">
      <button
        onClick={() => setFilter("all")}
        className={`px-4 py-2 rounded-xl font-medium transition ${
          filter === "all"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("important")}
        className={`px-4 py-2 rounded-xl font-medium transition ${
          filter === "important"
            ? "bg-green-600 text-white"
            : "bg-green-100 text-green-700 hover:bg-green-200"
        }`}
      >
        Important
      </button>

      <button
        onClick={() => setFilter("notImportant")}
        className={`px-4 py-2 rounded-xl font-medium transition ${
          filter === "notImportant"
            ? "bg-red-600 text-white"
            : "bg-red-100 text-red-700 hover:bg-red-200"
        }`}
      >
        Not Important
      </button>
    </div>
  );
}

export default Filter;