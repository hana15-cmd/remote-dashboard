import StatsCard from "./StatsCard";

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <StatsCard
        label="Total Revenue"
        value="$45,231"
        change="↑ 12% from last month"
        positive
        colorClass="text-green-400"
      />

      <StatsCard
        label="Active Users"
        value="2,451"
        change="↑ 5% from last month"
        positive
        colorClass="text-blue-400"
      />

      <StatsCard
        label="Orders"
        value="1,234"
        change="↓ 3% from last month"
        positive={false}
        colorClass="text-purple-400"
      />

      <StatsCard
        label="Conversion Rate"
        value="3.2%"
        change="↑ 0.5% from last month"
        positive
        colorClass="text-yellow-400"
      />
    </div>
  );
}