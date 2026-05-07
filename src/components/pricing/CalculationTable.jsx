export default function CalculationTable({ title, rows }) {
  if (!rows?.length) return null;

  return (
    <div className="mt-4 rounded-lg border border-gray-200 overflow-x-auto">
      {title ? (
        <div className="bg-gray-100 px-3 py-2 text-sm font-semibold text-navy">
          {title}
        </div>
      ) : null}
      <table className="w-full text-sm min-w-[280px]">
        <tbody>
          {rows.map(([label, value]) => {
            const isTotal =
              label.includes("Final") ||
              label.includes("Saving") ||
              label.includes("Discount") ||
              label.includes("Separate");
            return (
              <tr key={`${label}-${value}`} className="border-t border-gray-200">
                <td className="px-3 py-2 text-gray-700">{label}</td>
                <td
                  className={`px-3 py-2 text-right ${
                    isTotal ? "font-semibold text-navy" : "text-gray-900"
                  }`}
                >
                  {value}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

