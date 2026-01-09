import React from "react";
import data from "../data/transactions.json";

function TotalSpent({ transactions, currentDate }) {
  const selectedMonth = `${currentDate.getFullYear()}-${String(
    currentDate.getMonth() + 1
  ).padStart(2, "0")}`;
  //  console.log(transactions);

   const total = transactions
    .filter(t => t.date.startsWith(selectedMonth))
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="bg-white p-2 rounded-xl">
      <center>
        <p className="font-bold text-sm text-gray-500">
          TOTAL SPENT THIS MONTH
          <span className="text-2xl text-black mx-2">
             ₹{total.toFixed(2)}
          </span>
        </p>
      </center>
    </div>
  );
}

export default TotalSpent;
