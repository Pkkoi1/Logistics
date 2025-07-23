import { BrowserRouter } from "react-router-dom";
import "./App.css";
import UserRoutes from "./routes/UserRoutes";

function App() {
  return (
    <BrowserRouter>
      <UserRoutes />
    </BrowserRouter>
  );
}

export default App;
