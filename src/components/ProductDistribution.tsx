import { productDistribution } from "./data/dashboardData";


export default function ProductDistribution() {
  return (
    <div className="bg-navy-dark p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">
        Product Distribution
      </h2>

      <div className="space-y-4">
        {productDistribution.map((product) => (
          <div key={product.name}>
            <div className="flex justify-between mb-1">
              <span>{product.name}</span>
              <span>{product.percentage}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className={`${product.color} h-2 rounded-full`}
                style={{ width: `${product.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}