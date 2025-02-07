import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-700">
      <Outlet />
    </div>
  );
}

export default App;
