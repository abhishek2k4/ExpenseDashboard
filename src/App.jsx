import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <div className="bg-purple-100 flex flex-col pb-8 min-h-screen">
      <center className="my-5">
        <h2 className="text-2xl font-bold text-blue-800">
          &lt;&lt; December 2024 &gt;&gt;
        </h2>
      </center>
      <DashBoard />
    </div>
  );
}

export default App;
