import { recentActivity } from "./data/dashboardData";


export default function RecentActivity() {
  return (
    <div className="bg-navy-dark p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

      <div className="space-y-4">
        {recentActivity.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`w-3 h-3 rounded-full ${item.color}`} />
            <div>
              <div>{item.text}</div>
              <div className="text-gray-400 text-xs">
                {item.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}