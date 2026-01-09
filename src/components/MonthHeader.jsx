import { useState } from "react";

export default function MonthHeader({ currentDate, setCurrentDate }) {
  const label = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  function changeMonth(delta) {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + delta
      )
    );
  }

  return (
     <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-4">
      <button className="cursor-pointer " onClick={() => changeMonth(-1)}>&lt;&lt;</button>
      {label}
      <button className="cursor-pointer" onClick={() => changeMonth(1)}>&gt;&gt;</button>
    </h2>
  );
}
