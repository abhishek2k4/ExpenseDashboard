import { useState, useMemo, useEffect } from "react";
const ROWS_PER_PAGE = 5;
function ExpenseTable({ transactions, currentDate }) {
  const [currentPage, setCurrentPage] = useState(1);

  // 1️⃣ derive selected month
  const selectedMonth = `${currentDate.getFullYear()}-${String(
    currentDate.getMonth() + 1
  ).padStart(2, "0")}`;

  // 2️⃣ filter transactions for selected month
  const filteredData = useMemo(() => {
    return transactions.filter((item) => item.date.startsWith(selectedMonth));
  }, [transactions, selectedMonth]);

  // 3️⃣ reset page when month changes (CRUCIAL)
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedMonth]);

  // 4️⃣ pagination on filtered data
  const totalPages = Math.ceil(filteredData.length / ROWS_PER_PAGE);
  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const currentRows = filteredData.slice(
    startIndex,
    startIndex + ROWS_PER_PAGE
  );

  return (
    <div className="bg-white rounded-xl p-4">
      <h2 className="text-xs font-semibold text-gray-400 uppercase mb-4">
        Transactions This Month
      </h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-blue-800 font-semibold border-b bg-gray-100">
            <th className="py-3 px-2 rounded-tl-xl">Payee</th>
            <th className="py-3">Date</th>
            <th className="py-3">Amount</th>
            <th className="py-3 rounded-tr-xl">Category</th>
          </tr>
        </thead>

        <tbody className="text-gray-700">
          {currentRows.length === 0 ? (
            <tr>
              <td colSpan="4" className="py-6 text-center text-gray-400">
                No transactions for this month
              </td>
            </tr>
          ) : (
            currentRows.map((item, idx) => (
              <tr key={idx} className="border-b last:border-b-0">
                <td className="py-3 px-2">{item.payee}</td>
                <td className="py-3">{item.date}</td>
                <td className="py-3 font-medium">₹{item.amount.toFixed(2)}</td>
                <td className="py-3">{item.category}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4 text-sm">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 text-white rounded bg-blue-800 disabled:opacity-60"
          >
            Prev
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-white rounded bg-blue-800 disabled:opacity-60"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default ExpenseTable;
