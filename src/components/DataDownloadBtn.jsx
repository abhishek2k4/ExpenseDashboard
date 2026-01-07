import dataSet from "../data/transactions.json";

function DataDownloadBtn() {
  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(dataSet, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dataset.json";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={downloadJSON}
      className="px-4 py-2 text-sm bg-blue-800 text-white rounded hover:bg-indigo-900 cursor-pointer"
    >
      Download Dataset
    </button>
  );
}

export default DataDownloadBtn;
