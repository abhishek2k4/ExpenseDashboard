import React from "react";
import data from "../data/transactions.json";

function TotalSpent() {
  const month = "2023-10";

  const monthlyTotal = data
    .filter((item) => item.date.startsWith(month))
    .reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="bg-white p-2 rounded-xl">
      <center>
        <p className="font-bold text-sm text-gray-500">
          TOTAL SPENT THIS MONTH
          <span className="text-2xl text-black mx-2">
             ₹{monthlyTotal.toFixed(2)}
          </span>
        </p>
      </center>
    </div>
  );
}

export default TotalSpent;
