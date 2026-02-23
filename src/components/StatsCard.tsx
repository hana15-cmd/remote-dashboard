type Props = {
  label: string;
  value: string;
  change: string;
  positive?: boolean;
  colorClass: string;
};

export default function StatsCard({
  label,
  value,
  change,
  positive = true,
  colorClass,
}: Props) {
  return (
    <div className="bg-navy-dark p-4 rounded-lg">
      <div className="text-gray-400 text-sm mb-1">{label}</div>
      <div className={`text-2xl font-bold ${colorClass}`}>
        {value}
      </div>
      <div
        className={`text-xs mt-1 ${
          positive ? "text-green-400" : "text-red-400"
        }`}
      >
        {change}
      </div>
    </div>
  );
}