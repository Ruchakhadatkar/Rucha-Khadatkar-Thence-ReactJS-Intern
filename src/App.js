import Homepage from "./pages/Home/Homepage";
import RegistrationPage from "./pages/Registration/RegistrationPage";
import SuccessPage from "./pages/Success/SuccessPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </div>
  );
}

export default App;
