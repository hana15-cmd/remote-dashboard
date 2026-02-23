import { salesData } from "./data/dashboardData";


export default function SalesTable() {
  return (
    <div className="bg-navy-dark p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Monthly Sales</h2>

      <table className="w-full text-sm">
        <thead className="text-gray-400">
          <tr>
            <th className="text-left pb-2">Month</th>
            <th className="text-left pb-2">Sales</th>
            <th className="text-left pb-2">Expenses</th>
            <th className="text-left pb-2">Profit</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((item) => {
            const profit = item.sales - item.expenses;
            return (
              <tr key={item.month} className="border-t border-gray-700">
                <td className="py-2">{item.month}</td>
                <td className="text-green-400">${item.sales}</td>
                <td className="text-red-400">${item.expenses}</td>
                <td className={profit >= 0 ? "text-green-400" : "text-red-400"}>
                  ${profit}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}