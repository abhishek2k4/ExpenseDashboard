import { Chart } from "react-google-charts";
import data from "../data/transactions.json";



function PieChart() {
    const pieData = [
  ["Category", "Amount"],
  ...Object.entries(
    data.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + item.amount;
      return acc;
    }, {})
  ),
];

//   const data = [
//     ["Task", "Hours per Day"],
//     ["Work", 11],
//     ["Eat", 2],
//     ["Commute", 2],
//     ["Watch TV", 2],
//     ["Sleep", 7],
//   ];
  const options = {
    height: "100%",
    width:"100%",
    chartArea: {
      width: "100%",
      height: "100%",
    },
    pieStartAngle: 135,
    legend: {
    position: "right",
    alignment: "center",
  },
  };
  

  return <Chart chartType="PieChart" data={pieData} legendToggle options={options}/>;
}

export default PieChart;
