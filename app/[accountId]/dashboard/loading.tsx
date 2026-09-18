export default function DashboardLoading() {
  return (
    <div className="flex h-full min-h-[400px] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div 
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
          role="status"
          aria-label="Loading dashboard"
        >
          <span className="sr-only">Loading dashboard...</span>
        </div>
        <p className="text-sm font-medium text-gray-500">Loading Dashboard...</p>
      </div>
    </div>
  );
}
