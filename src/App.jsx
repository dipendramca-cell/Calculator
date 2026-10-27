import Display from "./componets/display";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" p-2  border border-gray-500/35 shadow-xl rounded-2xl sm:max-w-100 max-w-80 w-full bg-white">
      <Display/>
    </div>
    </div>
  );
}

export default App;
