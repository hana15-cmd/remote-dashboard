import KeyMetrics from "./components/KeyMetricts";
import ProductDistribution from "./components/ProductDistribution";
import RecentActivity from "./components/RecentActivity";
import SalesTable from "./components/SalesTable";
import StatsGrid from "./components/StatsGrid";


export default function App() {
  return (
    <div className="p-6 bg-navy-light min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-2">Dashboard MFE</h1>
      <p className="text-gray-300 mb-8">
        Real-time metrics and analytics
      </p>

      <StatsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <SalesTable />
        <ProductDistribution />
        <RecentActivity />
        <KeyMetrics />
      </div>
    </div>
  );
}