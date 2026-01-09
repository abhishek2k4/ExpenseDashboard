import { useState } from "react";
import data from "../data/transactions.json";
const ROWS_PER_PAGE = 5;
function ExpenseTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInput, setPageInput] = useState("");

  const totalPages = Math.ceil(data.length / ROWS_PER_PAGE);
  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const currentRows = data.slice(startIndex, startIndex + ROWS_PER_PAGE);

  const goToPage = () => {
    const page = Number(pageInput);
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
    setPageInput("");
  };
  return (
    <div className="bg-white">
      <div className="bg-white rounded-xl p-4">
        <h2 className="text-xs font-semibold text-gray-400 uppercase mb-4">
          Transactions This Month
        </h2>

        <table className="w-full text-sm transition">
          <thead>
            <tr className="text-left text-blue-800 font-semibold border-b bg-gray-100">
              <th className="py-3 px-2 rounded-tl-xl">Payee</th>
              <th className="py-3">Date</th>
              <th className="py-3">Amount</th>
              <th className="py-3 rounded-tr-xl">Category</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {currentRows.map((item, idx) => (
              <tr key={idx} className="border-b last:border-b-0">
                <td className="py-3 px-2">{item.payee}</td>
                <td className="py-3">{item.date}</td>
                <td className="py-3 font-medium">${item.amount.toFixed(2)}</td>
                <td className="py-3">{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* PAGINATION */}
        <div className="flex items-center justify-between mt-4 text-sm">
          {/* Prev */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 cursor-pointer text-white rounded bg-blue-800 disabled:opacity-60 active:scale-95"
          >
            Prev
          </button>

          <div className="flex justify-center items-center gap-2 mt-4 text-sm text-gray-700 font-medium">
            <span>Page</span>

            <input
              type="number"
              min="1"
              max={totalPages}
              value={currentPage}
              onChange={(e) => {
                const value = Number(e.target.value);
                if (value >= 1 && value <= totalPages) {
                  setCurrentPage(value);
                }
              }}
              className="w-12 text-center border rounded px-1 py-0.5 focus:outline-none focus:ring-1 focus:bg-blue-800 focus:text-white"
            />

            <span>of {totalPages}</span>
          </div>

          {/* Next */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 cursor-pointer  text-white rounded bg-blue-800 disabled:opacity-60 active:scale-95"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTable;
