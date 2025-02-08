import { Outlet } from "react-router";
import "./App.css";

function App() {
  document.title = "Lại Trọng Minh Trường";
  return (
    <div className="w-screen h-screen bg-green-200">
      <Outlet />
    </div>
  );
}

export default App;
