export default function KeyMetrics() {
  return (
    <div className="bg-navy-dark p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">
        Key Metrics
      </h2>

      <div className="space-y-4">
        <Metric label="Average Order Value" value="$127" color="text-green-400" />
        <Metric label="Customer Retention" value="84%" color="text-blue-400" />
        <Metric label="Cart Abandonment" value="23%" color="text-yellow-400" />
        <Metric label="Net Promoter Score" value="72" color="text-purple-400" />
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-300">{label}</span>
      <span className={`text-2xl font-bold ${color}`}>
        {value}
      </span>
    </div>
  );
}