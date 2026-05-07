function LoadingSkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="animate-pulse rounded-xl border border-gray-200 bg-gray-50 p-4"
        >
          <div className="mb-3 h-4 w-3/4 rounded bg-gray-300"></div>
          <div className="h-3 w-1/3 rounded bg-gray-200"></div>
        </div>
      ))}
    </div>
  );
}

export default LoadingSkeleton;