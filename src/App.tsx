import { Outlet } from "react-router";
import "./App.css";

function App() {
  document.title = "Lại Trọng Minh Trường";
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-green-500 to-green-300">
      <Outlet />
    </div>
  );
}

export default App;
