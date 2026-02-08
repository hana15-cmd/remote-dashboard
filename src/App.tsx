export default function App() {
  return (
    <div className="p-6 bg-navy-light min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-2">Dashboard MFE</h1>
      <p className="text-gray-300 mb-8">Real-time metrics and analytics</p>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Revenue</div>
          <div className="stat-value text-green">$45,231</div>
          <div className="stat-change positive">↑ 12% from last month</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Active Users</div>
          <div className="stat-value text-blue">2,451</div>
          <div className="stat-change positive">↑ 5% from last month</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Orders</div>
          <div className="stat-value text-purple">1,234</div>
          <div className="stat-change negative">↓ 3% from last month</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Conversion Rate</div>
          <div className="stat-value text-yellow">3.2%</div>
          <div className="stat-change positive">↑ 0.5% from last month</div>
        </div>
      </div>

      {/* Simple Data Tables instead of charts */}
      <div className="charts-grid">
        {/* Sales Table */}
        <div className="chart-container">
          <h2 className="chart-title">Monthly Sales</h2>
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Sales</th>
                <th>Expenses</th>
                <th>Profit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jan</td>
                <td className="text-green">$4,000</td>
                <td className="text-red">$2,400</td>
                <td className="text-green">$1,600</td>
              </tr>
              <tr>
                <td>Feb</td>
                <td className="text-green">$3,000</td>
                <td className="text-red">$1,398</td>
                <td className="text-green">$1,602</td>
              </tr>
              <tr>
                <td>Mar</td>
                <td className="text-green">$2,000</td>
                <td className="text-red">$9,800</td>
                <td className="text-red">-$7,800</td>
              </tr>
              <tr>
                <td>Apr</td>
                <td className="text-green">$2,780</td>
                <td className="text-red">$3,908</td>
                <td className="text-red">-$1,128</td>
              </tr>
              <tr>
                <td>May</td>
                <td className="text-green">$1,890</td>
                <td className="text-red">$4,800</td>
                <td className="text-red">-$2,910</td>
              </tr>
              <tr>
                <td>Jun</td>
                <td className="text-green">$2,390</td>
                <td className="text-red">$3,800</td>
                <td className="text-red">-$1,410</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Product Distribution */}
        <div className="chart-container">
          <h2 className="chart-title">Product Distribution</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Product A</span>
                <span className="text-blue">33%</span>
              </div>
              <div className="w-full bg-navy-dark rounded-full h-2">
                <div className="bg-blue h-2 rounded-full" style={{ width: '33%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Product B</span>
                <span className="text-green">25%</span>
              </div>
              <div className="w-full bg-navy-dark rounded-full h-2">
                <div className="bg-green h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Product C</span>
                <span className="text-yellow">25%</span>
              </div>
              <div className="w-full bg-navy-dark rounded-full h-2">
                <div className="bg-yellow h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Product D</span>
                <span className="text-purple">17%</span>
              </div>
              <div className="w-full bg-navy-dark rounded-full h-2">
                <div className="bg-purple h-2 rounded-full" style={{ width: '17%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="chart-container">
          <h2 className="chart-title">Recent Activity</h2>
          <div className="space-y-4">
            <div className="activity-item">
              <div className="activity-dot green"></div>
              <div className="flex-1">
                <div className="activity-text">New order received</div>
                <div className="activity-time">2 minutes ago</div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot blue"></div>
              <div className="flex-1">
                <div className="activity-text">User registered</div>
                <div className="activity-time">15 minutes ago</div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot yellow"></div>
              <div className="flex-1">
                <div className="activity-text">Payment processed</div>
                <div className="activity-time">1 hour ago</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="chart-container">
          <h2 className="chart-title">Key Metrics</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Average Order Value</span>
              <span className="text-2xl font-bold text-green">$127</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Customer Retention</span>
              <span className="text-2xl font-bold text-blue">84%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Cart Abandonment</span>
              <span className="text-2xl font-bold text-yellow">23%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Net Promoter Score</span>
              <span className="text-2xl font-bold text-purple">72</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}