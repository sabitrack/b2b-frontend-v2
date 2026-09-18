import { FeatureGate } from "@/components/shared/FeatureGate";

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ accountId: string }>;
}) {
  const { accountId } = await params;
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Welcome back! Here is an overview of your platform.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-500">Total Metric {i}</div>
              <div className="text-gray-400">📊</div>
            </div>
            <div className="mt-2 text-3xl font-bold text-gray-900">12,34{i}</div>
            <div className="mt-2 text-xs font-medium text-green-600">+12% from last month</div>
          </div>
        ))}
      </div>

      <FeatureGate feature="advanced_analytics">
        <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg text-purple-700">🚀</div>
            <h2 className="text-lg font-bold text-purple-900">Premium Analytics</h2>
          </div>
          <div className="h-64 flex items-center justify-center rounded-lg border border-purple-200 bg-white">
            <p className="text-purple-600 font-medium">Deep Dive Chart (Only visible to premium tenants)</p>
          </div>
        </div>
      </FeatureGate>

      <div className="flex h-96 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="font-medium text-gray-500">Standard Chart Placeholder</p>
      </div>
    </div>
  );
}
